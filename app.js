
function convert() {
    let indexFrom = 0;
    let indexTo = 0;
    let from = document.getElementById('tempListFrom');
    let to = document.getElementById('tempListTo');
    let getResultSpan = document.getElementById('result')
    let getTextboxValue = document.getElementById('enter');

    from.addEventListener('change', () => {
        indexFrom = from.selectedIndex;
    });


    to.addEventListener('change', () => {
        indexTo = to.selectedIndex;
    });
    if (!Number.isInteger(Number(getTextboxValue.value)) && (getTextboxValue.value).length > 0) {
        alert("Enter Numeric Value");
        getTextboxValue.value = "";
    }
    else if (Number.isInteger(parseInt(getTextboxValue.value)) && (getTextboxValue.value).length > 0)
        if (from.selectedIndex == 0 && to.selectedIndex == 0) {
            getResultSpan.innerHTML = (getTextboxValue.value);
        }
    if (from.selectedIndex == 0 && to.selectedIndex == 1 && (getTextboxValue.value).length > 0) {
        getResultSpan.innerHTML = (parseInt(getTextboxValue.value) * 9 / 5) + 32;
    }
    if (from.selectedIndex == 0 && to.selectedIndex == 2 && (getTextboxValue.value).length > 0) {
        getResultSpan.innerHTML = (parseInt(getTextboxValue.value) + 273.15);
    }
    if (from.selectedIndex == 1 && to.selectedIndex == 0 && (getTextboxValue.value).length > 0) {
        getResultSpan.innerHTML = (parseInt(getTextboxValue.value) - 32) * 5 / 9;
    }
    if (from.selectedIndex == 1 && to.selectedIndex == 1 && (getTextboxValue.value).length > 0) {
        getResultSpan.innerHTML = parseInt(getTextboxValue.value);
    }
    if (from.selectedIndex == 1 && to.selectedIndex == 2 && (getTextboxValue.value).length > 0) {
        getResultSpan.innerHTML = ((parseInt(getTextboxValue.value) - 32) * 5 / 9) + 273.15;
    }
    if (from.selectedIndex == 2 && to.selectedIndex == 0 && (getTextboxValue.value).length > 0) {
        getResultSpan.innerHTML = parseInt(getTextboxValue.value) - 273.15;
    }
    if (from.selectedIndex == 2 && to.selectedIndex == 1 && (getTextboxValue.value).length > 0) {
        getResultSpan.innerHTML = ((parseInt(getTextboxValue.value) - 273.15) * 9 / 5) + 32;
    }
    if (from.selectedIndex == 2 && to.selectedIndex == 2 && (getTextboxValue.value).length > 0) {
        getResultSpan.innerHTML = parseInt(getTextboxValue.value);
    }
    if ((getTextboxValue.value).length == 0)
        getResultSpan.innerHTML = "";

}

setInterval(convert, 100);