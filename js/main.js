const table  = document.getElementById('table')
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const form  = document.getElementById('form')


form.addEventListener('submit', function(e) {
	e.preventDefault()
	const li = document.createElement('li')
	li.classList.add('list-group-item')
	li.classList.add('list-group-item-primary')
	li.textContent = input.value
	table.appendChild(li)
	input.value= ''
})



