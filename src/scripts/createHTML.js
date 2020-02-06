const createHTML = {
    // creates html for card
    // * => string of html
    card(text, idNum) {
        return `
        <div class="ui card" id="card--${idNum}">
            <div class="content">
                <button class="ui button" id="delete-btn--${idNum}">Delete</button>
                <div class="font-color">
                    <label for="fontColor">Font</label>
                    <input id="font-input--${idNum}"type="color" name="fontColor" value="#ffffff">
                </div>

                <div class="back-color">
                    <label for="backroundColor">Background</label>
                    <input id="back-input--${idNum}" type="color" name="backroundColor" value="#ffffff">
                </div>
            </div>
            <div class="content">

                <div class="summary" id="summary--${idNum}">
                    ${text}
                </div>

            </div>
        </div>
        `;
    }
};
export default createHTML;