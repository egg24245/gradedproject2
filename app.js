const imgcontainer = document.getElementById("imgcontainer");
const displaycontainer = document.getElementById("displaycontainer");
const leftnav = document.getElementById("leftnav");
const rightnav = document.getElementById("rightnav");

let currentimageindex = 0;

const images = [
  {
    src: "https://wallpapershome.com/images/pages/pic_h/1055.jpg",
    alt: "a racoon staring into the camera",
  },
  {
    src: "https://images.pexels.com/photos/357159/pexels-photo-357159.jpeg?cs=srgb&dl=pexels-pixabay-357159.jpg&fm=jpg",
    alt: "an owl flying toward the camera",
  },
  {
    src: "https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg?cs=srgb&dl=pexels-steve-130217-397857.jpg&fm=jpg",
    alt: "a white wolf looking toward the camera",
  },
];

function createimgs() {
  images.forEach(function (image, index) {
    let imgelement = document.createElement("img");
    imgelement.src = image.src;
    imgelement.alt = image.alt;

    imgelement.addEventListener("click", function () {
      createbigimage(image);
      currentimageindex = index;
    });
    imgcontainer.appendChild(imgelement);
  });
}

leftnav.addEventListener("click", () => {
  currentimageindex = (currentimageindex - 1 + images.length) % images.length;
  createbigimage(images[currentimageindex]);
});

rightnav.addEventListener("click", () => {
  currentimageindex = (currentimageindex + 1) % images.length;
  createbigimage(images[currentimageindex]);
});

function createbigimage(image) {
  displaycontainer.innerHTML = "";
  const bigimage = document.createElement("img");
  bigimage.src = image.src;
  bigimage.alt = image.alt;
  displaycontainer.appendChild(bigimage);
}

createimgs();
createbigimage(images[currentimageindex]);
