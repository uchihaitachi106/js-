const button = document.getElementById("button");
const img = document.getElementById("img");
button.style.fontSize = "xx-large";
button = addEventListener("click" , event =>
{
    if(img.style.visibility==="hidden")
    {
        button.textContent = "Hide";
        img.style.visibilty = "visible";
    }
    else
    {
        button.textContent = "Seek";
        img.style.visibility = "hidden"; 
    }
});