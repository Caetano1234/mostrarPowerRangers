var canvas = new fabric.Canvas("myCanvas")
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage, x, y)
{
	new fabric.Image.fromURL(getImage, function(img){
		blockImageObject = img
		blockImageObject.scaleToWidth(blockImageWidth)
		blockImageObject.scaleToHeight(blockImageHeight)
		blockImageObject.set({top: y, left: x})
		canvas.add(blockImageObject)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') 
	{
		newImage("pr.png", 100, 300)
	}
	if(keyPressed == '86')
	{
		newImage("gr.png", 300, 300)
	}
	
	if(keyPressed == '65')
	{
		newImage("yr.png", 500, 300)
	}
	if(keyPressed == '82')
	{
		newImage("rr1.png", 700, 300)
	}
	if(keyPressed == '73')
	{
		newImage("br.png", 800, 300)
	}
	
}

