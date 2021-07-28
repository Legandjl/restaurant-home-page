import { domManipulator } from "./dom";
import background from "./food.jpg";


let updateGallery = function() {

    domManipulator.setBackground("content", background);    
}

export {updateGallery};