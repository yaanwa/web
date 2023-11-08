const input = document.querySelector('input')
const ol = document.querySelector('ol')
let id = 0

function add() {
    ol.innerHTML += `
        <li id='${++id}'>
            ${input.value}
            <button onclick='del(${id})'>⁛</button>
        </li>
        `
    input.value=''
    console.log(input.value);
}

// function add() {
//     alert('是否新增此文字？');
//     if()
// }

function  del(id) {
    const li = document.querySelector(`li[id="${id}"]`);
    li.remove()
}
