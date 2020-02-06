import eventManager from "./eventManager.js";
import inputManager from "./inputManager.js";

const DOMManager = {
    // Renders passed in html to the card container
    // * => undefined
    addCard(cardHTML) {
        document.getElementById("card-container").innerHTML += cardHTML;
    },
    // Deleted card from DOM
    // * => undefined
    removeCard(id) {
        document.getElementById(`card--${id}`).remove();
    },
    // Renders background color for cards on input 
    //  *  => undefined
    backgroundColor(id) {
        const color = inputManager.getValue(`back-input--${id}`);
        document.getElementById(`card--${id}`).style.backgroundColor = color;
    },
    // Renders font color for cards on input 
    //  *  => undefined
    fontColor(id) {
        const color = inputManager.getValue(`font-input--${id}`);
        document.getElementById(`summary--${id}`).style.color = color;

    },
};







export default DOMManager;