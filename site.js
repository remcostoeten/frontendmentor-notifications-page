const notificationAlert = document.getElementsByClassName('chat__amount');
const chatAmount = document.getElementsByClassName('chat__amount');
const chatWrapper = document.getElementsByClassName('chat');
const alertStar = document.querySelectorAll('.alert');

for (let i = 0; i < chatAmount.length; i++) {
	if (!(chatAmount[i].textContent === '0')) {
		chatWrapper[i].classList.add('unread');
		alertStar[i].style.display = 'inline-block';
	} else {
		chatWrapper[i].classList.add('read');
	}

	read.addEventListener('click', () => {
		notificationAlert[i].innerHTML = '0';
		chatWrapper[i].classList.remove('unread');

		if (chatAmount[i].textContent === '0') {
		}
	});
}

// intro
var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active');
		var content = this.nextElementSibling;
		if (content.style.display === 'block') {
			content.style.display = 'none';
		} else {
			content.style.display = 'block';
		}
	});
}
