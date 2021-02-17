function init() {
    var canvas = document.getElementById('mycanvas');
    canvas.width = canvas.height = 1000
    var pen = canvas.getContext('2d')
    cs = 50
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
            for (var i = 0; i < this.cells.length; i++) {
                pen.fillRect(this.cells[i].x, this.cells[i].y, cs, cs)
            }
        }
    }
    snake.createSnake()
    snake.drawSnake()
}

function draw() {
    snake.drawSnake();
}
init()