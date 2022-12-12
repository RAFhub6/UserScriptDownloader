/*
 CVM UserScript v1.0
 Title:Pinger.js 
 Version:v1.0
 Author: @puremintwater
*/
var stop = [];
function timeout() {
  setTimeout(function() {
    Array.from(document.getElementById("chat-box").children).forEach(el => {
      var thing = document.getElementById("chat-user").innerText;
      if (!el.querySelector("div")) return;
      if (el.querySelector("div").innerText.includes("@" + thing) && !el.querySelector("div").innerText.startsWith(thing) && !el.querySelector("div").innerHTML.startsWith("<b>You have been pinged") && !stop.includes(el.querySelector("div").innerText)) {
        var a = document.createElement("li")
        a.innerHTML = "<div><b>You have been pinged: " + el.querySelector("div").innerText + "</b></div>"
        document.getElementById("chat-box").appendChild(a)
        stop.push(el.querySelector("div").innerText)
      }
    })
    // create a recursive loop.
    timeout();
  }, 5000);
}