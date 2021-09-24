/* 
* Author: Gabriel Chávez
* Website: https://gabrielchavez.me
*/
const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '+5492646023766';
$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let name = document.querySelector('#name').value
        let dir = document.querySelector('#dir').value
        let telefono = document.querySelector('#telefono').value
        let pedido = document.querySelector('#pedido').value
        let detalle = document.querySelector('#detalle').value
        let pago = document.querySelector('#pago').value
        let message = 'send?phone=' + phone + '&text=_*RAPA-NUI DELIVERY*_ %0A%0A*Cliente:*%0A' + name + '%0A*Direccion:*%0A' + dir + '%0A*Telefono:*%0A' + telefono + '%0A*Pedido:*%0A' + pedido + '%0A*Detalle:*%0A' + detalle + '%0A*Forma de Pago:*%0A' + pago +  ''
        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 4000);
});