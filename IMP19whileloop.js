let username;
let loggedIn=true;
while(loggedIn)
{
    username=window.prompt("Enter username");
    password=window.prompt("Enter password");
    if(username=="myUsername"&&password=="itachi106")
    {
        console.log("sucessful");
        loggedIn=false;

    }
    else
    {
        console.log("not valid");
    }
}
// always having  issues with while loop
