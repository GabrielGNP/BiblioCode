const $gi = element => document.getElementById(element); 
const $gc = element => document.getElementsByClassName(element);
const $q = element => document.querySelector(element);
const $qA = element => document.querySelectorAll(element);

function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      /*
      // Uso:
      delay(850)
        .then(() => {
          console.log("datos");
          // Tu código a ejecutar después del retraso
        })
        .catch(error => {
          console.error("Error:", error);
        });
        */

const createCloseButton = _ => {
        let divButton = document.createElement("div");
        let buttonButton = document.createElement("button");
        divButton.classList.add("containerReturnShelf");
        buttonButton.id  = "returnShelf";
        buttonButton.classList.add("buttonReturnShelf");
        buttonButton.onclick = closeBook;
        buttonButton.textContent = "X";
        $q("body").appendChild(divButton);
        divButton.appendChild(buttonButton);
}