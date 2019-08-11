'use strict';
(function () {
    const box1Header = document.querySelector("#box1 header");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");
    const box5 = document.getElementById("box5");
    const box6 = document.getElementById("box6");
    const box7 = document.getElementById("box7");
    const box8 = document.getElementById("box8");
    const box9 = document.getElementById("box9");
    const box10 = document.getElementById("box10");
    const box2Header = document.querySelector("#box2 header");
    const secondHeader = document.getElementById("box-header");
    const ourBox = secondHeader.parentNode;
    ourBox.classList.add("box-bg");
    const pageWrapperChildren = document.getElementById("page-wrapper").children;
    pageWrapperChildren[0].classList.add("box-bg");
    ourBox.parentNode.classList.add("box-red");

    box1Header.addEventListener("click", function () {
        box1Header.classList.toggle("header-special");
    });

    const boxEventCallback = function(event) {
        box3.insertAdjacentHTML("beforeend", "Detected event " + event.type + "<br>")
    };

    box3.addEventListener("mouseenter", boxEventCallback);
    box3.addEventListener("mouseleave", boxEventCallback);

    box2Header.addEventListener("click", function () {
        console.log("wowo");
        box2Header.insertAdjacentHTML("afterend", "<p>Hello</p>")
    });

    const box3Header = box3.querySelector("header");
    box3Header.addEventListener("click", function () {
        box3Header.classList.toggle("header-special");
    });

    const boxEventCallbackBefore = function (event) {
        box4.querySelector("header").insertAdjacentHTML("afterend", "Detected event " + event.type + "<br>");
        box4.querySelector("header").classList.toggle("header-special");
    };

    const eventCallbackForAllBoxes = function (event) {
        this.querySelector("header").insertAdjacentHTML("afterEnd", "Detected event " + event.type + "<br>");
    };

    const headerClickCallback = function () {
      this.parentElement.classList.toggle("header-special");
    };

    box4.addEventListener("mouseenter", boxEventCallbackBefore);
    box4.addEventListener("mouseleave", boxEventCallbackBefore);
    box5.addEventListener("mouseenter", eventCallbackForAllBoxes);
    box5.addEventListener("mouseleave", eventCallbackForAllBoxes);
    box6.addEventListener("mouseenter", eventCallbackForAllBoxes);
    box6.addEventListener("mouseleave", eventCallbackForAllBoxes);
    box7.addEventListener("mouseenter", eventCallbackForAllBoxes);
    box7.addEventListener("mouseleave", eventCallbackForAllBoxes);
    box5.querySelector("header").addEventListener("click", headerClickCallback);
    box6.querySelector("header").addEventListener("click", headerClickCallback);
    box7.querySelector("header").addEventListener("click", headerClickCallback);

    const headerClickAndChangeStyle = function () {
        this.classList.toggle("header-special");
    };

    const boxClickCallback = function () {
        this.classList.toggle("box-bg");
    };
    box8.addEventListener("click", boxClickCallback);
    box9.addEventListener("click", boxClickCallback);
    box10.addEventListener("click", boxClickCallback);
    box8.querySelector("header").addEventListener("click", headerClickAndChangeStyle);
    box9.querySelector("header").addEventListener("click", headerClickAndChangeStyle);
    box10.querySelector("header").addEventListener("click", headerClickAndChangeStyle);
    box10.querySelector("header").addEventListener("click", function (event) {
        event.stopPropagation();
    });

    const box10Link = document.querySelector(".toggle-special-header");
    box10Link.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.parentElement.querySelector("header").classList.toggle("header-special");
    })

})();
