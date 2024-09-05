// ------------------------create html element-----------------------
const newh1 = document.createElement("h1");
const newh2= document.createElement("h1");

// ------------------adding content to the element-----------------
newh1.textContent='Hi persistent';
newh1.style.color="grey";
newh1.style.backgroundColor='red';
newh1.style.textAlign="center";
newh2.textContent= 'hii';

//-------------------------appending-------------------------------
// document.body.div.box.append(newh1); does not work
document.getElementById("box2").append(newh2);
document.body.append(newh1);//it will add it on bottom
document.body.prepend(newh2);//it will add it on top

document.getElementById("box1").prepend(newh1);
const box2=document.getElementById("box2");
document.body.insertBefore(newh2, box2);

// ----------------------remove element  aka removing child--------------------
document.body.removeChild(newh2);
document.getElementById("box1").removeChild(newh1);