var maxHeight = screen.height
var maxWidth = screen.width
var min = 0
setTimeout(function(){
	var h1 = document.createElement("h1")
	h1.style.cssText = ('position: absolute; top: 35%; left: 0%; right: 0%; text-align: center; z-index: 10000000; font-family: "Comic Sans MS"')
	h1.setAttribute('class', 'rainbow')
	var node = document.createTextNode("WHAT A FUCKING FAG");
	h1.appendChild(node)
	document.body.appendChild(h1)
}, 3000)
function timeout(){
	setTimeout(function(){
		var id = Math.floor(Math.random() * (24 - 1 + 1)) + 1;
		var randomWidth = Math.random() * (maxWidth / 1.5 - min) + min;
		var randomHeight = Math.random() * (maxHeight / 1.5 - min) + min;
		var img = document.createElement('img')
		img.src = "resized/" + id + ".jpg"
		img.style.cssText = ("position: absolute; top: " + randomHeight + "px; left: " + randomWidth + "px;")
		console.log(img)
		document.body.appendChild(img)
		timeout()
	}, 100)
}
timeout()