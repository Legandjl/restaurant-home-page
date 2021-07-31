import background from "../images/burger.jpg"
import {
    domManipulator
} from "../dom"
import homeLogo from "../images/homeLogo.png"
let updateHome = function () {


    let setHomeContent = function () {

        let main = domManipulator.createDiv("main");
        
        domManipulator.getContent().append(main);
        setTimeout(function () {
            main.appendChild(domManipulator.createImage(homeLogo));

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