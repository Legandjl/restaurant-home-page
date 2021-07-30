import "./style.css";
import {pageLoader} from "./loader"
import {updateHome} from "./home"
import {updateGallery} from "./tabs/gallery"
import {updateAbout} from "./tabs/about"
import {domManipulator} from "./dom"

const tabLogic = function() {

    let tabFunctions = {

        "home": updateHome.setHomeContent,
        "gallery": updateGallery,
        "about": updateAbout,
    }

    let tabTitles = ["Home", "Gallery", "About"];

    for (let x = 0; x < 3; x++) {

        let innerTab = document.createElement("div");
        innerTab.classList.add("innerTab");
        innerTab.innerText = tabTitles[x];
        innerTab.id = tabTitles[x];
        domManipulator.getTabs().append(innerTab);
        innerTab.addEventListener("click", tabChange)
    }

    function tabChange(e) {

        //stops from triggering tab switch on the same tab over and over
        if(e.target.innerText != domManipulator.getCurrentTab()) {      
            
            domManipulator.removeAllNodes();

       

       // domManipulator.removeAllNodes();
        domManipulator.setCurrentTab(e.target.innerText);
        console.log(e.target.innerText);
        let func = tabFunctions[e.target.innerText.toLowerCase()];

        func();}


  

    else {

        return;
    }
       
    }  

}()



