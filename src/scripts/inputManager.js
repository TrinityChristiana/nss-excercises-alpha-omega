const inputManager = {
    // Takes passed in id and gets the value of the element
    // * => string
    getValue(id){
        return document.getElementById(id).value;
    }
}

export default inputManager;