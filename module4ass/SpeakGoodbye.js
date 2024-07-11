(function(){
    var speakWord = "Good Bye";
    let byespeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    };
    window.byespeaker = byespeaker;
})(window);

