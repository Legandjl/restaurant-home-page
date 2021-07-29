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

            if(currentScrollPos > 0) {

                document.querySelector("#storyLogoWrap").classList.add("opacity");
            }

            else {

                document.querySelector("#storyLogoWrap").classList.remove("opacity");
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
        appendViaQuery
    }

}()

export {
    
    domManipulator
}