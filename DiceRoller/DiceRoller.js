function roll()
{
    const numOfDices=document.getElementById("No.ofDices").value;
    const roll=document.getElementById("roll");
    const values=[];
    const  images=[];
    const result=document.getElementById("result");    
    const DiceImages=document.getElementById("images");
    for(let i=0;i<numOfDices;i++)
    {
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        // blunder = did not close the double quotes in the img element
        images.push(`<img src="images/Dice-${value}-b.svg ">`);
    }
    result.textContent=`Dice: ${values.join(", ")}`;
    DiceImages.innerHTML=images.join("");
}
