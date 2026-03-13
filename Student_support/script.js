function postQuestion(){

let question=document.querySelector("textarea").value;

if(question===""){
alert("Please write a question");
return;
}

let li=document.createElement("li");

li.innerText=question;

document.getElementById("questionList").appendChild(li);

document.querySelector("textarea").value="";

}