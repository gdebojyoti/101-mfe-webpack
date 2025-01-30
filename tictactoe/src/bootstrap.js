// this file is consumed either by the index.js of tictactoe, or by container app

import * as dayjs from 'dayjs'

const render = (elm) => {
  console.log("Tic Tac Toe: I got in")

  const date = dayjs().format('dddd DD MMMM YYYY')

  elm.innerHTML = `
    <h1>Tic Tac Toe</h1>
    <p>I got in</p>
    <div>Date: ${date}</div>
  `
}

// check for dev env
if (process.env.NODE_ENV === 'development') {
  const rootElm = document.getElementById("app-ttt")
  if (rootElm) {
    render(rootElm)
  }
}

export default render