// var 全域變數

// let 變數
// const 常數

const input = document.querySelector('#inp')
const ul = document.querySelector('ul')
let id = 0

function add() {
    ul.innerHTML += `
            <li data-id='${++id}'>
                ${input.value}
                <button onclick='del(${id})'>X</button>
            </li>
            `
    console.log(input.value);
}

function del(id) {
    const li = document.querySelector(`li[data-id="${id}"]`)
    li.remove()
}
