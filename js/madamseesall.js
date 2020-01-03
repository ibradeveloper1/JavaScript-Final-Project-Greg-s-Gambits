function startFortune() {

			var num = 0;
			var question = " ";
			var fortune1 = "Absolutely";
			var fortune2 = "No way ";
			var fortune3 = "Probably...";
			var fortune4 = "Doubtfuly...";
			var fortune5 = "Could be... ";
			var fortune6 = "Madame Vadoma cannot answer such a question. ";
			var fortune7 = "You must find answer within yourself. ";
			var fortune8 = "Yes, of course! ";
			var fortune9 = "You don't really believe this works, do you? ";
			var fortune10 = "Madame Vadoma wonders about that too.";


			num = (Math.floor(Math.random() * 15)) + 1;
			question = prompt("What is your question? ", " ");
			switch (num) {
				case 1:
					document.getElementById("content").innterHTML = fortune1;
					break;
				case 2:
					document.getElementyById("content").innerHTML = fortune2;
					break;
				case 3:
					document.getElementById("content").innerHTML = fortune3;
					break;
				case 4:
					document.getElementById("content").innerHTML = fortune4;
					break;
				case 5:
					document.getElementById("content").innerHTML = fortune5;
					break;
				case 6:
					document.getElementById("content").innerHTML = fortune6;
					break;
				case 7:
					document.getElementById("content").innerHTML = fortune7;
					break;
				case 8:
					document.getElementById("content").innerHTML = fortune8;
					break;
				case 9:
					document.getElementById("content").innerHTML = fortune9;
					break;
				case 10:
					document.getElementById("content").innerHTML = fortune10;
					break;


			}
		}