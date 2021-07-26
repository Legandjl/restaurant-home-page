let domManipulator = function() {   

    let currentTab = "home";

    let getMain = function() {    

        return document.querySelector("#main");
    }

    let setCurrentTab = function(tab) {

        currentTab = tab;
    }

    let getCurrentTab = function() {

        return currentTab;
    }



    let createDiv = function(id) {

        let newDiv = document.createElement("div");
        newDiv.id = id;
        return newDiv;

    }

    return {createDiv, getMain, setCurrentTab, getCurrentTab};

}()

export {domManipulator};