document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementByName("firstName").value;
    const lastName = document.getElementByName("lastName").value;
    const email = document.getElementByName("email").value;
    const phone = document.getElementByName("phone").value;
    const message = document.getElementByName("message").value;

    if (!firstName || !lastName || !email || !phone || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Form Incomplete',
        text: 'Please fill in all fields.',
      });
      return;
    }

    if (!/^\d+$/.test(phone)) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Phone Number',
        text: 'Phone number must contain only digits.',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting us.',
    });

    document.querySelector("form").reset();
  });
/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
