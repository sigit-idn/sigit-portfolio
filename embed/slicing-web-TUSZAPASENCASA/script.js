    window.addEventListener('scroll', function () {
        if (window.innerWidth > 992) {

            let scrollPos = window.scrollY;
            const text1 = document.querySelector('.home-content').querySelector('.text');
            const nike1 = document.querySelector('.home-content').querySelector('.nike-img');
            const bgTop = document.querySelector('.bg-top');
            text1.style.transform = `translateX(-${scrollPos}px)`;
            nike1.style.transform = `translateX(${scrollPos}px)`;
            bgTop.style.transform = `translateY(-${scrollPos}px)`;

            const nike2 = document.querySelector('.nike2-img');
            const text2 = document.querySelector('.about-content').querySelector('.text');

            if (scrollPos <= 600) {
                nike2.style.transform = `translateX(calc(${scrollPos}px - 600px))`
                text2.style.transform = `translateX(calc(600px - ${scrollPos}px))`
            } else if (scrollPos >= 800) {
                nike2.style.transform = `translateX(calc(800px - ${scrollPos}px))`
                text2.style.transform = `translateX(calc(${scrollPos}px - 800px))`
            }

            const galleryItem = document.querySelector('.gallery-items').querySelectorAll('div');

            for (let s = 0; s < galleryItem.length; s++) {
                if (scrollPos >= 1000) {
                    galleryItem[s].classList.add('visible')
                } else {
                    galleryItem[s].classList.remove('visible')
                }
            }

            const bgBottom = document.querySelector('.bg-bottom');

            if (scrollPos <= 2207) {
                bgBottom.style.transform = `translateY(calc(2207px - ${scrollPos}px)`;
            } else {
                bgBottom.style.transform = `translateY(0)`;

            }

            const form = document.querySelector('form');
            const nike3 = document.querySelector('.nike3-img');
            if (scrollPos <= 2200) {

                form.style.transform = `translateX(calc(${scrollPos}px - 2200px))`;
                nike3.style.transform = `translateX(calc(2200px - ${scrollPos}px))`;
            } else {
                form.style.transform = `translateX(0)`;
                nike3.style.transform = `translateX(0)`;
            }

        }
    })

    if (window.innerWidth <= 992) {
        const a = document.querySelector('.links').querySelectorAll('a');

        a[0].href = "#about";
        a[1].href = "#gallery";
        a[2].href = "#contact";
    }