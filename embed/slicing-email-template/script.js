window.addEventListener('scroll', () => {
    const more = document.querySelector('.more');

    console.log(2 - more.getBoundingClientRect().top / 200)
    console.log(more.getBoundingClientRect().top)

    // more.style.opacity = `${-2}`
    more.style.opacity = `${2 - more.getBoundingClientRect().top / 200}`

})

function showOnScroll(section, timeOut) {
    const item = document.getElementById(section).querySelectorAll('*');

    for (let i = 0; i < item.length; i++) {
        const element = item[i];
        element.classList.add('fade', 'fadedown');
        
        document.addEventListener('scroll', function () {
            if (item[0].getBoundingClientRect().top <= window.innerHeight / 1.2) {
               
                // document.querySelector('.nav-active').classList.remove('nav-active');
        
                // document.getElementById(section).classList.add('nav-active');

                setTimeout(() => {
                    element.classList.remove('fadedown', 'fade');
                }, timeOut * (i + 1));
            }
        })
    }
}

showOnScroll('layanan', 50);
showOnScroll('contact', 100);
