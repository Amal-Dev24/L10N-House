function prepareDescripe(descripe) {
    let regex = /L10N House/gmi;
    return descripe.replace(regex, `<span class="fw-medium"><span class="firstColor">L10N</span> <span class="secondColor">House</span></span>`)
};

function openPopup(popupName) {
    $(`.popup[data-popup-name="${popupName}"]`).fadeIn(1000, function () {
        if (popupName == 'languages') {
            $(this).find(".box").addClass('show');
        }
    });
    $("body").css('overflow-y', 'hidden');
}

function closePopup(popupName) {

    let $popup = $(`.popup[data-popup-name="${popupName}"]`);

    if (popupName == 'languages') {
        $popup.find(".box").removeClass('show');
        $popup.delay(500).fadeOut(1000);
    } else {
        $popup.fadeOut(1000);
    }

    $("body").css('overflow-y', '');

}

function preparePoints(points) {
    let lis = ``;

    for (let point of points) {
        lis += `<li class="">${point}</li>`;
    }

    return lis;
}

function prepareSections(sections) {
    let sectionsEle = ``,
        i = 0;

    for (let section of sections) {

        sectionsEle += `
                <section class="${(i != 0) ? 'mt-4' : ''}">
                    <h6>${section.title}</h6>
                    <ol>
                        ${preparePoints(section.points)
            }
                    </ol>
                </section>
        `;
        i++;

    }
    return sectionsEle;
}

function showServices(servicesIndex) {
    let service = services[servicesIndex];

    $(`.popup[data-popup-name="popupServices"] .box .body`).html(`
        <h3 class="mb-5 text-center secondColor">${service.title}</h3>
                <div class="row mb-5">
                    <div class="col-lg-6">
                        <div class="item">
                            <p>
                            ${prepareDescripe(service.description)}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                            <img src="./imagesL10House/${service.img}" class="img-fluid rounded-3" alt="">
                        </div>
                    </div>
                </div>
                ${prepareSections(service.sections)}
                
                
        `)

    openPopup("popupServices");

}

function prepareLanguage(languages) {

    let lis = ``;

    for (let language of languages) {
        lis += `<li class=""><i class="fa-regular fa-circle-dot"></i> ${language}</li>`;
    }

    return lis;

}