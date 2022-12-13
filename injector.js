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

const fillDate = (dateInput, dateHiddenInput, /*dateContainer,*/ button, date) => {
    const d = document.getElementById(dateInput);
    const h = document.querySelector(dateHiddenInput);
    const b = document.querySelectorAll(button);

    // Takes input MMYY and enters in MM/01/20YY to the form input and 20YY-MM-01 to the hidden input
    const month = date.substring(0, 2);
    const year = date.substring(2, 4)

    setNativeValue(d, `${month}/1/20${year}`);
    d.dispatchEvent(new Event("input", {
        bubbles: true
    }));

    setTimeout(() => {
        setNativeValue(h, `20${year}-${month}-1`);
        h.dispatchEvent(new Event("input", {
            bubbles: false
        }));
    }, 1000);

    // Gets the first div that has the text "Select Date" inside #duedate-container
    // const divs = document.querySelectorAll(dateContainer)
    // divs.forEach(div => {
    //     if (div.innerHTML === "Due date") {
    //         div.innerHTML = `${month}/1/20${year}`;
    //         continue;
    //     }
    // });
    // setTimeout(() => {
    //     b.forEach((button) => {
    //         if (button.innerHTML === "1")
    //             button.click();
    //     });
    // }, 10000);
};

fillSummary("summary-field", "Summary text");
fillDescription("#description-container p", "Description text");
fillDate("react-select-9-input", "#duedate-container input", /*"#duedate-container",*/ "#duedate-container button", "1020");



const buttons = document.querySelectorAll("#duedate-container button");
for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === "1") {
        buttons[i].click();
        break;
    }
}
    
/*
buttons.forEach((button) => {
    if (button.innerHTML === "1")
        button.click();
});
*/


