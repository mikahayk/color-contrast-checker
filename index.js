#include "cc.js";
#include "colors-helper.js";


var doc = app.activeDocument;

//Array of every single pageItem in the document
var myItems = doc.allPageItems;
var  n = myItems.length, tfs = [], nonTextObjects = [], objOverlaps = [], nItem;

//Looping through page items to collect text frames
while ( n-- ) {
	nItem = myItems[n];
	if(nItem instanceof TextFrame) {
		tfs.push ( nItem );
	} else {
		nonTextObjects.push ( nItem );
	}
}

n = tfs.length;
//alert( n + " textframes have been found" );
$.writeln(n + " textframes have been found \n" );

// Looping through text frames and identify overlaps
while (n--) {
	var textFrame = tfs[n];
	txtFrameBounds = textFrame.geometricBounds;
	l = nonTextObjects.length;
	while (l--) {
		obj = nonTextObjects[l];
		objBounds = obj.geometricBounds;
		// Check if the txtFrame overlaps with obj's bounds
		if (!(objBounds[0] > txtFrameBounds[2] ||
				objBounds[2] < txtFrameBounds[0] ||
				objBounds[1] > txtFrameBounds[3] ||
				objBounds[3] < txtFrameBounds[1])) {
			
			// Save overlaps into objOverlaps in pairs { obj, textFrame }
			var element = {};
			element.obj = obj;
			element.textFrame = textFrame;
			objOverlaps.push(element);
		}
	}	
}

// Looping through overlaps and perform contrast checks
n = objOverlaps.length;
while (n--) { 

	var txt = objOverlaps[n].textFrame.texts[0].fillColor
	var graphic = objOverlaps[n].obj.fillColor;

	if (String(txt.space) == 'CMYK') {
		var textHex = cmykToHex(txt.colorValue[0], txt.colorValue[1], txt.colorValue[2], txt.colorValue[3]);
		$.writeln("Text color: ", textHex);
	}
	
	if (String(graphic.space) == 'CMYK') {
		var graphicHex = cmykToHex(graphic.colorValue[0], graphic.colorValue[1], graphic.colorValue[2], graphic.colorValue[3]);
		$.writeln("Bakcground graphic color: ", graphicHex);
	}

	// Calculate the ratio
	var ratio = hex(textHex, graphicHex);
	$.writeln("CC ratio between ", textHex, " and ", graphicHex, "is ", ratio);
	$.writeln("Status: ", score(ratio), "\n");

}
