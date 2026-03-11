document.getElementById("searchBtn").onclick=function(){

let uid=document.getElementById("uid").value;

let result=document.getElementById("result");

result.hidden=false;

result.innerHTML=
"UID: "+uid+"<br>"+
"Name: FreeFirePlayer<br>"+
"Level: 70<br>"+
"Rank: Heroic<br>"+
"Likes: 9999";

}


