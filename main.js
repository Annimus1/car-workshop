const images = [
  "https://cdn.pixabay.com/photo/2018/06/28/22/14/car-3504910_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/05/10/38/auto-repair-1954636_1280.jpg", 
  "https://cdn.pixabay.com/photo/2014/06/04/16/36/man-362150_1280.jpg"
]

let currentIndex = 0

const container = document.querySelector(".container")

function changeImage(){
  currentIndex++
  if(currentIndex==images.length){
    currentIndex=0
  }

  container.style.backgroundImage = `url(${images[currentIndex]})`
}

setInterval(changeImage,3000)