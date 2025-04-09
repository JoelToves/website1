const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


const ball = document.createElement('div')
document.body.appendChild(ball)
const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 10
let LPadelHeight = 100
let LPadelSpeed = 5
let LPadelXPosition = 70
const ballRadius = 20
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
let ballXPosition = windowHeight / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let score = 0 //Display the score and increase the score by 1 everytime the ball hits the padel.
let level = 1 //Display the level and increase the level by one everytime the score increases by 10
//As levels increase increase the ball speed
//if ball gets past your padel, end the game.
//make the ball stop or dispear and then let the user know the game is over.
//Optional: sound effects, background music
setInterval(moveBall, 10)


function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }


    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPadelTop = LPadelYPosition
    let LPadelBottom = LPadelYPosition + LPadelHeight
    let LPadelRight = LPadelXPosition + LPadelWidth


    if(
        (ballBottom >= LPadelTop) &&
        (ballTop <=LPadelBottom) &&
        (ballLeft <= LPadelRight) &&
        (ballXDirection == -1)
    ){
        ballXDirection  = ballXDirection * -1
    }
}


createLPadel()
createBall()


function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballYPosition}px`
}






function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = 'blue'
    LPadel.style.position = 'absolute'
    LPadel.style.left = "50px"
    LPadel.style.top = `${windowHeight / 2 - LPadelHeight / 2}px`
}


wKey = false
sKey = false


document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
    LPadel.style.top = `${LPadelYPosition}px`
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})




function moveLPadel() {
    if (wKey == true && LPadelYPosition > 0) {
        LPadelYPosition = LPadelYPosition - LPadelSpeed
    }
    if (sKey == true && LPadelYPosition < windowHeight - LPadelHeight) {
        LPadelYPosition = LPadelYPosition + LPadelSpeed
    }
    LPadel.style.top = `${LPadelYPosition}px`
}




function animate() {
    moveBall()
    moveLPadel()
    requestAnimationFrame(animate)
}
animate()



