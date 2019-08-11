'use strict';
(function () {
    const box1Header = document.querySelector("#box1 header");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");
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

    box4.addEventListener("mouseenter", boxEventCallbackBefore);
    box4.addEventListener("mouseleave", boxEventCallbackBefore);
})();
