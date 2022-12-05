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
    setNativeValue(input, text);
    input.dispatchEvent(new Event("input", {
        bubbles: true
    }));
};

const fillDescription = (input, text) => {
    input.innerHTML = text; 
};

const fillDate = (dateInput, dateHiddenInput, dateDiv, date) => {
    // Takes input MMYY and enters in MM/01/20YY to the form input and 20YY-MM-01 to the hidden input
    const month = date.substring(0, 2);
    const year = date.substring(2, 4)

    setNativeValue(dateInput, `${month}/1/20${year}`);
    dateInput.dispatchEvent(new Event("input", {
        bubbles: true
    }));

    setNativeValue(dateHiddenInput, `20${year}-${month}-1`);
    dateHiddenInput.dispatchEvent(new Event("input", {
        bubbles: false
    }));

    // Gets the first div that has the text "Select Date" inside #duedate-container
    const divs = document.querySelectorAll(dateDiv)
    divs.forEach(div => {
        if (div.innerHTML === "Due date") {
            div.innerHTML = `${month}/1/20${year}`;
            return;
        }
    });
};

fillSummary(document.getElementById("summary-field"), "Summary text");
fillDescription(document.querySelector("#description-container p"), "Description text");
fillDate(document.getElementById("react-select-5-input"), document.querySelector("#duedate-container input"), "#duedate-container", "1221");

// const date = document.querySelector("#duedate-container input");
// setNativeValue(date, "2022-12-15");
// date.dispatchEvent(new Event("input", {
//     bubbles: false
// }));


// const date2 = document.getElementById("react-select-5-input");
// setNativeValue(date2, "12/15/2022");
// date2.dispatchEvent(new Event("input", {
//     bubbles: true
// }));