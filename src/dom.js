let domManipulator = function () {

    let currentTab = "home";
    let content = document.querySelector("#content");
    let header = document.createElement("div");
    header.id = "header";
    let tabs = document.createElement("div");
    tabs.id = "tabs";
    content.append(header);
    header.append(tabs);




    let setBackground = function (id, image) {

        document.querySelector(`#${id}`).style.backgroundImage = `url(${image})`;

    }

    let getBody = function () {

        return document.body;
    }

    let getMain = function () {

        return main;
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

    let getHeader = function () {

        return header;
    }

    let createDiv = function (id) {

        let newDiv = document.createElement("div");
        console.log("generating div");
        newDiv.id = id;
        console.log(newDiv)
        return newDiv;
    }

    let createDivWithClass = function (className) {

        let newDiv = document.createElement("div");
        console.log("generating div");
        newDiv.classList.add(className);
        console.log(newDiv)
        return newDiv;
    }

    let appendViaQuery = function(element1, element2) {

        document.querySelector(element1).append(element2);
    }



    let removeAllNodes = function () {

        let nodes = getContent().childNodes;

        nodes.forEach((node => {
            console.log(node.id);
            if (node.id != "header") {

                getContent().removeChild(node);
            }
        }))

        let nodes2 = document.body.childNodes;


        nodes2.forEach((node => {

            if (node.id == "aboutContent") {

                document.body.removeChild(node);
                console.log("here")
            }
        }))


    }

    let windowScroll = function () {

        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.opacity = "100";
            } else {
                document.getElementById("header").style.opacity = "0";
            }
            prevScrollpos = currentScrollPos;
        }

    }

    windowScroll();

    //these elements will always be present on the page
    //content wrapper and header



    return {
        createDiv,
        getMain,
        setCurrentTab,
        getCurrentTab,
        getContent,
        getHeader,
        getTabs,
        removeAllNodes,
        getBody,
        setBackground,
        createDivWithClass,
         appendViaQuery
    };

}()

export {
    domManipulator
};