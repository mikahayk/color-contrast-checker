#include "cc.js";
#include "colors-helper.js";

/*
var score1 = rgb([0, 0, 0], [255, 255, 255]);
alert(score1); // = 21
alert(score(score1));

*/


var doc = app.activeDocument;

//Array of every single pageItem in the document
var myItems = doc.allPageItems;
var  n = myItems.length, tfs = [], nItem;

//Looping through page items to collect text frames
while ( n-- ) {
	nItem = myItems[n];
	(nItem instanceof TextFrame) && tfs.push ( nItem );
}
n = tfs.length;
alert( n + " textframes have been found" );

while (n--) {
	var textFrame = tfs[n];
	var txt = textFrame.texts[0].fillColor
	
	if (String(txt.space) == 'CMYK') {
		var textHex = cmykToHex(txt.colorValue[0], txt.colorValue[1], txt.colorValue[2], txt.colorValue[3]);
		alert(textHex);

		// find background color HEX and run contras ratio check against textHex

		// var score2 = hex(textHex, backgroundHex);
		// alert(score(score2));

	} else {
		// ..
		// TO DO
	}

	
}