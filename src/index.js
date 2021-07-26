import "./style.css";
import {pageLoader} from "./loader"
import {updateHome} from "./home"
import {updateGallery} from "./gallery"
import {updateAbout} from "./about"
import {domManipulator} from "./dom"

pageLoader;

const tabLogic = function() {

    let tabFunctions = {

        "home": updateHome,
        "gallery": updateGallery,
        "about": updateAbout,

    }

    let tabs = document.querySelector("#tabs");
    tabs.addEventListener("click", getContent);

    function getContent(e) {

        if(e.target.innerText != domManipulator.getCurrentTab()) {

        try {
        domManipulator.setCurrentTab(e.target.innerText);
        console.log(e.target.innerText);
        let func = tabFunctions[e.target.innerText.toLowerCase()];
        func();}

        catch {
            
            return;
        }

    }

    else {

        return;
    }
       
    }

}()

