import React from 'react'
import SnakeCell from './SnakeCell'
import './utils/snake.css'
import './utils/utils.css'

const SnakeBoard = (props) => {
  let board = []
  let boardWidth = props.boardWidth
  let boardHeight = props.boardHeight

  let snake = props.snake
  let foodCoordinate = props.foodCoordinate

  for (let i = 0; i < boardHeight; i++) {
    let row = []

    for (let j = 0; j < boardWidth; j++) {
      if (snake.isHead([i, j])) row.push(<SnakeCell cellType='head' />)
      else if (snake.isOn([i, j])) row.push(<SnakeCell cellType='body' />)
      else if (foodCoordinate[0] === i && foodCoordinate[1] === j)
        row.push(<SnakeCell foodClass={props.foodClass} cellType='food' />)
      else row.push(<SnakeCell cellType='none' />)
    }

    board.push(row)
  }
  return (
    <div className='flex'>
      <div className='game-board'>{board}</div>
    </div>
  )
}

export default SnakeBoard
