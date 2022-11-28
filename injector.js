/*Array.from(document.getElementsByClassName('Title')).forEach(el => {
  el.style.setProperty('color', 'red', 'important'); 
})*/

let summary = document.getElementById("summary-field");
summary.focus();
summary.value = "new value";
summary.blur();
