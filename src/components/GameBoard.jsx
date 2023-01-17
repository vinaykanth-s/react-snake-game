import React, { useEffect, useState } from 'react'
import './GameBoard.css'
const GameBoard = () => {
  const [board, setBoard] = useState([])
  //   useState(
  //     new Array(30).fill(0).map((row) => new Array(20).fill(0))
  //   )
  const [snakeList, setSnakeList] = useState([
    [1, 1],
    [1, 2],
    [2, 2],
  ])

  //   console.log({ board })
  useEffect(() => {
    console.log('useEffect mounted')

    let temp = new Array(30).fill(0).map((row) => new Array(20).fill(0))

    snakeList.map((i) => {
      let x = i[0],
        y = i[1]
      temp[x][y] = 1
    })
    setBoard(temp)
    // return setBoard([])
  }, [])
  return (
    <div className="board__container">
      {console.log('return mounted')}
      {board.map((row, rIndex) => (
        <div key={rIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className="cell"
              style={{ background: cell ? 'blue' : 'lightgrey' }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default GameBoard
