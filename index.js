#include "cc.js";

//var root = Folder.selectDialog();
//var folders = root.getFiles();
//var f = folders.length;
// alert("Found: " + f);

alert(rgb([0, 0, 0], [255, 255, 255])); // = 21


/*
while (f--) {

    

	if (folders[f].name.match(/BAE2/)) {

		var newlessons = Folder(folders[f].fsName + '/New_Lessons');
		var files = newlessons.getFiles('*.indd');
		var i = files.length;

		while (i--) {

			app.open(files[i]);
			var doc = app.activeDocument;
			doc.fix();
			doc.close(SaveOptions.YES);
		}
    }
    
}

*/