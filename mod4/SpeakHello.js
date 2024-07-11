(function(window){
    var speakWord = "hello";
    var hellospeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    };
    
    window.hellospeaker = hellospeaker;
})(window);