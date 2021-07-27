import { domManipulator } from "./dom";
import background from "./food.jpg";


let updateGallery = function() {

    domManipulator.getBody().style.backgroundImage = `url(${background})`;

    
}

export {updateGallery};