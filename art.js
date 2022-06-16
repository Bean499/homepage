//This should be a list of the files in ./img
let images = [
	"cat.gif",
	"faust.png",
	"faust-office.png",
	"taric.png",
	"sin.png",
	"faust-scalpel.png",
	"faust-blue.png",
	"plague.png",
];

num = images.length;
image = images[Math.floor(Math.random() * num)];
// image = "plague.png"

let imageHTML = document.getElementById("image");
imageHTML.innerHTML = "<img src='./art/" + image + "'/>";
