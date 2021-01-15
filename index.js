#include "cc.js";


var score1 = rgb([0, 0, 0], [255, 255, 255]);
alert(score1); // = 21
alert(score(score1));

var score2 = hex('#e8148b', '#00afec');
alert(score2); // = 21
alert(score(score2));



/*


//var root = Folder.selectDialog();
//var folders = root.getFiles();
//var f = folders.length;
// alert("Found: " + f);

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