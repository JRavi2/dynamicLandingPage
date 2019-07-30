// DOM Elements
const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	name = document.getElementById('name'),
	focus = document.getElementById('focus');

var showAmPm = true;

// Show Time
function showTime() {
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();

	// Set AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';

	// 12 Hour Format
	hour = hour % 12 || 12;

	// Output the Time
	time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${showAmPm ? amPm : ''}`;

	setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
	let today = new Date(),
		hour = today.getHours();
	if (hour < 12) {
		// Morning
		document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
		greeting.textContent = 'Good Morning';
	} else  if(hour < 18) {
		// Afternoon
		document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
		greeting.textContent = 'Good Afternoon';
	} else {
		//  Evening
		document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
		greeting.textContent = 'Good Evening';
		document.body.style.color = 'white';
	}
}

// Get Name
function getName() {
	let dataName = localStorage.getItem('name')
	if(dataName == null) {
		name.textContent = '[Enter Name]';
	} else {
		name.textContent = dataName;
	}
}

// Set Name
function setName(event) {
	if(event.type == 'keypress') {
		// make Sure ENTER was Pressed
		if(event.which == 13 || event.keyCode == 13) {
			localStorage.setItem('name', event.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem('name', event.target.innerText);
	}
}

// Get Focus
function getFocus() {
	let dataFocus = localStorage.getItem('focus')
	if(dataFocus == null) {
		focus.textContent = '[Enter Activity]';
	} else {
		focus.textContent = dataFocus;
	}
}

// Set Focus
function setFocus(event) {
	if(event.type == 'keypress') {
		// make Sure ENTER was Pressed
		if(event.which == 13 || event.keyCode == 13) {
			localStorage.setItem('focus', event.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem('focus', event.target.innerText);
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();