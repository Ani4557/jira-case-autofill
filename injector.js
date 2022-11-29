/*Array.from(document.getElementsByClassName('Title')).forEach(el => {
  el.style.setProperty('color', 'red', 'important'); 
})*/

/*let summary = document.getElementById("summary-field");
summary.focus();
summary.value = "new value";
summary.blur();*/

function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, "value").set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, "value").set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
    } else {
        valueSetter.call(element, value);
    }
}

setNativeValue(input, "foo");
input.dispatchEvent(new Event("input", { bubbles: true }));

