const notificationAlert = document.getElementsByClassName('chat__amount');
const chatAmount = document.getElementsByClassName('chat__amount');
const chatWrapper = document.getElementsByClassName('chat');
const alertStar = document.querySelectorAll('.alert');
const headerCount = document.getElementById('count');
const unreadClass = document.getElementsByClassName('unread');

const totalCount = unreadClass.length - 1;
console.log(unreadClass.length - 1);
const x = unreadClass.length - 1;

const totalUnread = document.getElementByClassName('unread').length - 1;
console.log(totalUnread + 'a');

count.innerHTML = totalUnread;

for (let i = 0; i < chatAmount.length; i++) {
	if (!(chatAmount[i].textContent === '0')) {
		chatWrapper[i].classList.add('unread');
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

console.log(unreadClass.length);
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
