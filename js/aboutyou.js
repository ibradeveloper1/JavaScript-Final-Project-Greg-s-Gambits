function getName(){
	var name = prompt("Please enter your name"," ");
	document.getElementById('myname').innerHTML = name;
}

function getUserName(){
	var userName = prompt("What do you want for your username?"," ");
	document.getElementById('myusername').innerHTML = userName;
}

function getAvatar(){
	window.open('avatars.html');
}

function pickAvatar(){
	var avatar = prompt("Enter the avatar you want", "Bunny");
	document.getElementById('myavatar').innerHTML = avatar;
}