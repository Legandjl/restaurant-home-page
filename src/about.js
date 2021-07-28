import background from "./chef.jpg"
import logo from "./logo(1).png"
import {
    domManipulator
} from "./dom"

let updateAbout = function () {

    let ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
     Quisque id diam vel quam elementum pulvinar etiam non quam. In pellentesque massa placerat duis ultricies lacus sed.
      Feugiat nisl pretium fusce id velit ut. Viverra suspendisse potenti nullam ac tortor vitae purus.
     Ante in nibh mauris cursus mattis molestie. Quam pellentesque nec nam aliquam. 
     Viverra vitae congue eu consequat ac. Enim nunc faucibus a pellentesque sit amet porttitor. 
     Vitae congue eu consequat ac felis donec et odio pellentesque.
    Ipsum nunc aliquet bibendum enim facilisis. Eu sem integer vitae justo eget magna fermentum iaculis eu.
     Tristique magna sit amet purus gravida quis blandit. Scelerisque varius morbi enim nunc faucibus. 
     `

    let currentMenuItems = ["Cold Tomato Soup, Melon & Cucumber",
        "Borlotti Beans, Courgettes & Nasturtium ",
        "Raw Scallop, Sungold Tomato & Fennel Blossom",
        "Suckling Kid Sausage, Peas & Artichokes",
        "Smoked Eel, Beetroots & Elderberries",
        "Black Pudding, White Peach & Bobby Beans",
        "Duck Leg, Turnip & Pickled Morello Cherries",
        "Mangalitsa Collar, Hispi Cabbage & Lardo",
        "Dorset Blue Lobster, Samphire & Lobster Butter"
    ]

    let contactInfo = ["Email: lerestaurant@gmail.com", "Telephone: 08234666", "Address: 1 Posh Street, Posh Town"]
    let hours = ["Mon - Thurs: 11 - 9", "Fri - Sat: 9 - 11", "Sun: 12 - 8"]

    domManipulator.setBackground("content", background);
    let aboutContent = domManipulator.createDiv("aboutContent");
    document.body.appendChild(aboutContent);
    aboutContent.appendChild(domManipulator.createDiv("aboutTopBlock"));

    let topBlock = document.querySelector("#aboutTopBlock");
    let topHeader = document.createElement("h2");
    topHeader.innerText = "Our Story";
    let topPara = document.createElement("p");
    topPara.innerText = ipsum;
    topBlock.append(topHeader);
    topBlock.append(topPara);

    let aboutCenter = domManipulator.createDiv("aboutCenter");
    aboutContent.appendChild(aboutCenter);

    aboutCenter.appendChild(domManipulator.createDiv("mealItemTitle"));
    document.querySelector("#mealItemTitle").innerText = "Some favorites..."


    for (let x = 0; x < currentMenuItems.length; x++) {

        let currentMenuItem = domManipulator.createDivWithClass("mealItem");
        aboutCenter.appendChild(currentMenuItem);
        currentMenuItem.innerText = currentMenuItems[x];
    }


    aboutContent.appendChild(domManipulator.createDiv("aboutBottom"));
    document.querySelector("#aboutBottom").appendChild(domManipulator.createDiv("aboutContact"));
    document.querySelector("#aboutBottom").appendChild(domManipulator.createDiv("aboutHours"));

    let logo2 = new Image();
    logo2.src = logo;
    document.querySelector("#aboutBottom").appendChild(logo2);
    document.querySelector("#aboutContact").appendChild(domManipulator.createDiv("contactWrap"));
    document.querySelector("#aboutHours").appendChild(domManipulator.createDiv("hourWrap"));

    contactInfo.forEach((item => {

        let currentContact = domManipulator.createDivWithClass("contactItem");
        currentContact.innerText = item;
        document.querySelector("#contactWrap").appendChild(currentContact);
    }))


    hours.forEach((item => {

        let currentItem = domManipulator.createDivWithClass("hourItem");
        currentItem.innerText = item;
        document.querySelector("#hourWrap").appendChild(currentItem);
    }))







}


export {
    updateAbout
};