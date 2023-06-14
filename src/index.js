//console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
    fetchDogBreeds()
    filterBreeds()
});



//challenge 1
function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(dogUrl => {
            const img = document.createElement('img')
            img.src = dogUrl
            const dogImageContainer =  document.getElementById("dog-image-container")
            dogImageContainer.appendChild(img)
        });
    });
};

//challenge 2
function fetchDogBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"; 

    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breedKeys = Object.keys(data.message)
        breedKeys.forEach(breed => {
            const dogBreeds = document.getElementById("dog-breeds")
            const li = document.createElement('li')
            li.textContent = breed
            dogBreeds.appendChild(li)

            //challenge 3
            li.addEventListener('click', () =>{
                li.style.color = 'blue'
            });
        });
    });
};

//challenge 4
function filterBreeds() {
    let dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', () => {
        const dogBreedsContainer = document.getElementById("dog-breeds")
        const breeds = dogBreedsContainer.getElementsByTagName('li')
        const selectedValue = dropdown.value;
        for (let i = 0; i < breeds.length; i++){
            if (breeds[i].innerText.startsWith(selectedValue)) {
                breeds[i].style.display = ''
            } else {
                breeds[i].style.display = 'none'
            }
        }
    })
};
















