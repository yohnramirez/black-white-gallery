// Gallery and Images
var numberImages = [1,2,3,4,5,6,7,8,9,10,11,12];
var imagesPaths = ['people', 'places', 'others'];
var gallery = document.querySelectorAll('.section-gallery');
var gridElement = document.querySelectorAll('.grid');

// Sections
var people = document.querySelector('.people');
var places = document.querySelector('.places');
var others = document.querySelector('.others');


// init Masonry JS when the window load
window.onload = () => {
    // loop for apply Masonry JS to all section with '.grid' class
    for(var i = 0; i < gridElement.length; i++){
        var msnry = new Masonry( gridElement[i], {
          itemSelector: '.grid-item',
          columnWidth: 200,
          gutter: 10,
          fitWidth: true
        });
    }
}

imagesPaths.forEach( e => {
    var imageDirectory = 'images/' + e + '/';

    // Loop for print all images and apply the lightbox effect
    for(var j = 0; j < numberImages.length; j++){
        var imagePath = imageDirectory + numberImages[j] + '.jpg';

        if(gallery[0].classList.contains('people') && e == 'people'){
            people.innerHTML += `
                <div class="imageGallery">
                    <a data-bs-toggle="modal" data-bs-target="#IDPE${numberImages[j]}"><img class="grid-item" width="400px" height="${ramdonHeight(350, 650)}px"
                    src="${imagePath}" alt="">
                    </a>
                </div>
        
                <div class="modal-image modal fade" id="IDPE${numberImages[j]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered"><img src="${imagePath}"></div>
                </div>
            `;
        }
        if(gallery[1].classList.contains('places') && e == 'places'){
            places.innerHTML += `
                <div class="imageGallery">
                    <a data-bs-toggle="modal" data-bs-target="#IDPL${numberImages[j]}"><img class="grid-item" width="400px" height="${ramdonHeight(350, 650)}px"
                    src="${imagePath}" alt="">
                    </a>
                </div>
        
                <div class="modal-image modal fade" id="IDPL${numberImages[j]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered"><img src="${imagePath}"></div>
                </div>
            `;
        }
        if(gallery[2].classList.contains('others') && e == 'others'){
            others.innerHTML += `
                <div class="imageGallery">
                    <a data-bs-toggle="modal" data-bs-target="#IDOT${numberImages[j]}"><img class="grid-item" width="400px" height="${ramdonHeight(350, 650)}px"
                    src="${imagePath}" alt="">
                    </a>
                </div>
        
                <div class="modal-image modal modal-sm fade" id="IDOT${numberImages[j]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered"><img src="${imagePath}"></div>
                </div>
            `;
        }
    }
});

// function for generate a random height to the images
function ramdonHeight(min, max){
    var height = Math.floor(Math.random() * (max - min)) + min;
    return height;
}

// Animation phrase
gsap.from('.phrase', {
    opacity: 0, 
    y: 100, 
    duration: 1
});
