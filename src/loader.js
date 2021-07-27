import { domManipulator } from "./dom"; 
import background from "./burger.jpg";
import "./style.css"
import { updateHome } from "./home";

const pageLoader = function() {  

    updateHome.setHomeBackground();
    let header = domManipulator.getHeader();
    domManipulator.getContent().append(header);    
    let tabs = domManipulator.getTabs(); 
    header.append(tabs);   

    let tabTitles = ["Home", "Gallery", "About"];

    for (let x = 0 ; x <3; x++) {

        let innerTab = document.createElement("div");
        innerTab.classList.add("innerTab");
        innerTab.innerText = tabTitles[x];      
        innerTab.id = tabTitles[x]; 
        tabs.append(innerTab);

    }    

    updateHome.setHomeContent();
    
    
    
}()




export {pageLoader};