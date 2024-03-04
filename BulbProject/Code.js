let body=document.body;

let image=document.createElement("img");
console.log(image);
body.appendChild(image);
image.style.height="600px";
image.style.width="600px";
image.setAttribute("src","./lightbulb-OFF.png")
body.style.backgroundColor="black";

let button=document.createElement("button");
button.innerHTML="OFF";



body.appendChild(button);

button.addEventListener("click",()=>{
    if(button.innerHTML=="ON"){

        button.innerHTML="OFF";
        image.setAttribute("src","./lightbulb-ON.png");
        image.style.height="650px";
        image.style.width="470px";
    }
    else{
        image.style.height="600px";
        image.style.width="600px";
        button.innerHTML="ON";
        image.setAttribute("src","./lightbulb-OFF.png");

    }
})





