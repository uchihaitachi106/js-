let elaspedTime=0;
let startingTime=0;
let running=false;
document.getElementById("display");
function start()
{
    if(!running)
    {
        startingTime=Date.now()-elaspedTime;
        timer=setInterval(update,10);
        running=true;//did not update running=true
        console.log(startingTime);
    }
}
function  stop()
{
    if(running)
    {
        clearInterval(timer);
        //startingTime=Date.now()-elaspedTime;
        console.log(Date.now());
        elaspedTime=Date.now()-startingTime;
        running=false;
        console.log(elaspedTime);
    }

}
function reset()
{
    clearInterval(timer);//make sure you clear  that every time
    elaspedTime=0;
    startingTime=0;
    running=false;
    display.textContent="00:00:00:00";
}
function update()
{
    time=Date.now();
    elaspedTime=time-startingTime;
    let hours=Math.floor((elaspedTime/(1000*60*60))).toString().padStart(2,0);
    let minutes=Math.floor(((elaspedTime/(1000*60))%60)).toString().padStart(2,0);
    let seconds=Math.floor(((elaspedTime/1000)%60)).toString().padStart(2,0);
    let milli=Math.floor(((elaspedTime%1000)/10)).toString().padStart(2,0);//swapped the modulus and division
    display.textContent=`${hours}:${minutes}:${seconds}:${milli}`;
}