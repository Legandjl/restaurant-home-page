import twitter from "./images/twitter.png"
import insta from "./images/insta.png"
import logo from "./images/logo(1).png"

let domManipulator = function () {

    let currentTab = "home";
    let content = document.querySelector("#content");
    let header = document.createElement("div");
    header.id = "header";
    let tabs = document.createElement("div");
    tabs.id = "tabs";
    content.append(header);
    header.append(tabs);
    header.addEventListener("mouseenter", showHeader);



let setBackground = function (id, image) {

    document.querySelector(`#${id}`).style.backgroundImage = `url(${image})`;
}

let getTabs = function () {

    return tabs;
}

let setCurrentTab = function (tab) {

    currentTab = tab;
}

let getCurrentTab = function () {

    return currentTab;
}

let getContent = function () {

    return content;
}


let createDiv = function (id) {

    let newDiv = document.createElement("div");
    newDiv.id = id;
    return newDiv;
}

let createDivWithClass = function (className) {

    let newDiv = document.createElement("div");
    newDiv.classList.add(className);
    return newDiv;
}

let appendViaQuery = function (element1, element2) {

    document.querySelector(element1).append(element2);
}

let removeAllNodes = function () {

    let nodes = getContent().childNodes;
    getContent().style.backgroundImg = "white";

    console.log(nodes);

    nodes.forEach((node => {
        console.log(node.id);
        if (node.id != "header") {

            getContent().removeChild(node);
        }
    }))

    let nodes2 = document.body.childNodes;

    nodes2.forEach((node => {

        if (node.id == "aboutPageWrapper") {

            document.body.removeChild(node);
            console.log("here")
        }
    }))
}

let windowScroll = function () {

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos)

        if (document.querySelector("#storyLogoWrap") != null) {

            if (currentScrollPos > 0) {

                document.querySelector("#storyLogoWrap").classList.add("opacity");
            } else {

                document.querySelector("#storyLogoWrap").classList.remove("opacity");
            }

        }

        if (prevScrollpos > currentScrollPos) {
            document.querySelector("#header").classList.remove("opacity");

            console.log(document.querySelector("#header"))
        } else {
            document.querySelector("#header").classList.add("opacity");

        }
        prevScrollpos = currentScrollPos;
    }
}

let createImage = function (imgSrc) {

    let newImage = new Image();
    newImage.src = imgSrc;
    return newImage;
}

let getFooter = function () {

    let contactInfo = ["Email: lerestaurant@gmail.com", "Telephone: 08234666", "Address: 1 Posh Street, Posh Town"]

    let hours = ["Mon - Thurs: 11 - 9", "Fri - Sat: 9 - 11", "Sun: 12 - 8"]

    let mainLogo = createImage(logo);
    let twitterLogo = createImage(twitter);
    let instaLogo = createImage(insta);

    let footer = domManipulator.createDiv("footer");

    let footerContent = ["aboutContact", "aboutHours", "logoWrapper"];

    footerContent.forEach((id) => {

        footer.append(domManipulator.createDiv(id))
    });

    let footerChildren = footer.childNodes;

    let contactDiv = footerChildren[0];
    let hourDiv = footerChildren[1];
    let logoDiv = footerChildren[2];

    let contactInner = domManipulator.createDiv("contactWrap");
    contactDiv.appendChild(contactInner);

    let hourWrap = domManipulator.createDiv("hourWrap");
    hourDiv.appendChild(hourWrap);

    logoDiv.appendChild(mainLogo);
    footer.appendChild(domManipulator.createDiv("icons"));

    let socialWrap = domManipulator.createDivWithClass("socialWrap");
    logoDiv.appendChild(socialWrap);

    let mediaIcons = [twitterLogo, instaLogo];

    mediaIcons.forEach((icon) => {

        socialWrap.appendChild(icon);
    });

    contactInfo.forEach((item) => {

        let currentContact = domManipulator.createDivWithClass("contactItem");
        currentContact.innerText = item;
        contactInner.appendChild(currentContact);
    });

    hours.forEach((item) => {

        let currentItem = domManipulator.createDivWithClass("hourItem");
        currentItem.innerText = item;
        hourWrap.appendChild(currentItem);
    });

     

    return footer;

}

function showHeader() {

    if (header.classList.contains("opacity")) {

        header.classList.remove("opacity");

        header.addEventListener("mouseleave", function () {               

            if (!header.classList.contains("opacity") && window.pageYOffset > 0) {

                header.classList.add("opacity");
            }
        })
    }
}

windowScroll();

return {
    createDiv,
    setCurrentTab,
    getCurrentTab,
    getContent,
    getTabs,
    removeAllNodes,
    setBackground,
    createDivWithClass,
    appendViaQuery,
    getFooter,
    createImage
}

}()

export {

    domManipulator
}