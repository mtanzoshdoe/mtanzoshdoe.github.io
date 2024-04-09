let canvas, grid, robot
let robotImgRight, robotImgUp, robotImgLeft, robotImgDown
let forwardButton, rotateLButton, rotateRButton

function preload() {
    grid = loadImage("robotGrid.png");
    robotImgRight = loadImage("robotRt.png")
    robotImgUp = loadImage("robotUp.png")
}

function setup() {
    canvas = createCanvas(600, 350);
    canvas.parent('htmlCanvas');

    imageMode(CENTER)
    robot = new Robot(robotImgRight, robotImgUp)
    forwardButton = createButton('MOVE FORWARD');
    forwardButton.position(350, 50);
    forwardButton.mousePressed(moveForward);
    forwardButton.style('height:40px');
    forwardButton.style('width:140px');
    forwardButton.style('border-radius: 5px')

    rotateLButton = createButton('ROTATE LEFT');
    rotateLButton.position(350, 120);
    rotateLButton.mousePressed(rotateLeft);
    rotateLButton.style('height:40px');
    rotateLButton.style('width:140px');
    rotateLButton.style('border-radius: 5px')

    rotateLButton = createButton('ROTATE RIGHT');
    rotateLButton.position(350, 190);
    rotateLButton.mousePressed(rotateRight);
    rotateLButton.style('height:40px');
    rotateLButton.style('width:140px');
    rotateLButton.style('border-radius: 5px')


}

function draw() {
    // background(210);
    image(grid, 150, height / 2, 300, 350)
    robot.display()
}


class Robot {
    constructor(imgR, imgU) {
        this.imgR = imgR
        this.wRt = imgR.width
        this.imgU = imgU
        this.x = 40
        this.y = 305
        this.orientation = "right"
    }

    display() {
        imageMode(CENTER);
        angleMode(DEGREES);
        if (this.orientation == "right") {
            image(this.imgR, this.x, this.y, 60, 60)
        } else if (this.orientation == "up") {
            image(this.imgU, this.x + 2, this.y + 2, 60, 60)
        } else if (this.orientation == "left") {
            push()
            scale(-1, 1)
            image(this.imgR, -this.x - 5, this.y, 60, 60)
            pop()

        } else if (this.orientation == "down") {
            push()
            scale(1, -1)
            image(this.imgU, this.x + 2, -this.y, 60, 60)
            pop()
        }
    }
}

function rotateLeft() {
    if (robot.orientation == "right") {
        robot.orientation = "up"
    } else if (robot.orientation == "up") {
        robot.orientation = "left"
    } else if (robot.orientation == "left") {
        robot.orientation = "down"
    } else if (robot.orientation == "down") {
        robot.orientation = "right"
    }
}

function rotateRight() {
    if (robot.orientation == "right") {
        robot.orientation = "down"
    } else if (robot.orientation == "up") {
        robot.orientation = "right"
    } else if (robot.orientation == "left") {
        robot.orientation = "up"
    } else if (robot.orientation == "down") {
        robot.orientation = "left"
    }
}

function moveForward() {
    switch (robot.orientation) {
        case "right":
            if (robot.x < 232) {
                robot.x += 71
            }
            break;
        case "up":
            if (robot.y > 41) {
                robot.y -= 66
            }
            break;
        case "left":
            if (robot.x > 40) {
                robot.x -= 71
            }
            break;
        case "down":
            if (robot.y < 305) {
                robot.y += 66
            }
    }
}

function keyPressed() {
    if (keyCode === 82) {
        robot = new Robot(robotImgRight, robotImgUp)
    }
}
