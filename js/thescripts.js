const footerWrapperHeight = document.querySelector('#footer-wrapper').clientHeight;
const contentWrapper = document.querySelector('#content-wrapper');

function updateContentWrapper() {
    contentWrapper.style.paddingBottom = footerWrapperHeight + 'px';
}

document.addEventListener('DOMContentLoaded', updateContentWrapper);