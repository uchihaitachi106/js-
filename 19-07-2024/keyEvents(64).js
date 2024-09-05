// i am going to use dom to style it 
const box = document.getElementById("box");
box.style.height = "150px";
box.style.width = "150px";
box.style.fontSize = "xxx-large";
box.style.justifyContent="center";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.position = "relative";
box.style.backgroundColor = "lightblue"
document.body.style.margin = "0";

// document.addEventListener(event, callback())
// event - keyup&& keyDown
const move=10;
// const y = 0;
let y = 0;
// const x = 0;
let x = 0;

document.addEventListener("keyup",event => { box.textContent = "😁"; box.style.backgroundColor = "lightblue"});
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow"))// to avoid keys other than arrows
    {
        document.addEventListener("keydown", event => {box.style.backgroundColor = "tomato"; box.textContent = "😒"});
        event.preventDefault();
        switch(event.key)
        {
            case "ArrowUp":
                y-=move;
                break;
            case  "ArrowDown":
                y+=move;
                break;
            case "ArrowRight":
                x+=move;
                break;
            case "ArrowLeft":
                x-=move;
                break;            
        }
        box.style.top = `${y}px`;
        box.style.left = `${x}px`;

    }
}
);
