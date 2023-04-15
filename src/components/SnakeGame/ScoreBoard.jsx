import './utils/snake.css'
import './utils/utils.css'

const scoreBoard = (props) => {
  return (
    <div className='flex flex-col'>
      <div className='score'>{props.currentScore}</div>
      <div className='best-score'>
        <span className='subTitle'>{'best:'}&nbsp;</span>
        {props.bestScore}
      </div>
    </div>
  )
}

export default scoreBoard
