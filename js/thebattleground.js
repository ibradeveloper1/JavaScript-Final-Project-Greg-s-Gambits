function battleIt()
{
		//initialize variables
			var heroPlay = 0; var trollPlay = 0;
      var heroPts = 100; var trollPts = 100;
      var rocks = "magic rocks";
      var sword = "the sword";
      var arrow = "bow and arrow";
      var heroChoice = " "; var trollChoice = " "; 
      document.getElementById("trollPts").innerHTML = (trollPts); 
      document.getElementById("heroPts").innerHTML = (heroPts);   
      document.getElementById("playerWeapon").innerHTML = ("Your weapon: ");    
      document.getElementById("trollWeapon").innerHTML = ("The troll's weapon: ");         
      document.getElementById("winner").innerHTML = ("&nbsp; ");
		//loop repeats until troll or player get 130 points
 		while ((trollPts < 130) && (heroPts < 130)) 
		{      
      // get player's weapon
      heroPlay = parseInt(prompt("What weapon do you choose? Enter 1 for magic rocks (enter 1), 2 for the sword, or 3 for the bow and arrow: (Enter 4 to leave the game at any time)" , " "));
      if (heroPlay == 4) break;
      // get troll's weapon
      trollPlay = Math.floor(Math.random() * 3 + 1);      
			// assign weapon to player and troll
      if (heroPlay == 1)
        heroChoice = rocks;
      if (heroPlay == 2)
        heroChoice = sword;
      if (heroPlay == 3)
        heroChoice = arrow;
      if (trollPlay == 1)
        trollChoice = rocks;
      if (trollPlay == 2)
        trollChoice = sword;
      if (trollPlay == 3)
        trollChoice = arrow;			
			//display weapon selections   
      document.getElementById("playerWeapon").innerHTML = ("Your weapon: " + heroChoice);    
      document.getElementById("trollWeapon").innerHTML = ("The troll's weapon: " + trollChoice);
      alert("This round of the battle begins now!");
        
			//find the winner
      if (((trollPlay == 3) && (heroPlay == 1)) || ((trollPlay == 2) && (heroPlay == 1)) || ((trollPlay == 3) && (heroPlay == 2)))
      {
        document.getElementById("winner").innerHTML = ("<img src='images/troll.jpg'>");
        trollPts = trollPts + 10;
        heroPts = heroPts - 10;
        document.getElementById("trollPts").innerHTML = (trollPts);
        document.getElementById("heroPts").innerHTML = (heroPts);
      }
      else if (((heroPlay == 3) && (trollPlay == 1)) || ((heroPlay == 2) && (trollPlay == 1)) || ((heroPlay == 3) && (trollPlay == 2)))
      {
        document.getElementById("winner").innerHTML = ("<img src='images/wizard.jpg'>");
        trollPts = trollPts - 10;
        heroPts = heroPts + 10;
        document.getElementById("trollPts").innerHTML = (trollPts);
        document.getElementById("heroPts").innerHTML = (heroPts);
      }
      else if (((heroPlay == 1) && (trollPlay == 1)) || ((heroPlay == 2) && (trollPlay == 2)) || ((heroPlay == 3) && (trollPlay == 3)))
      {
        document.getElementById("winner").innerHTML = ("This round is a tie. New weapons must be chosen...");
      }      
		}
		//display the final winner
    if (heroPlay == 4)    
      document.getElementById("winner").innerHTML = ("It's true: when your run, you live to fight another day. See you again soon!");
		
    if (trollPts >= 130)    
      document.getElementById("winner").innerHTML = ("The battle has been fought valiently but the troll has beaten you. Go home and nurse your wounds.");      
    
    if (heroPts >= 130)    
      document.getElementById("winner").innerHTML = ("The battle has been fought valiently and you have prevailed! Congratulations!");      
    
}