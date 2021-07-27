import background from "./chef.jpg"
import {domManipulator} from "./dom"

let updateAbout = function() {

    console.log("here")


    domManipulator.getBody().style.backgroundImage = `url(${background})`;


}

export {updateAbout};