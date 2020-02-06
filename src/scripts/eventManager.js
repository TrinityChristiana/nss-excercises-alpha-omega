import createHTML from './createHTML.js';
import DOMManager from './DOMManager.js';
import inputManager from './inputManager.js';
import validate from './validate.js';
// @ts-check
let i = 0;
let counterArray = [];
const eventManager = {
    // Runs functions that need to happen on load
    // * => undefined
    runIt() {
        this.create();
    },
    // Creates event listener for create button
    // * => undefined
    create() {
        document.getElementById("create-btn").addEventListener("click", (e) => {
            const textValue = inputManager.getValue("card-input");
            const hasError = validate.textarea(textValue);

            const idNum = this.createCounter()[counterArray.length - 1];

            if (!hasError) {
                const cardHTML = createHTML.card(textValue, idNum);
                DOMManager.addCard(cardHTML);
                this.deleteCard();
                this.backgroundColor();
                this.fontColor();
            }
        });
    },
    // counter to number off id numbers for each card
    // * => number
    createCounter() {
        counterArray.push(i++);
        return counterArray;
    },
    // goes through counter and adds event listeners to all delete buttons individually
    // * => undefined
    deleteCard() {
        const cards = document.querySelectorAll(".card");
        for (let i = 0; i < cards.length; i++) {
            const deleteButton = cards[i].children[0].querySelector(".button");
            const id = deleteButton.id.split("--")[1];
            deleteButton.addEventListener("click", () => DOMManager.removeCard(id))
        }
    },
    // goes through counter and adds event listeners to all background color inputs individually
    // * => undefined
    backgroundColor() {
        const cards = document.querySelectorAll(".card");
        for (let i = 0; i < cards.length; i++) {
            const backInput = cards[i].children[0].querySelector(".back-color").querySelector("input");
            const id = backInput.id.split("--")[1];
            backInput.addEventListener("input", () => DOMManager.backgroundColor(id));
        }
    },
    // goes through counter and adds event listeners to all font color inputs individually
    // * => undefined
    fontColor() {
        const cards = document.querySelectorAll(".card");
        for (let i = 0; i < cards.length; i++) {
            const fontInput = cards[i].children[0].querySelector(".font-color").querySelector("input");
            const id = fontInput.id.split("--")[1];
            fontInput.addEventListener("input", () => DOMManager.fontColor(id));
        }

    }
}

export default eventManager;