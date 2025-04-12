const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const ball = document.createElement('div');
document.body.appendChild(ball);

const LPadel = document.createElement('div');
document.body.appendChild(LPadel);

let LPadelWidth = 10;
let LPadelHeight = 100;
let LPadelSpeed = 5;
let LPadelXPosition = 70;
let ballRadius = 20;

let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2;
let ballXPosition = windowWidth / 2 - ballRadius;
let ballYPosition = windowHeight / 2 - ballRadius;
let ballSpeed = 5;
let ballXDirection = 1;
let ballYDirection = 1;
let score = 0;

// Create the scoreboard and make it visible
const scoreboard = document.createElement('div');
scoreboard.style.position = 'absolute';
scoreboard.style.top = '10px';   // Position from the top
scoreboard.style.left = '10px';  // Position from the left
scoreboard.style.fontSize = '24px';
scoreboard.style.color = 'red';  // Red text color
scoreboard.style.backgroundColor = 'black';  // Black background
scoreboard.style.zIndex = '9999'; // Ensure it's on top of other elements
scoreboard.textContent = `Score: ${score}`;
document.body.appendChild(scoreboard);

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;

    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection *= -1;
    }

    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection *= -1;
    }

    let ballTop = ballYPosition;
    let ballBottom = ballYPosition + 2 * ballRadius;
    let ballLeft = ballXPosition;
    let LPadelTop = LPadelYPosition;
    let LPadelBottom = LPadelYPosition + LPadelHeight;
    let LPadelRight = LPadelXPosition + LPadelWidth;

    // Check for paddle collision
    if (
        ballBottom >= LPadelTop &&
        ballTop <= LPadelBottom &&
        ballLeft <= LPadelRight &&
        ballXDirection === -1
    ) {
        ballXDirection *= -1;
        score++;
        scoreboard.textContent = `Score: ${score}`;  // Update the score here
    }
}

// Function to create the ball
function createBall() {
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";  // Make it round
    ball.style.backgroundColor = "green";  // Green color
    ball.style.position = "absolute";  // Position absolutely on screen
    ball.style.top = `${ballYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
}

// Function to create the left paddle
function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`;
    LPadel.style.width = `${LPadelWidth}px`;
    LPadel.style.backgroundColor = 'blue';  // Blue paddle
    LPadel.style.position = 'absolute';  // Absolute positioning
    LPadel.style.left = `${LPadelXPosition}px`;
    LPadel.style.top = `${LPadelYPosition}px`;
}

// Keyboard movement flags for the paddle
let wKey = false;
let sKey = false;

document.addEventListener('keydown', (event) => {
    if (event.key === 'w') wKey = true;
    if (event.key === 's') sKey = true;
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'w') wKey = false;
    if (event.key === 's') sKey = false;
});

// Function to move the paddle
function moveLPadel() {
    if (wKey && LPadelYPosition > 0) {
        LPadelYPosition -= LPadelSpeed;
    }
    if (sKey && LPadelYPosition < windowHeight - LPadelHeight) {
        LPadelYPosition += LPadelSpeed;
    }
    LPadel.style.top = `${LPadelYPosition}px`;
}

// Main animation loop
function animate() {
    moveBall();
    moveLPadel();
    requestAnimationFrame(animate);
}

// Initializing the ball and paddle
createBall();
createLPadel();
animate();
