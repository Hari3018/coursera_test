(function(win){
    var speakWord = "Good Bye";
    var byespeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    }
    
    win.byespeaker = byespeaker;
})(window);

