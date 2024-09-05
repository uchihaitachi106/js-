const cards=["K", "J", "Q", "A", 2, 3, 4, 5, 6, 7, 8, 9];
for(let i=cards.length-1;i>0;i--)
{
 const random=Math.floor(Math.random()*i+1);
 [cards[i],cards[random]]=[cards[random], cards[i]];   
}
console.log(cards);