let services = null,
    sectors = null,
    languages = null;

(async function () {
    let res = await fetch("https://semicode.tech/api/v1/l10nhouse/services");

    services = await res.json();

    let i = 0;
    let count = 0;

    for (let service of services) {
        $("#Services .row").append(`
            <div class="col-md-6 wow ${((i + 1) % 2 == 0) ? 'animate__fadeInRight' : 'animate__fadeInLeft'}" data-wow-duration="1.5s"  data-wow-delay="${i * 0.2}s">
                    <div class="item card py-4 rounded-4">
                        <img src="./imagesL10House/${service.icon}" alt="${service.icon}">
                        <h4 class="my-3 text-center">${service.title}</h4>
                        <p class="text-center">
                            ${prepareDescripe(service.description.slice(0, 150))}...
                            <a class="firstColor fw-medium" onclick="showServices(${i})">Read More</a>
                        </p>
                    </div>
                </div>
            `)
        count++;
        i++;
    }

})();

(async function () {
    let res = await fetch("https://semicode.tech/api/v1/l10nhouse/sectors");

    sectors = await res.json();

    let i = 0;
    let count = 0;

    for (let sector of sectors) {
        $(".popup[data-popup-name ='sectors'] .body .row").append(`
           <div class="col-lg-3">
                <div class="item py-2 px-3 rounded-3">
                    <img src="./imagesL10House/sec/${sector.icon}" alt="${sector.icon}" class="img-fluid">
                    <p>${sector.name}</p>
                </div>
            </div>
            `)
        count++;
        i++;
    }

})();

(async function () {
    let res = await fetch("https://semicode.tech/api/v1/l10nhouse/languages");

    languages = await res.json();

    let i = 0;
    let count = 0;

    for (let language of languages) {
        $(".popup[data-popup-name ='languages'] .body").append(`
            <div class="section">
                    <h5>${language.continent}</h5>
                    <span></span>
                    <ul class="list-unstyled">
                        ${prepareLanguage(language.languages)}
                    </ul>
                </div>
            `)
        count++;
        i++;
    }

})();

$(".popup .box").click(function (e) {
    e.stopPropagation();
})

$(window).scroll(function (e) {
    $("nav").toggleClass("scrolled", window.scrollY > 10);

    let $sections = $('header,section[id]');

    $sections.each(function (index, section) {
        let $section = $(section),
            sectionId = $section.attr('id'),
            sectionTop = $section.offset().top,
            sectionBottom = sectionTop + $section.outerHeight(true),
            navHeight = $('nav').outerHeight(true),
            scrollY = window.scrollY + navHeight;

        if (scrollY > sectionTop && scrollY < sectionBottom) {
            $('.nav-link.active').removeClass('active');
            $(`.nav-link[href='#${sectionId}']`).addClass('active');
        }

    })




})

new WOW({
    animateClass: 'animate__animated',
}).init();

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 5,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            350: {
                items: 1
            },
            450: {
                items: 2
            },
            650: {
                items: 2
            },
            850: {
                items: 3
            },
            1050: {
                items: 4
            },
            1250: {
                items: 5
            }
        }

    });
});

$(window).on("load", function () {
    $(".loadingPage").fadeOut(1000, function () {
        $(this).remove();
    });
});