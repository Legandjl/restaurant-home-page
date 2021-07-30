import {
    domManipulator
} from "../dom";
import firstImage from "../images/gallery1.jpg"
import secondImage from "../images/gallery2.jpg"
import thirdImage from "../images/gallery3.jpg"
import fourthImage from "../images/gallery4.jpg"
import fifthImage from "../images/gallery5.jpg"

let updateGallery = function () {

    let galleryWrapper = domManipulator.createDiv("galleryWrapper");

    console.log(galleryWrapper)

    domManipulator.getContent().appendChild(galleryWrapper);

    let images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage];

    for (let x = 0; x < images.length; x++) {

        let currentImage = new Image();
        currentImage.src = images[x];
        document.querySelector("#galleryWrapper").appendChild(domManipulator.createDiv(`image${x}`));
        document.querySelector(`#image${x}`).classList.add("galleryDiv");
        document.querySelector(`#image${x}`).appendChild(currentImage)

    }

    let footer = domManipulator.getFooter();
    console.log(footer);
    document.querySelector("#galleryWrapper").appendChild(footer);
}

export {
    updateGallery
};