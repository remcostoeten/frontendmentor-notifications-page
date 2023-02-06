const count = document.getElementById('count');
const alert = document.getElementsByClassName('chat__amount');
const read = document.getElementById('read');
const wrapper = document.getElementsByClassName('wrapper');
const chatAmount = document.getElementsByClassName('chat__amount');
const chatWrapper = document.getElementsByClassName('chat');

for (let i = 0; i < chatAmount.length; i++) {
	if (!(chatAmount[i].textContent === '0')) {
		chatWrapper[i].classList.add('unread');
	}

	read.addEventListener('click', () => {
		alert[i].innerHTML = '0';
		chatWrapper[i].classList.remove('unread');
	});
}
