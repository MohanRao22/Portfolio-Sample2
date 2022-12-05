var icon = document.getElementById("icon-image");
var list_items = document.querySelector(".menu-list-sm");
console.log(icon);
var pressed = false;

    icon.addEventListener("click", () => {
        if (pressed == false) {
        list_items.style.display = "block";
        list_items.style.transition = "linear 1s"
        pressed = true;
        }else{
            list_items.style.display = "none";
        pressed = false; 
        }
    });
