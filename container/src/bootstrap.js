import render from 'ttt/output'

console.log("Container: I got in")

const rootElm = document.getElementById("app-ttt")
if (rootElm) {
  render(rootElm)
}