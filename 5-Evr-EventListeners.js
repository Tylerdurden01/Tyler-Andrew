// add an event listener to the dog picture that listens for a "click" and gives an alert
document
  .querySelector("#dog-Picture")
  .addEventListener("click", () => alert("BORK!"));

// add an event listener to the list items in the class schedule that listens for a "focus" event and changes its background color
const weeks = document.querySelectorAll(".class-week")
for (let i = 0; i < weeks.length; i++)
.addEventListener("hover", (x)=> console.log(x);
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document
.querySelector("body")
.addEventListener("keydown", event => console.log(event.key));
