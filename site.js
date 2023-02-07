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
