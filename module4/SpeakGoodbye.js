(function(window){
    var speakWord = "Good Bye";
    var byespeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    };
    window.byespeaker = byespeaker;
})(window);

