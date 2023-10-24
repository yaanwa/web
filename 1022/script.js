const input = document.querySelector('input')
const ul = document.querySelector('ol')
let id = 0

function add() {
    ul.innerHTML += `
        <ol id='${++id}'>
            ${input.value}
            <button onclick='del(${id})'>⁛</button>
        </ol>
        `
    input.value=''
    console.log(input.value);
}

function  del(id) {
    const ol = document.querySelector(`li[id="${id}"]`);
    ol.remove()
}
