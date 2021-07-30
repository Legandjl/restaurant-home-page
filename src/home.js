import background from "./images/burger.jpg"
import {
    domManipulator
} from "./dom"

let updateHome = function () { 

    let setHomeContent = function () {

        let main = domManipulator.createDiv("main");
        main.appendChild(domManipulator.createDiv("mainContent"));
        domManipulator.getContent().append(main);
        setTimeout(function () {
            main.classList.add("opacity");
        }, 0);

        setTimeout(function () {
            main.addEventListener("transitionend", () => {
                main.innerText = "Life's too short for boring food" + "\n" +
                    "Come and see what you have been missing..."
                main.classList.remove("opacity");
            })
        }, 0);

        domManipulator.setBackground("content", background);      
    }

    return {
       
        setHomeContent
    };

}()

export {
    updateHome
};