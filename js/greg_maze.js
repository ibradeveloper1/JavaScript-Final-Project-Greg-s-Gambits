var cells;
		var blocked = "Y"; // flag to test blocks that generate alerts
		var swapped;
		function setup() {
			cells = new Array([document.getElementById("cell00"),
			document.getElementById("cell01"),
			document.getElementById("cell02"),
			document.getElementById("cell03")],
				[document.getElementById("cell10"),
				document.getElementById("cell11"),
				document.getElementById("cell12"),
				document.getElementById("cell13")],
				[document.getElementById("cell20"),
				document.getElementById("cell21"),
				document.getElementById("cell22"),
				document.getElementById("cell23")],
				[document.getElementById("cell30"),
				document.getElementById("cell31"),
				document.getElementById("cell32"),
				document.getElementById("cell33")]);
			placeNumbers(); //to fill array with damsel, hero, and blue jellybean

		}

		// SET ARRAY VALUES
		//i = 0;
		function placeNumbers() // really placing pictures
		{
			// row 1
			cells[0][0].innerHTML = "HERO";
			cells[0][1].innerHTML = "<img src = 'images/blue1.png'>";
			cells[0][2].innerHTML = "<img src = 'images/blue1.png'>";
			cells[0][3].innerHTML = "<img src = 'images/blue1.png'>";
			// row 2
			cells[1][0].innerHTML = "<img src = 'images/blue1.png'>";
			cells[1][1].innerHTML = "<img src = 'images/blue1.png'>";
			cells[1][2].innerHTML = "<img src = 'images/blue1.png'>";
			cells[1][3].innerHTML = "<img src = 'images/blue1.png'>";
			// row 3
			cells[2][0].innerHTML = "<img src = 'images/blue1.png'>";
			cells[2][1].innerHTML = "<img src = 'images/blue1.png'>";
			cells[2][2].innerHTML = "<img src = 'images/blue1.png'>";
			cells[2][3].innerHTML = "<img src = 'images/blue1.png'>";
			// row 4
			cells[3][0].innerHTML = "<img src = 'images/blue1.png'>";
			cells[3][1].innerHTML = "<img src = 'images/blue1.png'>";
			cells[3][2].innerHTML = "<img src = 'images/blue1.png'>";
			cells[3][3].innerHTML = "<img src = 'images/princess.jpg'>";



		}

		//establish pitfall locations between 1 and 5 (not including 5)
		// row 1
		//var pitFall1 = Math.floor((Math.random() * 0));
		var pitFall1_1 = Math.floor((Math.random() * 5) + 1); // for col

		//row 2
		//var pitFall2 = Math.floor((Math.random() * 1) + 1);
		var pitFall2_2 = Math.floor((Math.random() * 5) + 1); // for col exclude col zero

		//row 3
		//var pitFall3 = Math.floor((Math.random() * 2) + 2);
		var pitFall3_3 = Math.floor((Math.random() * 5) + 0); // for col

		//row 4
		//var pitFall4 = Math.floor((Math.random() * 4) + 3);
		var pitFall4_4 = Math.floor((Math.random() * 4) + 0); // for col exclude princess cell


		function doClick(row, col) {
			var top = row - 1;
			var bottom = row + 1;
			var left = col - 1;
			var right = col + 1;


			// test for pitfalls first
			if (cells[row][col] == cells[0][pitFall1_1]) { cells[row][col] = alert("Cannot go this way!"); }

			else if (cells[row][col] == cells[1][pitFall2_2]) { cells[row][col] = alert("Cannot go this way!"); }

			else if (cells[row][col] == cells[2][pitFall3_3]) { cells[row][col] = alert("Cannot go this way!"); }

			else if (cells[row][col] == cells[3][pitFall3_3]) { cells[row][col] = alert("Cannot go this way!"); }

			// test moves for swaps
			else if (top != -1 && cells[top][col].innerHTML == "HERO") { swap(cells[row][col], cells[top][col]); }
			else if (right != 4 && cells[row][right].innerHTML == "HERO") { swap(cells[row][col], cells[row][right]); }
			else if (left != -1 && cells[row][left].innerHTML == "HERO") { swap(cells[row][col], cells[row][left]); }
			else if (bottom != 4 && cells[bottom][col].innerHTML == "HERO") { swap(cells[row][col], cells[bottom][col]); }

			else { alert("Illegal move."); }

			checkWinner();

		}



		// create function to swap values
		function swap(firstCell, secondCell) {
			swapped = true;

			firstCell.innerHTML = secondCell.innerHTML;
			secondCell.innerHTML = "<img src = 'images/blue1.jpg'>";
		}

		function checkWinner() {

			if (cells[3][3].innerHTML == "HERO") {
				alert("Congratulations! You won!");
				if (window.prompt("Play again?", "yes"))
					setup();
			}

		}