import {pageLoader} from "./loader"
import background from "./burger.jpg"
import {domManipulator} from "./dom"

let updateHome = function() {

    let content = document.querySelector("#content"); 
    content.style.backgroundImage = `url(${background})`;
    let main = domManipulator.getMain();
    console.log(main);
    main.firstChild.innerText = "Life's too short for boring food" + "\n" + 
    "Come and see what you have been missing..."

}

export {updateHome};