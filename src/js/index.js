

const buttons = document.querySelectorAll(".button");

const personagens = document.querySelectorAll(".character")

buttons.forEach((button, index) => {
        button.addEventListener("click", () => {

                unselectButton();
                unselectCharacter();

                button.classList.add("selected")

                personagens[index].classList.add("selected")
        })
});

function unselectCharacter() {
        const removeSelectedCharacter = document.querySelector(".character.selected");
        removeSelectedCharacter.classList.remove("selected");
} 

function unselectButton() {
        const removeSelectedButton = document.querySelector(".button.selected");
        removeSelectedButton.classList.remove("selected");
}