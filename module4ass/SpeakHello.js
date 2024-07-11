(function(){
    var speakWord = "hello";
    let hellospeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    };
    
    window.hellospeaker = hellospeaker;
})(window);