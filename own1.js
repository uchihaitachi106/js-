const submit=document.getElementById("submit");
const result=document.getElementById("result");
submit.onclick=function()
{
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const rePassword=document.getElementById("re-password").value;
    if(username==""||username==null)
    {
        result.textContent="Enter your username";
    }
    else if(password==""||password==null)
    {
        result.textContent="enter your password";
    }
    else if(rePassword==""||rePassword==null)
    {
        result.textContent="reenter your password"
    }
    else if(password!=rePassword)
    {
    result.textContent="password dont match";
    }
}