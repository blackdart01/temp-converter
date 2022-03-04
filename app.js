
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
    // console.log(from.selectedIndex);
    // console.log(to.selectedIndex);
    // if (from)
    // console.log(indexFrom);
    // console.log(indexTo);
    // if (getTextboxValue.value.length < 1)
    //     getTextboxValue.value = 0;
    if (from.selectedIndex == 0 && to.selectedIndex == 0) {
        // console.log("c to c");
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

}

setInterval(convert, 100);