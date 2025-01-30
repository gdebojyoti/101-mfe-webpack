import * as dayjs from 'dayjs'

console.log("Tic Tac Toe: I got in")

const date = dayjs().format('dddd DD MMMM YYYY')

const root = document.getElementById("app-ttt")
if (root) {
  root.innerHTML = `
    <h1>Tic Tac Toe</h1>
    <p>I got in</p>
    <div>Date: ${date}</div>
  `
}