function setup()
{
    canvas = createCanvas(500,400)
    canvas.center()
    cam = createCapture(VIDEO)
    cam.hide()
}

function draw()
{
    image(cam, 0, 0, 500, 400)
}