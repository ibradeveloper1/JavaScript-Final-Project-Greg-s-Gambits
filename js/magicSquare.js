function magicSquare()
    {
       cells = new Array([document.getElementById("cell00"),document.getElementById("cell01"), document.getElementById("cell02"), document.getElementById("cell03")], 
       [document.getElementById("cell10"), document.getElementById("cell11"),document.getElementById("cell12"), document.getElementById("cell13")], 
       [document.getElementById("cell20"), document.getElementById("cell21"),document.getElementById("cell22"), document.getElementById("cell23")], 
       [document.getElementById("cell30"), document.getElementById("cell31"), document.getElementById("cell32"), document.getElementById("cell33")]); 
       for (var rows = 0; rows < 4; rows++)
    {
    for (var cols = 0; cols< 4; cols++)
    {
    var num = parseInt(prompt("Enter a number for row " + (rows + 1) + ", column " + (cols + 1) + ":"));
    cells[rows][cols].innerHTML = num;
    }
    }
    }
    function checkIt()
    {
    var magic = true;
    var sumD1 = parseInt(cells[0][0].innerHTML) + parseInt(cells[1][1].innerHTML) + parseInt(cells[2][2].innerHTML) + parseInt(cells[3][3].innerHTML);
    sumD2 = parseInt(cells[3][0].innerHTML) + parseInt(cells[2][1].innerHTML) + parseInt(cells[1][2].innerHTML) + parseInt(cells[0][3].innerHTML);
    if (sumD1 != sumD2)
    magic = false;
    for (var i = 0; i < 4; i++)
    {
    sumR = parseInt(cells[i][0].innerHTML) + parseInt(cells[i][1].innerHTML) + parseInt(cells[i][2].innerHTML) + parseInt(cells[i][3].innerHTML);
    if (sumR != sumD1)
    magic = false;
    }
    for (var j = 0; j < 4; j++)
    {
    sumC = parseInt(cells[0][j].innerHTML) + parseInt(cells[1][j].innerHTML) + parseInt(cells[2][j].innerHTML) + parseInt(cells[3][j].innerHTML);
    if (sumC != sumD1)
    magic = false;
    }
    if (magic == false)
    document.getElementById('result').innerHTML = ("Sorry, your square is not a magic square");
    if (magic == true)
    document.getElementById('result').innerHTML = ("Wow! This is a magic square");
    }