// select the root node
const root = document.querySelector("html");
console.log(root);

// select the last child of the root node
root.lastChild = root.lastChild;
console.log("last child", lastChild);

// select all the children of the body element
const bodyChildren = lastChild.children;
console.log(bodyChildren[0]);
console.log(bodyChildren[3]);

// select the next sibling of the h2 node
// const h2sibling = document.querySelector("h2").nextElementSibling;
// console.log("h2", document.querySelector);
// console.log("sibling", h2sibling)
// select the parent element of the h1 node
console.log("parent", document.querySelector("h1").parentElement);
