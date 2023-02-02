function customSelector() {
    let selElement,
    rootDiv,
    selectHideWrapper, 
    selectedItemWrapper;
/* Look for any elements with the class "custom-select": */
const customSelect = document.getElementsByClassName("custom-select");
for (let i = 0; i < customSelect.length; i++) {
    selElement = customSelect[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    rootDiv = document.createElement("DIV");
    rootDiv.setAttribute("class", "select-selected");
    rootDiv.innerHTML = selElement.options[selElement.selectedIndex].innerHTML;
    customSelect[i].appendChild(rootDiv);
    /* For each element, create a new DIV that will contain the option list: */
    selectHideWrapper = document.createElement("DIV");
    selectHideWrapper.setAttribute("class", "select-items select-hide");
    for (let j = 1; j < selElement.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        selectedItemWrapper = document.createElement("DIV");
        selectedItemWrapper.innerHTML = selElement.options[j].innerHTML;
        selectedItemWrapper.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select bo customSelect,
            and the selected item: */
            let sameAsSelected;
            const parentNode = this.parentNode.parentNode.getElementsByTagName("select")[0];
            const previousSibling = this.parentNode.previousSibling;

            for (let i = 0; i < parentNode.length; i++) {
                if (parentNode.options[i].innerHTML == this.innerHTML) {
                    parentNode.selectedIndex = i;
                    previousSibling.innerHTML = this.innerHTML;
                    sameAsSelected = this.parentNode.getElementsByClassName("same-as-selected");
                    for (let k = 0; k < sameAsSelected.length; k++) {
                        sameAsSelected[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            previousSibling.click();
        });
        selectHideWrapper.appendChild(selectedItemWrapper);
    }
    customSelect[i].appendChild(selectHideWrapper);
    rootDiv.addEventListener("click", function (e) {
        /* When the select bocustomSelect is clicked, close any other select bocustomSelectes,
        and open/close the current select bocustomSelect: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select bocustomSelectes in the document,
    ecustomSelectcept the current select bocustomSelect: */
    let arrNo = [];
    const customSelect = document.getElementsByClassName("select-items");
    const selectSelected = document.getElementsByClassName("select-selected");

    for (let i = 0; i < selectSelected.length; i++) {
        if (elmnt == selectSelected[i]) {
            arrNo.push(i)
        } else {
            selectSelected[i].classList.remove("select-arrow-active");
        }
    }
    for (let i = 0; i < customSelect.length; i++) {
        if (arrNo.indexOf(i)) {
            customSelect[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select bocustomSelect,
then close all select bocustomSelectes: */
document.addEventListener("click", closeAllSelect);
}

export default customSelector;
