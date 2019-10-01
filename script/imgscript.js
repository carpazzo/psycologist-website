var i = 0;
var images = [];
var time = 9000;

//image list

images[0] = "./images/familitime.jpg";
images[1] = "./images/depresaomulher.jpg";
images[2] = "./images/couple.jpg";
images[3] = "./images/friends.jpg";
images[4] = "./images/kafetime.jpg";

//function to change

function changeImg() {
  document.slide.src = images[i];
  //getelementbyID  now is using only the name of the img tag

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}
window.onload = changeImg;
