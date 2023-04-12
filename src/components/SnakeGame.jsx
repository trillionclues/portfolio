import React from 'react'

const SnakeGame = () => {
  return (
    <div>
      <div id='console'></div>

      {/* <img id="corner" src="/icons/console/bolt-up-left.svg" alt="" class="absolute top-2 left-2 opacity-70"> */}
      {/* <img id="corner"  src="/icons/console/bolt-up-right.svg" alt="" class="absolute top-2 right-2 opacity-70"> */}
      {/* <img id="corner"  src="/icons/console/bolt-down-left.svg" alt="" class="absolute bottom-2 left-2 opacity-70"> */}
      {/* <img id="corner"  src="/icons/console/bolt-down-right.svg" alt="" class="absolute bottom-2 right-2 opacity-70"> */}

      {/* <!-- Game Screen --> */}
      <div id='game-screen'></div>

      <button id='start-button' class='font-fira_retina'>
        start-game
      </button>

      {/* <!-- Game Over --> */}
      <div id='game-over' class='hidden'>
        <span class='font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center'>
          GAME OVER!
        </span>
        <button class='font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white'>
          start-again
        </button>
      </div>

      <div id='congrats' class='hidden'>
        <span class='font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center'>
          WELL DONE!
        </span>
        <button class='font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white'>
          play-again
        </button>
      </div>

      <div
        id='console-menu'
        class='h-full flex flex-col items-end justify-between'
      >
        <div>
          <div id='instructions' class='font-fira_retina text-sm text-white'>
            <p>// use your keyboard</p>
            <p>// arrows to play</p>

            <div
              id='buttons'
              class='w-full flex flex-col items-center gap-1 pt-5'
            >
              <button id='console-button' class='button-up'>
                {/* <img src="/icons/console/arrow-button.svg" alt=""> */}
              </button>

              <div class='grid grid-cols-3 gap-1'>
                <button id='console-button' class='button-left'>
                  {/* <img src="/icons/console/arrow-button.svg" alt="" class="-rotate-90"> */}
                </button>

                <button id='console-button' class='button-down'>
                  {/* <img src="/icons/console/arrow-button.svg" alt="" class="rotate-180"> */}
                </button>

                <button id='console-button' class='button-right'>
                  {/* <img src="/icons/console/arrow-button.svg" alt="" class="rotate-90"> */}
                </button>
              </div>
            </div>
          </div>

          {/* <!-- score board --> */}
          <div id='score-board' class='w-full flex flex-col pl-5'>
            <p class='font-fira_retina text-white pt-5'>// food left</p>

            <div
              id='score'
              class='grid grid-cols-5 gap-5 justify-items-center pt-5 w-fit'
            >
              <div class='food'></div>
              <div class='food'></div>
              <div class='food'></div>
              <div class='food'></div>
              <div class='food'></div>
              <div class='food'></div>
              <div class='food'></div>
              <div class='food'></div>
              <div class='food'></div>
              <div class='food'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SnakeGame
