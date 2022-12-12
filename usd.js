var userscript
var a = document.createElement("button")
a.setAttribute("class", "btn btn-primary")
a.innerText = "UserScripts"
a.setAttribute("onclick", "usmenu()")
document.getElementById("btns").appendChild(a)
function usmenu() {
  userscript = prompt("Choose a userscript (pinger/(more options coming soon!))")
  if (userscript == "pinger") {
    x = document.createElement("script")
    x.src = "https://userscriptdownloader.puremintwater.repl.co/library/pinger.js"
    document.head.appendChild(x)
  } else {
    alert("Invalid option")
  }
}
if (prompt("Advertise?") == "yes") {
  document.getElementById("chat-input").value = "Start using CVMUserScript Loader Now!"
  document.getElementById("chat-send-btn").click()
  document.getElementById("chat-input").value = "userscriptdownloader.puremintwater.repl.co"
  document.getElementById("chat-send-btn").click() 
}
