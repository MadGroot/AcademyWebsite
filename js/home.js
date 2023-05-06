document.addEventListener('DOMContentLoaded', function () {
    function isMoreThen(selector, size = 3) {
        const elements = document.querySelectorAll(selector);

        return elements.length > size;
    }

    function breakPointOptions(selector, perPage = 3) {
        return {
            perPage,
            drag: isMoreThen(selector, perPage)
        }
    }

    try {
        new Splide('.wa-heroes-wrapper', {
            perPage: 4,
            perMove: 1,
            pagination: false,
            drag: false,
            arrows: false,
            fixedWidth: 305,
            breakpoints: {
                1320: {
                    pagination: true,
                    drag: true,
                    perPage: 3,
                },
                1014: {
                    perPage: 2,
                },
                767: {
                    fixedWidth: 256,
                },
                591: {
                    perPage: 1,
                }
            }
        }).mount();
    } catch { }


    try {
        new Splide('.client-logos', {
            type: 'loop',
            autoWidth: true,
            gap: '80px',
            pagination: false,
            drag: false,
            arrows: false,
            autoScroll: {
                autoStart: true,
                pauseOnFocus: false,
                pauseOnHover: false
            },
        }).mount(window.splide.Extensions);
    } catch {

    }

    try {
        new Splide('.wa-invited-lectors-wrapper', {
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: false,
            autoWidth: true,
            breakpoints: {
                991: {
                    gap: '12px',
                    pagination: true,
                    drag: true,
                    perPage: 2,
                },
                767: {
                    perPage: 1,
                }
            }
        }).mount();
    } catch {

    }

    try {
        const popularCourseCardSelector = '.wa-popular-courses-wrapper .wa-popular-course-card';
        new Splide('.wa-popular-courses-wrapper', {
            perPage: 3,
            arrows: false,
            autoWidth: true,
            drag: isMoreThen(popularCourseCardSelector),
            gap: '20px',
            breakpoints: {
                1399: breakPointOptions(popularCourseCardSelector, 2),
                991: breakPointOptions(popularCourseCardSelector, 1)

            }
        }).mount();
    } catch {

    }

    try {
        const blogCardSelector = '.wa-blogs-wrapper .wa-blog-card';
        new Splide('.wa-blogs-wrapper', {
            perPage: 3,
            arrows: false,
            autoWidth: true,
            drag: isMoreThen(blogCardSelector),
            gap: '21px',
            breakpoints: {
                1399: breakPointOptions(blogCardSelector, 2),
                991: breakPointOptions(blogCardSelector, 1),
            }
        }).mount();
    } catch {

    }

    try {
        new Splide('.wa-students-feedback-wrapper', {
            perPage: 1,
            arrows: false,
        }).mount();
    } catch { }

    // nav scroll animation
    let lastScrollTop = 0;
    const navbar = document.querySelector('.wa-navbar');
    const syllabusSidenav = document.querySelector('.wa-buy-course-detail-card')

    document.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!navbar) return

        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-114px'
            if (syllabusSidenav) {
                syllabusSidenav.style.top = '0';
            }
        } else {
            navbar.style.top = '-10px'
            if (syllabusSidenav) {
                syllabusSidenav.style.top = '90px';
            }
        }

        if (scrollTop === 0) navbar.style.top = '0'

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

});

$(document).ready(function () {
    const video = document.querySelector('.wa-video-modal .wa-video');

    const initializeVideo = (e) => {
        const src = e.currentTarget.getAttribute('data-video-src');

        video.src = src;

        video.play();
    }

    $('.play-button-wrapper').on('click', initializeVideo);

    $('.wa-video-modal').on('hidden.bs.modal', function () {
        if (!video.paused) {
            video.pause();
            video.currentTime = 0;
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const child = entry.target.querySelector('.container');
            if (!child) return
            if (entry.isIntersecting) {
                child.classList.add('come-in');
            }
        });
    });

    const observe = document.querySelector('.wa-section');

    observer.observe(observe);
});


$(document).ready(function () {
    const playBtn = document.querySelector('.wa-lector-big-card .play-button-wrapper');

    function handleMouseMove(e) {
        const btnPos = playBtn.getBoundingClientRect();
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const middleX = btnPos.x + btnPos.width / 2;
        const middleY = btnPos.y + btnPos.height / 2;

        const left = (e.pageX - middleX) / 6;
        const top = (e.pageY - scrollTop - middleY) / 6;

        $(playBtn).css({
            'transform': 'translate(' + left + 'px, calc(-50% + ' + top + '%))'
        });
    }

    $('.wa-lector-big-card').on('mousemove', handleMouseMove);
});
