document.addEventListener('DOMContentLoaded', () => {
    updateGradients();
    const elem = document.querySelector('#gradient-toggle');
    elem.addEventListener('click', () => {
        setGradientToggleState(!getGradientToggleState());
        updateGradients();
    });
});

function getGradientToggleState() {
    return localStorage.getItem('gradients') == 'false' ? false : true;
}

function setGradientToggleState(state) {
    localStorage.setItem('gradients', state);
}

function updateGradients() {
    const state = getGradientToggleState();
    const elements = document.querySelectorAll('.hasGradient');
    for(let element of elements) {
        if(state) {
            element.classList.remove('nogradient');
        } else {
            element.classList.add('nogradient');
        }
    }
}