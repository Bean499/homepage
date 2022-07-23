//This should be a list of the files in ./img
let images = [
];

//Uncomment to pick random image from the list
num = images.length;
image = images[Math.floor(Math.random() * num)];

//Uncomment to pick specific image
// image = images[0];

let imageHTML = document.getElementById("image");
imageHTML.innerHTML = "<img src='./art/" + image + "'/>";
