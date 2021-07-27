let domManipulator = function () {

    let currentTab = "home";
    let content = document.querySelector("#content");
    let header = document.createElement("div");
    header.id = "header";
    let tabs = document.createElement("div");
    tabs.id = "tabs";  
  

    let getBody = function() {

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

    let removeAllNodes = function() {

        let nodes = getContent().childNodes;

        nodes.forEach((node => {
            console.log(node);
            if(node.id != "header") {

                getContent().removeChild(node);
            }
        }))     
    }

    return {
        createDiv,
        getMain,
        setCurrentTab,
        getCurrentTab,
        getContent,
        getHeader,
        getTabs,
        removeAllNodes,
        getBody
    };

}()

export {
    domManipulator
};