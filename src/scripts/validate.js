const validate = {
    // tests passeed in parameters to see if the string is empty of just full or spaces
    // * => boolean
    textarea(input){
        return !(/\S/.test(input));
    }
}

export default validate;