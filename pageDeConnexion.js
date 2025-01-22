/*const dropdownMenu1= document.getElementById("dropdownMenu1");
const showMenu1= document.getElementById("showMenu1");

dropdownMenu1.onmouseenter=(function(){mouseEnterCreer()});
dropdownMenu1.onmouseleave=(function(){mouseLeaveCreer()});

function mouseEnterCreer(){
    showMenu.classList.remove("menuCache");
}
function mouseLeaveCreer(){
    showMenu.classList.add("menuCache");
}*/

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelectorAll(".dropdown");
  
    dropdown.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const submenu = item.querySelector(".submenu");
  
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      });
    });
  });