const date=Date();
console.log(date);

//we can also fromat the date as per our wish
const date1=new Date(2024, 0, 1, 4, 5, 7);// use new if you want to format the date
date1.setFullYear(2025);
const year=date1.getFullYear();
const day=date1.getDay();
console.log(year);
console.log(day);
const date2=new Date(2024, 0, 1, 4, 5, 7);

if(date1 > date2)// not able to use current date (if possible mention it in future)
{
    console.log("Congratulations");
}
