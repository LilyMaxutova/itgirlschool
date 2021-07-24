// let mainImg = document.querySelector('#castle1');
// function changeImg(str) {
//   mainImg.setAttribute('src', str);
// }

let i = 0;
let img = document.getElementById('castle1');
let images = new Array('https://cdn1.ozone.ru/s3/multimedia-c/6041426400.jpg', 'https://u-stena.ru/upload/iblock/8ce/8ce6320348129f4fbe5a033495b92818.jpg', 'https://hobby-puzzle.ru/images/product_images/popup_images/4601_0.jpg')

function next() {
  i++;
  img.src = images[i];
}

function prev() {
  --i;
  img.src = images[i];
}