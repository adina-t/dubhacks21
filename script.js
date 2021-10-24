

let collapsible = document.getElementsByClassName("collapse");

for(let i = 0; i < collapsible.length; i++){
  collapsible[i].addEventListener("click", function () {
    this.classList.toggle("activate");
    let options = this.nextElementSibling;
    if(options.style.display === "block"){
      content.style.display = none;
    } else {
      content.style.display = block;
    }
  });
}