function startGame() {

    // initialize variables and prompt for information
    var gender = "boy";
    var city = " ";
    var monster = " ";
    var food = " ";
    var drink = " ";
    var age = " ";
    var name = " ";
    var action = " ";
    var heShe = " ";
    var look = " ";

    //check for gender with charAt()
    numYears = prompt("Enter a number greater than 0: ");
    gender = prompt("Is the story about a boy or a girl? ");
    letter = gender.charAt(0);
    gender = (letter == "b" || letter == "B") ? "boy" : "girl";
    pronoun = (gender == "boy") ? "he" : "she";
    name = prompt("Enter a type of monster: ");
    city = prompt("Enter the name of the city ");
    monster = prompt("Enter a type of monster");
    food = prompt("Enter a food you like");
    drink = prompt("Enter a drink you like");
    /*Additional variables*/
    age = prompt(" What's your age? ");
    name = prompt(" What's your name ");
    action = prompt(" Please enter the action ");
    heShe = prompt(" Please let the story know your gender");
    look = prompt(" Please let the story know your gender");

    document.getElementById("content").innerHTML = ("The story is that His/Her age is " + age + " and the Name of the person is " + name + " and the action He/She was doing was " + action + " and that is " + heShe + " and their gender was and they looked like " + look + " Once upon a time, about " + numYears + " years ago, there was a " + gender + " named " + name + ". " + name + " lived in a small cabin in the woods just outside " + city + " limits.</p> <p>" + name + " enjoyed walking in the woods every day until... One day " + pronoun + " came upon a " + monster + " sitting on a log eating a " + food + ".</p> <p>The " + monster + " jumped up, spilling his " + drink + ". " + name + " ran home as fast as " + pronoun + " could but the " + monster + " followed and ...</p><h3>What happened? You decide! </h3> <p>Ending 1: The " + monster + " and " + name + " became best friends and lived in " + name + "'s house happily ever after.</p> <p>Ending 2: The " + monster + " overpowered " + name + " and gobbled down all the " + food + " and " + drink + " in " + name + "'s refrigerator.</p> <p>Ending 3: " + name + " screamed mean things at the " + monster + ", causing the " + monster + " to turn and run back to the woods, never to be seen again.</p>");
}