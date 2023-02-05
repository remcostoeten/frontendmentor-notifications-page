const count = document.getElementById('count');
const wrapper = document.getElementsByClassName('wrapper');
const chatAlert = document.querySelectorAll('.chat__amount');
const read = document.getElementById('read');
console.log(count, read, wrapper);

read.addEventListener('click', (event) => {
	chatAlert[1].innerHTML = '0';

	console.log(chatAlert.innerHTML);

	const wrapper = document.getElementsByClassName('wrapper');
	wrapper[0].classList.remove('unread');
});

function aaa() {
	const chatAmount = document.getElementsByClassName('chat__amount')[0];
	const outerChat = document.getElementsByClassName('chat__outer')[0];
	if (chatAmount.textContent === '0') {
		console.log('✅ if 0');
		outerChat.classList.add('aaa');
	} else {
		console.log('else 0');
	}

	[].forEach.call(outerChat, function (div) {
		// do whatever
		div.style.color = 'red';
	});
}
aaa();
