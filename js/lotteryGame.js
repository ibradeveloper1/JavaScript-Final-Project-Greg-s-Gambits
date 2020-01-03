function bubbleItUp(lgth, arrayName) {
    var flag = 0; var temp = 0;
    while (flag == 0) {
        flag = 1;
        for (k = 0; k <= (lgth - 2); k++) {
            if (arrayName[k] > arrayName[k + 1]) {
                temp = arrayName[k];
                arrayName[k] = arrayName[k + 1];
                arrayName[k + 1] = temp;
                flag = 0;
            }
        }
    }
}
function swapIt(a, b) {
    var temp = a;
    a = b;
    b = temp;
}



function enterNums() {
    //declare and fill array with user's selections
    userNums = new Array();
    for (var i = 0; i < 6; i++)
        userNums[i] = parseInt(prompt("Lottery numbers are from 1 to 40. Enter lottery number " + (i + 1) + ": (no duplicates, please)"));
    //sort and display user's selections
    bubbleItUp(6, userNums);
    document.getElementById("your_nums").innerHTML = userNums.toString();
}
function getLottery() {
    //initialize the lottery array
    var lottery = new Array();
    for (var i = 0; i < 6; i++)
        lottery[i] = 0;
    var k = 0; var flag = true; random = 0;
    //loops check for no repeats
    while (k < 6) {
        flag = true;
        while (flag == true) {
            random = Math.floor(Math.random() * 41);
            flag = false;
            for (i = 0; i < 6; i++) {
                if (lottery[i] == random)
                    flag = true;
            }
        }
        lottery[k] = random; //if random number hasn't been used, it is assigned
        k = k + 1;
    }
    //sort and display the lottery numbers array
    bubbleItUp(6, lottery);
    document.getElementById("lottery_nums").innerHTML = lottery.toString();

    //check if user's selections match lottery numbers
    var i = 0; var k = 0; var count = 0;
    //testing - change x<5 to 4 or 3 to check for different amounts
    //for(var x = 0; x < 3; x++)
    // lottery[x] = userNums[x];
    //end test
    for (i = 0; i < 6; i++) {
        for (k = 0; k < 6; k++) {
            if (userNums[i] == lottery[k])
                count++;
        }
    }
    //identify and display winnings
    switch (count) {
        case 0:
        case 1:
        case 2:
            document.getElementById("your_win").innerHTML = ("nothing, sorry...");
            break;
        case 3:
            document.getElementById("your_win").innerHTML = ("You won $ 5.00!");
            break;
        case 4:
            document.getElementById("your_win").innerHTML = ("You won $ 50.00!");
            break;
        case 5:
            document.getElementById("your_win").innerHTML = ("You won $ 100.00!");
            break;
        case 6:
            document.getElementById("your_win").innerHTML = ("You won $ 100,000.00!");
            break;
    }
}