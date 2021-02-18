function init() {
    var canvas = document.getElementById('mycanvas');
    W = H = canvas.width = canvas.height = 1000
    pen = canvas.getContext('2d')
    cs = 67
    snake = {
        init_len: 5,
        color: "blue",
        cells: [],
        direction: "right",
        createSnake: function() {
            for (var i = this.init_len; i > 0; i--) {
                this.cells.push({ x: i, y: 0 })
            }
        },
        drawSnake: function() {
            pen.fillStyle = this.color
            for (var i = 0; i < this.cells.length; i++) {
                pen.fillRect(this.cells[i].x * cs, this.cells[i].y * cs, cs - 2, cs - 2)
            }
        },
        updateSnake: function() {
            this.cells.pop()
            var newHeadX = this.cells[0].x + 1
            var newHeadY = this.cells[0].y
            this.cells.unshift({ x: newHeadX, y: newHeadY })
        }
    }
    snake.createSnake()
}

function draw() {
    pen.clearRect(0, 0, W, H)
    snake.drawSnake()
}

function update() {
    snake.updateSnake()
}

function gameloop() {
    draw()
    update()
}

init()

var f = setInterval(gameloop, 100)