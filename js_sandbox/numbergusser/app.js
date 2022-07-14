let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3

const game = document.querySelector('#game')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessBtn = document.querySelector('#guess-btn')
const guessInput = document.querySelector('#guess-input')
const message = document.querySelector('.message')

//assign Ui min and max numbers

minNum.textContent = min
maxNum.textContent = max

game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload()
  }
})

guessBtn.addEventListener('click', function (e) {
  let guessNumber = parseInt(guessInput.value)
  if (isNaN(guessNumber) || guessNumber < min || guessNumber > max) {
    showMsg(`Enter a correct number between ${min} and ${max}`, 'red')
    setTimeout(clearGame, 2000)
  }

  if (guessNumber == winningNum) {
    guessInput.disabled = true
    guessInput.style.borderColor = 'green'
    gameOver(true, 'You Win !', 'green')
    setTimeout(clearGame, 2000)
  } else {
    guessesLeft -= 1

    if (guessesLeft == 0) {
      gameOver(true, `The Game is Over, Win Number Was ${winningNum}`)
    } else {
      showMsg(`${guessNumber} has been left`, 'red')
    }
  }

  e.preventDefault
})

function gameOver(win, msg) {
  let color
  win === true ? (color = 'green') : (color = 'red')

  guessInput.disabled = !win
  guessInput.style.borderColor = color
  guessBtn.value = 'Play Again'
  guessBtn.className += 'play-again'

  showMsg(msg, color)
  setTimeout(clearGame, 2000)
}

function getRandomNum(min, max) {
  let r = Math.floor(Math.random() * (max - min + 1) + min)
  console.log(r)
  return r
}

function showMsg(msg, color) {
  message.textContent = msg
  message.style.color = color
}

function clearGame() {
  message.textContent = ''
  guessInput.value = ''
  guessInput.disabled = false
  guessInput.style.borderColor = 'gray'
}
