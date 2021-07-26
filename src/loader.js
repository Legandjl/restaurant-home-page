import { domManipulator } from "./dom"; 
import background from "./burger.jpg";
import "./style.css"

const pageLoader = function() {

    console.log("im here");

    let content = document.querySelector("#content"); 
    content.style.backgroundImage = `url(${background})`;
    let header = domManipulator.createDiv("header");
    content.append(header);    
    let tabs = domManipulator.createDiv("tabs");  
    header.append(tabs);

    let tabTitles = ["Home", "Gallery", "About"];

    for (let x = 0 ; x <3; x++) {

        let innerTab = document.createElement("div");
        innerTab.classList.add("innerTab");
        innerTab.innerText = tabTitles[x];      
        innerTab.id = tabTitles[x]; 
        tabs.append(innerTab);

    }

    let main = domManipulator.createDiv("main");  
    main.appendChild(domManipulator.createDiv("mainContent"));
    content.append(main);
    main.classList.add("mainHome"); //this is added for homepage
    let mainContent = document.querySelector("#mainContent");
    mainContent.innerText = "Life's too short for boring food" + "\n" + 
    "Come and see what you have been missing..."

}()




export {pageLoader};