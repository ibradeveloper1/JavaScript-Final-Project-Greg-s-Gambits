function encodeIt() {
    document.getElementById("message").innerHTML = ("<h2>&nbsp;</h2>");
    var msg = prompt("Enter your message.", " ");
    var newmsg = " ";
    var upCaseCode = 155;
    var newCode = 0;
    var lowCaseCode = 219;
    var specialCode = 3;


    //the loop encodes each letter in the message string
    for (var j = 0; j < msg.length; j++) {
        //check for upppercase letters and encode them
        if ((msg.charCodeAt(j) >= 65) && (msg.charCodeAt(j) <= 90)) {
            newcode = ((upCaseCode + num) - msg.charCodeAt(j));
        }
        else
            //check for lowercase letters and encode them
            if ((msg.charCodeAt(j) >= 97) && (msg.charCodeAt(j) <= 122)) {
                newcode = (lowCaseCode - msg.charCodeAt(j));
            }
            else
                //check for numbers and special characters and encode them
                if (((msg.charCodeAt(j) > 90) && (msg.charCodeAt(j) < 97)) || (msg.charCodeAt(j) < 65)) {
                    newcode = (msg.charCodeAt(j) + specialCode);
                }
        //add each encoded character to the new message
        newmsg = newmsg + " " + String.fromCharCode(newcode);
    }

    //display the encoded message on the web page
    document.getElementById("secret").innerHTML = ("<h2>" + newmsg + "</h2>");

    //decide if original message should be shown
    var choice = prompt("Do you want the original message displayed? Yes or No?", " ");
    if ((choice.charAt(0) == 'y') || (choice.charAt(0) == 'Y')) {
        document.getElementById("message").innerHTML = ("<h2>" + msg + "</h2>");

    }

}