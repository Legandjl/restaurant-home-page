import { domManipulator } from "./dom";
import background from "./food.jpg";


let updateGallery = function() {

    let content = document.querySelector("#content"); 
    content.style.backgroundImage = `url(${background})`;
    let main = domManipulator.getMain();
    console.log(main);
    main.firstChild.innerText = "";
   
    
}

export {updateGallery};