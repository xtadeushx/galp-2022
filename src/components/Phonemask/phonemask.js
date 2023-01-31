// Npm https://www.npmjs.com/package/imask

const maskElement = document.querySelector('.phone__input');

const maskOptions = {
    mask: '+{38}(000)000-00-00',
};
const mask = IMask(maskElement, maskOptions)