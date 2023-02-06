const count = document.getElementById('count');
const alert = document.getElementsByClassName('chat__amount');
const read = document.getElementById('read');
const wrapper = document.getElementsByClassName('wrapper');
const amount = document.getElementsByClassName('chat__amount');
const outer = document.getElementsByClassName('chat__outer');
read.addEventListener('click', (event) => {
	const wrapper = document.getElementsByClassName('wrapper');

	for (let i = 0; i < alert.length; i++) {
		alert[i].innerHTML = '0';

		if (amount.textContent === '0') {
			console.log('✅ if 0');
			outer[i].classList.add('empty');
		} else {
			outer[i].classList.add('not-empty');
			console.log('else 0');
		}
	}
});
