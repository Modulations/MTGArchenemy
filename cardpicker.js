// var fs = require('fs');
// var files = fs.readdirSync('./assets/cards/');
// console.log(files);

/* Adding the script tag to the head as suggested before */

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "http://code.jquery.com/jquery-2.2.1.min.js";

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

function handler() {
   console.log('jquery added :)');
   loadFileNames('./assets/cards/')
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            alert('Files could not be loaded. please check console for details');
            console.error(error);
        });
}
function loadFileNames(dir) {
    return new Promise((resolve, reject) => {
        try {
            var fileNames = new Array();
            $.ajax({
                url: dir,
                success: function (data) {
                    for(var i = 1; i < $(data).find('li span.name').length; i++){
                        var elem = $(data).find('li span.name')[i];
                        fileNames.push(elem.innerHTML);
                    }
                    return resolve(fileNames);
                }
            });
        } catch (ex) {
            return reject(new Error(ex));
        }
    });
}
