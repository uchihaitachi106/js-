function update()
{
    const date= new Date();
    let hour= date.getHours().toString().padStart(2,0);
    let minutes= date.getMinutes().toString().padStart(2,0);
    let seconds= date.getSeconds().toString().padStart(2,0);
    let time=`${hour}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=time;//we created a variable and modified our text content
}
setInterval(update, 1000);//this setInterval will call the function every second