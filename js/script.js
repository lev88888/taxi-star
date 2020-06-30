window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });
});

// modal

$(document).ready(function () {
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
        $('.modal_close').on('click', function () {
            $('.overlay, #consultation, #thanks').fadeOut('slow');
        });
    });

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
});