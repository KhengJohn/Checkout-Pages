const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

function changeTab(index) {
    tabButtons.forEach((button, i) => {
        button.classList.remove('active');
        tabPanes[i].classList.remove('active');
    });

    tabButtons[index].classList.add('active');
    tabPanes[index].classList.add('active');
}

// Initially, activate the first tab
changeTab(0);
