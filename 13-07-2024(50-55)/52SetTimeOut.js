// it sets time out (callback, delay)
function hello()
{
    window.alert("hello");
    console.log("hell");
}
const hell=setTimeout(hello, 3000);
//clearTimeout(hell);//we can clear time but we need id

setTimeout(function(){window.alert("Fine")},5000);
setTimeout(()=>window.alert("hel"),7000);