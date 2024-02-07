function openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  function changer(x) {
    let hampanel1 = document.getElementById("mySidepanel");
    let hambutton = document.getElementById("tpanel");
    let hampanel2 = document.getElementById("mySidepanel2");
    if (x.matches) { // If media query matches
      hampanel1.style.display = "none";
      hambutton.style.display = "none";
      hampanel2.style.display = "flex";
    } else {
      hampanel1.style.display = "block";
      hambutton.style.display = "block";
      hampanel2.style.display = "none";
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 650px)")
  
  // Call listener function at run time
  changer(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function () {
    changer(x);
  });
  
  //chatarea
var messege = document.getElementById("chatarea");
function printer() {
    // alert(messege.value);    
    // alert(chatarea.value); also work

    // Create element:
    const para = document.createElement("p");
    const bot = document.createElement("p");
    para.innerText = messege.value;
    // Append to body:
    let paraStyle = document.getElementById("box").appendChild(para);
    paraStyle.style.cssText = "color: #ffffff; padding: 2%; margin-left: 60%; margin-top:5%; display: flow-root; text-align: right; align-content: end; align-items: end; width: max-content; height: max-content; background-color: #e99c9f; border-radius: 20px 3px 20px 20px;";
    function botchat() {
        // alert(paraStyle.innerText);
        let questions = {
            "hi": "hello",
            "hello": "hello to",
            "how are you": "i am fine how can i help you"

        };
        let botStyle;
        if (para.innerText in questions) {
            bot.innerText = questions[para.innerText];
            botStyle = document.getElementById("box").appendChild(bot);
        }
        else {
            bot.innerText = "sorry i have not any data";
            botStyle = document.getElementById("box").appendChild(bot);
        }
        botStyle.style.cssText = "color: #ffffff; padding: 2%; margin-left: 2%; margin-top:5%; text-align: left; width: max-content; height: max-content; background-color: #e9009f; border-radius: 3px 20px 20px 20px;";
    }
    botchat();
}
let chatbot = document.getElementById("chatbt");
let chatbotButton = document.getElementById("chatbotBox");

function openchat() {
    // chatbotButton.value = "hi";
    chatbot.style.cssText = "display: block; width:300px;";
    chatbotButton.style.cssText = "display: none; width:0px;";
}

function closechat() {
    // alert(chatbotButton.value);
    chatbot.style.cssText = "display: none; width:0px;";
    chatbotButton.style.cssText = "display: block; width:50px;";
}

//Make the DIV element draggagle:
dragElement(chatbotButton);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("image")) {
        //   if (document.getElementById(elmnt.id + "image")) 
/* if present, the header is where you move the DIV from:*/
    document.getElementById("image").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}