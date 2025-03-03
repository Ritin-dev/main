// WHY-CHOOSE-DUROAIR-SECTION

function animateCounter(className = 'numbercount', duration = 2000) {
    [...document.getElementsByClassName(className)].forEach(element => {
        let target = parseInt(element.textContent) || 0, startTime = null;

        function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = Math.min(((timestamp - startTime) / duration) * target, target);
            element.textContent = Math.floor(progress);
            if (progress < target) requestAnimationFrame(updateCounter);
        }

        requestAnimationFrame(updateCounter);
    });
}

window.onload = () => animateCounter('numbercount', 3000);

// WHY-CHOOSE-DUROAIR-SECTION

$(document).ready(function () {

    $(".tab-slider .nav-link").click(function(){
        $(this).addClass("active");
        $(this).parent().parent().siblings().find(".nav-link").removeClass("active");
    });

    $('.tab-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: '20',
                    slidesToShow: 3,
                    variableWidth: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.specialised-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    // centerPadding: '20',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });



    /* ===== For menu animation === */
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html').toggleClass("open-nav");
        $(".navbar-collapse").toggleClass("show")
    });
    setInterval(() => {
        if ($(window).width() < 992) {
            $('.navbar-nav li a i').off('click.mobileHandler').on('click.mobileHandler', function (e) {
                e.preventDefault();
                var $this = $(this);
                var $dropdown = $this.parent().next('.nav-dropdown');
                $('.nav-dropdown').not($dropdown).slideUp().removeClass('show');
                $('.navbar-nav li a i').not($this).removeClass('toggled');
                if ($dropdown.hasClass('show')) {
                    $dropdown.slideUp().removeClass('show');
                    $this.removeClass('toggled');
                } else {
                    $dropdown.slideDown().addClass('show');
                    $this.addClass('toggled');
                }
            });
        } else {
            $('.navbar-nav li a i').off('click.mobileHandler');
        }
    }, 200);

});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelectorAll('a.button');

    button.forEach(btn => {
        btn.addEventListener('mousemove', function (evt) {
            const movX = evt.clientX - this.getBoundingClientRect().x;
            gsap.to(".button__spotlight", {
                x: movX,
                scale: 30,
                duration: 0.3
            })
        })
        btn.addEventListener('mouseleave', function (evt) {
            const movX = evt.clientX - this.getBoundingClientRect().x;
            gsap.to(".button__spotlight", {
                x: movX,
                scale: 0,
                duration: 0.3
            })
        })
    });
    const currentPath = window.location.pathname;
    const breadcrumbLinks = document.querySelectorAll(".breadcrumb-item a");
    breadcrumbLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            const listItem = link.parentElement;
            listItem.classList.add("active");
            listItem.setAttribute("aria-current", "page");
            link.removeAttribute("href");
        }
    });


    $('.case-study-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.csstdy-nav-slider'
    });
    $('.csstdy-nav-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.case-study-slider',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            { breakpoint: 768, 
                settings: { 
                    slidesToShow: 2,
                    vertical: false,
                    arrows: true
                } 
            },
            { breakpoint: 480,
                 settings: { 
                    slidesToShow: 1,
                    vertical: false,
                    arrows: true 
                } 
            }
        ]
    });
    $('.slnpr-tab-head-wrp ul').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        // infinite: true,
        focusOnSelect: true,
        // variableWidth: true,
        responsive: [
            { breakpoint: 800, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    });
    $('.industry-partner-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        // variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } }
        ]
    });
    $('.workflow-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]
    });

    document.querySelectorAll(".auc-dtl-tab").forEach(tab => tab.style.display = 'none');
    document.querySelectorAll(".auc-dtl-tab").forEach((tab, i) => {
        if (i === 0) {
            tab.style.display = 'block';
        }
    });
    const tabHead = document.querySelectorAll(".slnpr-tab-head-wrp ul li, .faq-tab-head ul li");
    $(".slnpr-tab-item, .faq-inr-item").hide();
    $(".slnpr-tab-item, .faq-inr-item").eq(0).show();
    $(".slnpr-tab-head-wrp ul li:first-child, .faq-tab-head ul li:first-child").addClass("active");
    tabHead.forEach(head => {
        let headContent = head.textContent.split(' ')[0].toLowerCase().replace(/™/g, '');
        const selectorName = '.' + headContent;
        head.setAttribute('data-name', selectorName);
        if(headContent == ".all" || headContent == "all"){
            $(".faq-inr-item").show();
        }
        $(head).click(function() {
            $(".slnpr-tab-head-wrp ul li, .faq-tab-head ul li").removeClass("active");
            $(this).addClass("active");
            $(".slnpr-tab-item, .faq-inr-item").hide();
            
            const targetSelector = $(this).data('name');
            if (targetSelector === '.all') {
                $(".slnpr-tab-item, .faq-inr-item").show();
            } else {
                $(targetSelector + ".slnpr-tab-item, " + targetSelector + ".faq-inr-item").show();
            }
        });
    });

    document.querySelectorAll('.newhedline').forEach(hedline => {
        const heading = hedline.querySelector("h2");
        if (heading) {
          const headingWidth = heading.offsetWidth;
          const secheadWidth = hedline.offsetWidth;
          const lineWidth = secheadWidth - headingWidth;
          hedline.style.setProperty('--before-width', lineWidth / 2 + 23 + "px");
          hedline.style.setProperty('--after-width', lineWidth / 2 + 23 + "px");
        }
      });

    $(".dcapftures-content, .dcap-classification-content, .faq-inr-item-content, .reasonsaccr-body").hide();
    $(".dcapftures-content").first().show().parent().addClass("active");
    $(".faq-inr-item-content").first().show().parent().addClass("active");
    $(".reasonsaccr-body").first().show().parent().addClass("active");
    $(".dcapftures-heading, .faq-inr-item-head , .reasonsaccr-head").on("click", function() {
        let $item = $(this).parent();
        if ($item.hasClass("active")) {
            $item.removeClass("active");
            $(this).next(".dcapftures-content, .faq-inr-item-content, .reasonsaccr-body").slideUp();
            $(this).find(".chevron i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $(this).find(".faq-inr-item-head-icon i").removeClass("fa-minus").addClass("fa-plus");
        } else {
            $item.siblings().removeClass("active").find(".dcapftures-content, .faq-inr-item-content, .reasonsaccr-body").slideUp();
            $item.siblings().find(".chevron i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $item.siblings().find(".faq-inr-item-head-icon i").removeClass("fa-minus").addClass("fa-plus");
            $item.addClass("active");
            $(this).next(".dcapftures-content, .faq-inr-item-content, .reasonsaccr-body").slideDown();
            $(this).find(".chevron i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $(this).find(".faq-inr-item-head-icon i").removeClass("fa-plus").addClass("fa-minus");
        }
    });
    $(".dcapclassification-heading").click(function(){
        $(".dcap-classification-content").slideToggle();
        $(this).parent().toggleClass("active");
        $(".dcapclassification-heading i").toggleClass("fa-plus fa-minus");
    });
    
    if(document.querySelector("[data-fancybox]")){
        Fancybox.bind("[data-fancybox]", {
        });
    };
    $('.dwnld-btn').click(function(e){
        e.preventDefault();
        $('.thank-you-popup').addClass('active');
    });
    $('.close-btn').click(function(){
        $('.thank-you-popup').removeClass('active');
    });

    $('.reasonert-navfor-slider-inr-item').hide().first().show();
    $('.reason-slider-nav-item, .reason-slider-nav-btn ul li').click(function(){
        let $item = $(this);
        let $itemIndex = $item.index();
        $('.reasonert-navfor-slider-inr-item').hide().eq($itemIndex).show();
        $('.reason-slider-nav-item').removeClass('active');
        $item.addClass('active');
        $('.reason-slider-nav-btn ul li').removeClass('active');
        $item.addClass('active');
    });


    gsap.registerPlugin(ScrollTrigger);

    if(document.getElementById("waveFill")){
        function animateWaveFill() {
            const basePercent = parseFloat(document.querySelector(".current-percent").textContent.replace("%", ""));
            const waveEl = document.getElementById("waveFill");
            const textEl = document.getElementById("currentPercent");
            let current = 0;
            const targetFillPx = 28;
            const containerHeight = waveEl.parentElement.offsetHeight;
            const valtoLess = (targetFillPx / containerHeight) * 100;
            const finalPercentage = basePercent - valtoLess;
            const fillInterval = setInterval(() => {
                if (current < finalPercentage) {
                    current++;
                    waveEl.style.height = current + "%";
                    textEl.textContent = Math.round(current + valtoLess) + "%";
                } else {
                    clearInterval(fillInterval);
                }
            }, 30);
        }
        ScrollTrigger.create({
            trigger: ".transmission-sec",
            start: "top 80%",
            once: true,
            onEnter: animateWaveFill
        });
    };
    
    const dotsContainers = document.querySelectorAll('.stage.has-dot');
    function createDot(container) {
        const dot = document.createElement('div');
        dot.classList.add('dot-img');
        const size = 5 + Math.random() * 10;
        const opacity = 0.1 + Math.random() * 0.4;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.opacity = opacity;
        const duration = 3 + Math.random() * 3;
        const containerWidth = container.offsetWidth;
        const randomX = Math.random() * (containerWidth - size);
        dot.style.left = randomX + 'px';
        dot.style.bottom = '-20px';
        container.appendChild(dot);
        dot.style.animation = `floatUp ${duration}s linear forwards`;
        setTimeout(() => {
            dot.remove();
        }, duration * 2000);
    };
    setInterval(() => {
    dotsContainers.forEach(container => {
        createDot(container);
    });
    }, 100);

});