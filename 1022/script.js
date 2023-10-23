const input = document.querySelector('input')
const ul = document.querySelector('ol')
let id = 0

function add() {
    ul.innerHTML += `
        <li id='${++id}'>
            ${id}. ${input.value}
            <button onclick='del(${id})'>⁛</button>
        </li>
        `
    input.value=''
    console.log(input.value);
}

function  del(id) {
    const li = document.querySelector(`li[id="${id}"]`);
    li.remove()
}