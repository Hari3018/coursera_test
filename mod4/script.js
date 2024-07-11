(function(window){
    var speakWord = "hello";
    var hellospeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    };
    
    window.hellospeaker = hellospeaker;
})(window);

(function(window){
    var speakWord = "Good Bye";
    var byespeaker = {
        speak: function(names) {
            console.log(speakWord + " " + names);
        }
    };
    window.byespeaker = byespeaker;
})(window);



(function(){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) 
    {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter==='j') {
            byespeaker.speak(names[i]);
            } else {
            hellospeaker.speak(names[i]);
        }
    }
})();