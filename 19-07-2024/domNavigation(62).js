// firstElementChild
// lastElementChild
// parent
// Child

// ---------------------firstElement---------------------
const first=document.getElementById("fruits");
const selcted=first.firstElementChild;
selcted.style.backgroundColor="yellow";

const allfirst=document.querySelectorAll("ul");

allfirst.forEach(allfirst=>{const selected= allfirst.firstElementChild;
                 selected.style.backgroundColor="red";
} );

// ----------------------lastElement------------------------
const last=document.getElementById("fruits");
const lastselected=last.lastElementChild;
lastselected.style.backgroundColor="blue";

const alllast= document.querySelectorAll("ul");
alllast.forEach(alllast=>{const allLastSelected = alllast.lastElementChild;
                allLastSelected.style.backgroundColor="orange"});

// -----------------------nextSibling---------------------------
const next=document.getElementById("fruits");
const nextElement = next.nextElementSibling;
nextElement.style.backgroundColor="blue";

// const nextall=document.getElementById("apple");
// nextall.forEach(nextall=>{const nextAllselected = nextall.nextElementSibling;
//                 nextAllselected.style.backgroundColor="red"});
// does not have a forEach method

// -------------------------previousSibling-------------------------------
const before = document.getElementById("pineapple");
const beforeSelected = before.previousElementSibling;
beforeSelected.style.backgroundColor="grey";

// -------------------------------------parent----------------------------
const parents = document.getElementById("eggs");
const parentSelected = parents.parentElement;
parentSelected.style.backgroundColor="yellow";

// ------------------------------------------children-----------------------

const kids = document.getElementById("fruits");
const selectedKids = kids.children;
Array.from(selectedKidskids).forEach(selectedKids=>{selectedKids.style.backgroundColor="yellow"}); 

