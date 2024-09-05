const choices = ['rock', 'scissors', 'paper'];
const player = document.getElementById("player");
const computer = document.getElementById("Computer");
let result = document.getElementById("result");
function playGame(playersChoice)
{
    const computerChoice = choices[Math.floor(Math.random()*3)];
    //console.log(computerChoice)
    let resultText="";
    player.textContent=`${playersChoice}`
    if(playersChoice===computerChoice)
    {
        resultText='It is a draw!';
    }
    else
    {
        switch(playersChoice)
        {
            case "rock":
            resultText=(computerChoice==='scissors')? 'You Win!':'You Lose!';
            break;
            case "scissors":
            resultText=(computerChoice==='paper')? 'You Win!' :'You Lose!';
            break;
            case "paper":
            resultText = (computerChoice==='rock')? 'You Win!':'You Lose!';
            break;
        }
    }
   player.textContent = `Player: ${playersChoice}`;
   computer.textContent = `Computer: ${computerChoice}`; 
   result.textContent = resultText;
   switch(result)
   {
    case 'You Win!':
        resultText.classList.add("green");
        break;
    case 'You Lose!':
    // resultText.classList.add(red);
        resultText.classList.add("red");
        break;
   }
}
//colors dos not change analyse it later
