import background from "../images/chef.jpg"
import logo from "../images/logo(1).png"
import {
    domManipulator
} from "../dom"
import twitter from "../images/twitter.png"
import insta from "../images/insta.png"
import story from "../images/story.png"

let updateAbout = function () {

    domManipulator.setBackground("content", background);

    let currentMenuItems = aboutHelpers.getMenu();
    let storyContent = aboutHelpers.getIpsum();
    let hours = aboutHelpers.getHours();
    let contactInfo = aboutHelpers.getContacts();
    let mainLogo = aboutHelpers.createImage(logo);
    let twitterLogo = aboutHelpers.createImage(twitter);
    let instaLogo = aboutHelpers.createImage(insta);
    let storyLogo = aboutHelpers.createImage(story);

    let storyLogoWrap = domManipulator.createDiv("storyLogoWrap");
    storyLogoWrap.appendChild(storyLogo);

    document.querySelector("#content").appendChild(storyLogoWrap);

    let aboutPageWrapper = domManipulator.createDiv("aboutPageWrapper");
    document.body.appendChild(aboutPageWrapper);
    aboutPageWrapper.appendChild(domManipulator.createDiv("aboutPageStory"));

    let aboutPageStory = document.querySelector("#aboutPageStory");
    let aboutStoryHeader = document.createElement("h2");
    aboutStoryHeader.innerText = "Dignissim...";

    let aboutStoryText = document.createElement("p");
    aboutStoryText.innerText = storyContent;
    aboutPageStory.append(aboutStoryHeader);
    aboutPageStory.append(aboutStoryText);

    let aboutPageMenu = domManipulator.createDiv("aboutPageMenu");
    aboutPageWrapper.appendChild(aboutPageMenu);

    aboutPageMenu.appendChild(domManipulator.createDiv("mealItemTitle"));
    document.querySelector("#mealItemTitle").innerText = "Some favorites...";

    currentMenuItems.forEach((item) => {

        let currentMenuItem = domManipulator.createDivWithClass("mealItem");
        aboutPageMenu.appendChild(currentMenuItem);
        currentMenuItem.innerText = item;
    })

    //footer
    

    aboutPageWrapper.appendChild(domManipulator.createDiv("aboutFooter"));

    let footerContent = ["aboutContact", "aboutHours", "logoWrapper"];

    footerContent.forEach((id) => {

        domManipulator.appendViaQuery("#aboutFooter", domManipulator.createDiv(id))

    });

    domManipulator.appendViaQuery("#logoWrapper", mainLogo);
    domManipulator.appendViaQuery("#aboutContact", domManipulator.createDiv("contactWrap"));
    domManipulator.appendViaQuery("#aboutHours", domManipulator.createDiv("hourWrap"));
    domManipulator.appendViaQuery("#aboutFooter", domManipulator.createDiv("icons"));

    let socialWrap = domManipulator.createDivWithClass("socialWrap");
    document.querySelector("#logoWrapper").appendChild(socialWrap);

    let mediaIcons = [twitterLogo, instaLogo];

    mediaIcons.forEach((icon) => {

        domManipulator.appendViaQuery(".socialWrap", icon)
    });

    contactInfo.forEach((item) => {

        let currentContact = domManipulator.createDivWithClass("contactItem");
        currentContact.innerText = item;
        document.querySelector("#contactWrap").appendChild(currentContact);
    });


    hours.forEach((item) => {

        let currentItem = domManipulator.createDivWithClass("hourItem");
        currentItem.innerText = item;
        document.querySelector("#hourWrap").appendChild(currentItem);
    });
    
}

let aboutHelpers = function () {

    let contactInfo = ["Email: lerestaurant@gmail.com", "Telephone: 08234666", "Address: 1 Posh Street, Posh Town"]

    let hours = ["Mon - Thurs: 11 - 9", "Fri - Sat: 9 - 11", "Sun: 12 - 8"]

    let ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
     Quisque id diam vel quam elementum pulvinar etiam non quam. In pellentesque massa placerat duis ultricies lacus sed.
      Feugiat nisl pretium fusce id velit ut. Viverra suspendisse potenti nullam ac tortor vitae purus.
     Ante in nibh mauris cursus mattis molestie. Quam pellentesque nec nam aliquam. 
     Viverra vitae congue eu consequat ac. Enim nunc faucibus a pellentesque sit amet porttitor. 
     Vitae congue eu consequat ac felis donec et odio pellentesque.
     
    Ipsum nunc aliquet bibendum enim facilisis. Eu sem integer vitae justo eget magna fermentum iaculis eu.
     Tristique magna sit amet purus gravida quis blandit. Scelerisque varius morbi enim nunc faucibus. 
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Aliquam vestibulum morbi blandit cursus risus. Velit dignissim sodales ut eu sem integer vitae justo eget. 
      Vivamus arcu felis bibendum ut tristique et egestas. Praesent tristique magna sit amet purus gravida quis blandit. 
      Senectus et netus et malesuada fames ac turpis egestas sed. Enim ut sem viverra aliquet eget sit amet tellus cras.
      Commodo odio aenean sed adipiscing diam donec. Eu mi bibendum neque egestas. Scelerisque eu ultrices vitae auctor.
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

    let getIpsum = () => {

        return ipsum;
    }

    let getMenu = () => {

        return currentMenuItems;
    }

    let getContacts = () => {

        return contactInfo;
    }

    let getHours = () => {

        return hours;
    }

    let createImage = function (imgSrc) {

        let newImage = new Image();
        newImage.src = imgSrc;
        return newImage;
    }

    return {
        createImage,
        getIpsum,
        getMenu,
        getContacts,
        getHours
    }

}()


export {
    updateAbout
};