
exports.makeTablesNotBlockIfSafeToDoSo = function() {
    // Tables which are narrower than their container look funny - this is caused by table
    // css 'display' being set to 'block'. But this *is needed* when the table content is
    // wider than the table's container. So conditionally set table display to 'table' if
    // the table isn't as wide as its container. Result: things which need horizontal
    // overflow scrolling still can do so, but things which don't need to scroll look
    // so much better. (See the "San Francisco" article with and without this method for
    // comparison.)
    var tbodies = document.getElementsByTagName('TBODY');
    for (var i = 0; i < tbodies.length; ++i) {
        var tbody = tbodies[i];
        var tbodyRect = tbody.getBoundingClientRect();
        var parentRect = tbody.parentElement.getBoundingClientRect();
        //var style = window.getComputedStyle(tbody);
        if(tbodyRect.width < parentRect.width){
            tbody.parentElement.style.float = "";
            tbody.parentElement.style.margin = "";
            tbody.parentElement.style.display = 'table';
        }
    }
}

exports.reduceWeirdWebkitMargin = function() {
    // See the "Tuna" article for tables having weird left margin. This removes it.
    var dds = document.getElementsByTagName('DD');
    for (var i = 0; i < dds.length; ++i) {
        dds[i].style["-webkit-margin-start"] = "1px";
    }
}

exports.allowDivWidthsToFlow = function() {
    // See the "San Francisco" article for divs having weird margin issues. This fixes.
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; ++i) {
        divs[i].style.width = "";
    }
}

exports.hideAudioTags = function() {
    // The audio tag can't be completely hidden in css for some reason - need to clear its
    // "controls" attribute for it to not display a "could not play audio" grey box.
    var audio = document.getElementsByTagName('AUDIO');
    for (var i = 0; i < audio.length; ++i) {
        var thisAudio = audio[i];
        thisAudio.controls = '';
        thisAudio.style.display = 'none';
    }
}
