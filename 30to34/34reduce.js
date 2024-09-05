// reduce= reduces the elements of an array to a single value
let money=[12, 435342, 789134 ];
const total= money.reduce(sum);
console.log(`$${total.toFixed(2)}`);
function sum(accumulator,element)
{
    return (accumulator+element);
}
