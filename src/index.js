//console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";


fetch(imgUrl)
.then(response => response.json())
.then(data => {
    //console.log(data.message)
    data.message.forEach(dogUrl => {
        const img = document.createElement('img')
        img.src = dogUrl
        const dogImageContainer =  document.getElementById("dog-image-container")
        dogImageContainer.appendChild(img)
    });
});


















// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector
// });