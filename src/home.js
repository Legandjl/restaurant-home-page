import background from "./burger.jpg"
import {
    domManipulator
} from "./dom"

let updateHome = function () {

    let setHomeBackground = function () {

        domManipulator.getBody().style.backgroundImage = `url(${background})`;
    }

    let setHomeContent = function () {          

        let main = domManipulator.createDiv("main");
        main.appendChild(domManipulator.createDiv("mainContent"));
        domManipulator.getContent().append(main);

        console.log("oim at home!")
     

        setTimeout(function(){main.classList.add("opacity");}, 0);  

        setTimeout(function(){main.addEventListener("transitionend", () => {
            main.innerText = "Life's too short for boring food" + "\n" +
            "Come and see what you have been missing..."
            main.classList.remove("opacity");
          })}, 0);      

        setHomeBackground();
    }

    return {
        setHomeBackground,
        setHomeContent
    };

}()

export {
    updateHome
};

