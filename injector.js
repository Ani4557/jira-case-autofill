/*
 * File    : injector.js
 * Date    : 11/22/2022
 * Author  : Ani
 */

const shade = (element) => {
    element.setAttribute("style", "background-color: rgba(23, 111, 203, 0.2)");
};

const setNativeValue = (element, value) => {
    const valueSetter = Object.getOwnPropertyDescriptor(element, "value").set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, "value").set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
    } else {
        valueSetter.call(element, value);
    }
};

const fillSummary = (input, text) => {
    const i = document.getElementById(input);
    setNativeValue(i, text);
    i.dispatchEvent(new Event("input", {
        bubbles: true
    }));
};

const fillDescription = (input, text) => {
    const i = document.querySelector(input);
    i.innerHTML = text; 
};

const fillDate = (dateInput, button, date) => {
    const d = document.getElementById(dateInput);
    const b = document.querySelectorAll(button);

    const month = date.substring(0, 2);
    const year = date.substring(2, 4)

    setNativeValue(d, `${month}/1/20${year}`);
    d.dispatchEvent(new Event("input", {
        bubbles: true
    }));
};

fillSummary("summary-field", "Summary text");
fillDescription("#description-container p", "Description text");
fillDate("react-select-9-input", "#duedate-container button", "1020");


buttons = document.querySelectorAll("#duedate-container button");
buttons.forEach((button) => {
    if (button.innerHTML === "1")
        button.click();
});
