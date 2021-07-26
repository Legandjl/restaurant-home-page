import background from "./food2.jpg"

let updateAbout = function() {

    let content = document.querySelector("#content"); 
    content.style.backgroundImage = `url(${background})`;


}

export {updateAbout};