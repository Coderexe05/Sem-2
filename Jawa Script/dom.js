let newheading=document.getElementById("heading");
newheading.textContent="dom manipulation in javascript";
newheading.style.color="blue";
newheading.style.fontSize="50px";

let paragraphs= document.getElementsByClassName("paragraph");
paragraphs[0].innerHTML="<strong> this paragraph has been edited";
paragraphs[0].style.color="green";
paragraphs[0].style.fontSize="20px";

let newDiv=document.createElement("div");
newDiv.textContent="this is a new div elelment";
document.body.appendChild(newDiv);

function addList(list)
{
  let newList = document.createElement("11");

}
document.getElementById("resetbtm")