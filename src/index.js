import "./style.css";
import {pageLoader} from "./loader"
import {updateHome} from "./home"
import {updateGallery} from "./gallery"
import {updateAbout} from "./about"
import {domManipulator} from "./dom"

const tabLogic = function() {

    let tabFunctions = {

        "home": updateHome.setHomeContent,
        "gallery": updateGallery,
        "about": updateAbout,
    }

  
    domManipulator.getTabs().addEventListener("click", tabChange);

    function tabChange(e) {

        //stops from triggering tab switch on the same tab over and over
        if(e.target.innerText != domManipulator.getCurrentTab()) {      
            
            domManipulator.removeAllNodes();

        try {

       // domManipulator.removeAllNodes();
        domManipulator.setCurrentTab(e.target.innerText);
        console.log(e.target.innerText);
        let func = tabFunctions[e.target.innerText.toLowerCase()];

        func();}

        catch {

            console.log(e);
            console.log("error");
            return;
        }

    }

    else {

        return;
    }
       
    }  

}()



