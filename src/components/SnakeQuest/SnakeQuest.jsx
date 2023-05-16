import React, { useEffect, useState, useRef } from 'react';
import ArrowBtn from '/icons/console/arrow-button.svg';
import boltUpLeft from '/icons/console/bolt-up-left.svg';
import boltUpRight from '/icons/console/bolt-up-right.svg';
import boltDownRight from '/icons/console/bolt-down-right.svg';
import boltDownLeft from '/icons/console/bolt-down-left.svg';

const SnakeQuest = () => {
  const [snake, setSnake] = useState([]);
  const [direction, setDirection] = useState('right');
  const [food, setFood] = useState({});
  const [gameOver, setGameOver] = useState(false);
  // ref
  const gameScreenRef = useRef(null);
  // dynamically update snake cells
  const renderSnakeCells = () => {
    const cells = [];

    for (let i = 0; i < boardHeight; i++) {
      for (let j = 0; j < boardWidth; j++) {
        const isFoodCell = food.x === j && food.y === i;
        const isSnakeCell = snake.some(
          (segment) => segment.x === j && segment.y === i
        );
        const isHeadCell =
          isSnakeCell &&
          snake.indexOf(
            snake.find((segment) => segment.x === j && segment.y === i)
          ) === 0;

        const cellStyle = {
          width: '10px',
          height: '10px',
          display: 'flex',
          flexShrink: 0,
        };

        if (isFoodCell) {
          cellStyle.backgroundColor = '#43D9AD';
          cellStyle.borderRadius = '50%';
          cellStyle.boxShadow = '0 0 10px #43D9AD';
        }

        if (isSnakeCell) {
          cellStyle.backgroundColor = '#43D9AD';
          cellStyle.opacity =
            1 -
            snake.indexOf(
              snake.find((segment) => segment.x === j && segment.y === i)
            ) /
              snake.length;
          cellStyle.border = '1px solid #000';
        }

        if (isHeadCell) {
          const headRadius = '5px';

          if (direction === 'up') {
            cellStyle.borderTopLeftRadius = headRadius;
            cellStyle.borderTopRightRadius = headRadius;
          }

          if (direction === 'down') {
            cellStyle.borderBottomLeftRadius = headRadius;
            cellStyle.borderBottomRightRadius = headRadius;
          }

          if (direction === 'left') {
            cellStyle.borderTopLeftRadius = headRadius;
            cellStyle.borderBottomLeftRadius = headRadius;
          }

          if (direction === 'right') {
            cellStyle.borderTopRightRadius = headRadius;
            cellStyle.borderBottomRightRadius = headRadius;
          }
        }

        cells.push(
          <div key={`${i}-${j}`} className='cell' style={cellStyle} />
        );
      }
    }

    return cells;
  };

  const boardWidth = 20;
  const boardHeight = 20;

  // get starting position
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * boardWidth);
    const y = Math.floor(Math.random() * boardHeight);
    return { x, y };
  };

  // start game
  const startGame = () => {
    // setSnake([
    //   { x: Math.floor(boardWidth / 2), y: Math.floor(boardHeight / 2) },
    // ]);
    setSnake([{ x: 5, y: 5 }]);
    setFood(getRandomPosition());
    setDirection('right');
    setGameOver(false);
  };

  // move snake
  const moveSnake = () => {
    const head = { ...snake[0] };
    switch (direction) {
      case 'up':
        head.y--;
        break;
      case 'down':
        head.y++;
        break;
      case 'left':
        head.x--;
        break;
      case 'right':
        head.x++;
        break;
      default:
        break;
    }
    // snake.unshift(head);
    setSnake([head, ...snake.slice(0, -1)]);
  };

  // handle keypress
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp' && direction !== 'down') {
        setDirection('up');
      } else if (event.key === 'ArrowDown' && direction !== 'up') {
        setDirection('down');
      } else if (event.key === 'ArrowLeft' && direction !== 'right') {
        setDirection('left');
      } else if (event.key === 'ArrowRight' && direction !== 'left') {
        setDirection('right');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction]);

  // check snake collison
  const checkCollision = () => {
    const head = snake[0];
    if (
      head.x < 0 ||
      head.x >= boardWidth ||
      head.y < 0 ||
      head.y >= boardHeight ||
      snake.some(
        (segment, index) =>
          index !== 0 && segment.x === head.x && segment.y === head.y
      )
    ) {
      setGameOver(true);
    }
  };

  // check food collison
  const checkFoodCollision = () => {
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
      setFood(getRandomPosition());
      setSnake([...snake, { ...head }]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        moveSnake();
        checkCollision();
        checkFoodCollision();
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [snake, gameOver]);

  return (
    <div id='console'>
      {/* Bolts */}
      <img
        id='corner'
        src={boltUpLeft}
        className='absolute top-2 left-2 opacity-70'
      />
      <img
        id='corner'
        src={boltUpRight}
        className='absolute top-2 right-2 opacity-70'
      />
      <img
        id='corner'
        src={boltDownLeft}
        className='absolute bottom-2 left-2 opacity-70'
      />
      <img
        id='corner'
        src={boltDownRight}
        className='absolute bottom-2 right-2 opacity-70'
      />

      {/* Game screen */}
      <div id='game-screen' ref={gameScreenRef}>
        {/* Render snake && food*/}
        {renderSnakeCells()}
        {startGame &&
          snake.map((segment, index) => (
            <div
              key={index}
              className='snake-segment'
              style={{ top: segment.y * 10, left: segment.x * 10 }}
            />
          ))}
        {/* Render food */}
        {startGame && food && (
          <div
            className='food'
            style={{ top: food.y * 10, left: food.x * 10 }}
          />
        )}
      </div>

      <button
        id='start-button'
        className='font-fira_retina cursor-pointer'
        onClick={startGame}
      >
        start-game
      </button>

      {/* game over */}
      {gameOver && (
        <div id='game-over' className='hidden'>
          <span className='font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center'>
            GAME OVER!
          </span>
          <button
            className='font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white'
            onClick={startGame}
          >
            start-again
          </button>
        </div>
      )}

      {/* congratulations */}

      <div
        id='console-menu'
        className='h-full flex flex-col items-end justify-between'
      >
        <div>
          <div
            id='instructions'
            className='font-fira_retina text-sm text-white'
          >
            <p>// use your keyboard</p>
            <p>// arrows to play</p>

            <div
              id='buttons'
              className='w-full flex flex-col items-center gap-1 pt-5'
            >
              <button
                id='console-button'
                className='button-up'
                onClick={() => setDirection('up')}
              >
                <img src={ArrowBtn} alt='arrow button' />
              </button>

              <div className='grid grid-cols-3 gap-1'>
                <button
                  id='console-button'
                  className='button-left'
                  onClick={() => setDirection('left')}
                >
                  <img
                    src={ArrowBtn}
                    alt='arrow button'
                    className='-rotate-90'
                  />
                </button>

                <button
                  id='console-button'
                  className='button-down'
                  onClick={() => setDirection('down')}
                >
                  <img
                    src={ArrowBtn}
                    alt='arrow button'
                    className='rotate-180'
                  />
                </button>

                <button
                  id='console-button'
                  className='button-right'
                  onClick={() => setDirection('right')}
                >
                  <img
                    src={ArrowBtn}
                    alt='arrow button'
                    className='rotate-90'
                  />
                </button>
              </div>
            </div>
          </div>

          {/* score board */}
          <div id='score-board' className='w-full flex flex-col pl-5'>
            <p className='font-fira_retina text-white pt-5'>// food left</p>
            <div
              id='score'
              className='grid grid-cols-5 gap-5 justify-items-center pt-5 w-fit'
            >
              <div className='food' />
              <div className='food' />
              <div className='food' />
              <div className='food' />
              <div className='food' />
              <div className='food' />
              <div className='food' />
              <div className='food' />
              <div className='food' />
              <div className='food' />
            </div>
          </div>
        </div>
      </div>

      {/* skip */}
      <a
        id='skip-btn'
        href='/about-me'
        className='
          font-fira_retina text-sm text-white
          absolute bottom-7 right-7
          hover:text-greenfy
          hover:bg-slate-800
        '
      >
        skip
      </a>
    </div>
  );
};

export default SnakeQuest;
