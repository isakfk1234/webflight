function logfin()
{
var a=document.getElementById('username').value
var b=document.getElementById('password').value
if(a==""||b=="")
{
alert("!!! please fill the details !!!");
}
else 
if(a=="isakfk1234" && b=="12345")
{
window.open("/nettsider/flightweek/making/account/account.html");
}
else
if(a=="Leon" && b=="12345")
{
window.open("/nettsider/flightweek/making/account/accounts/leon/leon.html");
}
else
if(a=="David" && b=="12345")
{
window.open("/nettsider/flightweek/making/account/accounts/david/david.html");
}
else
if(a=="Jodi12" && b=="12345")
{
window.open("/nettsider/flightweek/making/account/accounts/Jodi12/Jodi12.html");
}
else
if(a=="osi32" && b=="12345")
{
window.open("manager.html");
}
else
if(a=="AMNM" && b=="12345")
{
window.open("manager.html");
}
else
if(a=="YASW" && b=="12345")
{
window.open("manager.html");
}
else
{
alert("wrong id/password");
}

}