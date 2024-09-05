function RandomPassword()
{
    const LowerCase="abcdefghijklmnopqrstuvwxyz";
    const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number="0123456789";
    const Symbols="~!@#$%^&*+_-";
    let allowedChars="";
    allowedChars+= lowerCase ? LowerCase: "";
    allowedChars+= upperCase ? UpperCase: "";
    allowedChars+= number ? number: "";
    allowedChars+= Symbols ? Symbols:"";
    for(let i=0;i<PasswordLength;i++)
    {
        let random=Math.floor(Math.random()*allowedChars.length)+1;
        randomPassword+= allowedChars[random];
    }
    return randomPassword;
}
const PasswordLength=12;
const lowerCase=true;
const upperCase=true;
const number=true;
const Symbols=true;
let randomPassword="";

let password=RandomPassword(lowerCase,upperCase,number,Symbols);
console.log(password);

// alternative function 
// function randomPassword()
// {
//     const password="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*_+";
//     for(let i=0;i<passwordLength; i++)
//     {
//         const random=Math.floor(Math.random()*password.length);
//         Password += password[random];
//     }
//     return Password;
// }
// let Password="";
// passwordLength=12;
// let result=randomPassword();
// console.log(result);