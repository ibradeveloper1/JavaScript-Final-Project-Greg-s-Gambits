function boggle() {
    var timer = 0; var play = "";
    var score = 0; var flag = 0;
    var num = Math.floor(Math.random() * 5) + 1;
    compWords = new Array; notAword = new Array;
    playWords = new Array();
    //compWords = words(num);
    yourWord = compWords[0];

    document.getElementById("letters").innerHTML = yourWord;
    //get player entries
    while (play != "Q") {
        play = prompt("enter a word or enter Q when done");
        playWords.push(play);
        if (play != "Q")
            document.getElementById("entries").innerHTML = playWords.toString();
    }
    //check winning score and list bad words
    var complgth = compWords.length;
    var playlgth = (playWords.length - 1);
    for (var i = 0; i < playlgth; i++) {
        flag = 0;
        for (var k = 0; k < complgth; k++) {
            if (playWords[i] == compWords[k]) {
                score++;
                flag = 1;
            }
        }
        if (flag == 0)
            notAword.push(playWords[i]);
    }

    document.getElementById("result").innerHTML = ("Your score is " + score + ". The following entries are not valid words: <br />" + notAword.toString());
}
