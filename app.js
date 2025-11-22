function convertDistance() {
    // get value using the ID variable directly
    let km = parseFloat(kmInput.value);

    if (isNaN(km)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    // conversion formula (Comment out the version you do want to use)
    //let miles = km / 1.60934;  //This version does not round to 2 decimal points
    let miles = (km / 1.60934).toFixed(2); //This version rounds to 2 decimal points

    // output result
    result.textContent = km + " kilometers = " + miles + " miles";
}
