document.querySelectorAll('.fade').forEach(fade => {
    fade.classList.remove('fade', 'fadedown', 'fadeup')
})


const pages = ['home', 'skill', 'work', 'review'];

const backgroundTexts = document.querySelectorAll('.background-text')

backgroundTexts.forEach(backgroundText => {
    document.addEventListener('mousemove', event => {
        backgroundText.children[0].style.left = `${-event.clientX + 800}px`
        backgroundText.children[1].style.right = `${-event.clientX + 800}px`
    })
});

// document.getElementById('home').addEventListener('mousemove', event => {
//     backgroundText[0].children[0].style.left = `${-event.clientX + 800}px`
//     backgroundText[0].children[1].style.right = `${-event.clientX + 800}px`
// })

// document.getElementById('skill').addEventListener('mousemove', event => {
//     backgroundText[1].children[0].style.top = `${-event.clientX + 800}px`
//     backgroundText[1].children[1].style.bottom = `${-event.clientX + 800}px`
// })

const homeItems = document.getElementById('home').querySelectorAll('*');

homeItems.forEach((homeItem, homeIndex) => {
    homeItem.classList.add('fadeup');

    setTimeout(() => {
        homeItem.classList.remove('fadeup')
    }, 180 * homeIndex);
});

const typingText = "FRONT-END DEVELOPER";

// setTimeout(() => {

typingIndex = 0

const typing = () => {
    if (typingIndex < typingText.length) {
        document.querySelector('.typing').innerHTML += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typing, 100);
    }
}

setTimeout(typing, 1600);

let pageIndex = 0;
// let nextPageIndex = pageIndex + 1;
// let prevPageIndex = pageIndex - 1;

function nextPage() {
    pageIndex < pages.length - 1 ? pageIndex++ : pageIndex = pages.length - 1
    // console.log(pageIndex);
    document.getElementById(`${pages[pageIndex]}`).scrollIntoView({
        behavior: 'smooth'
    });
    // console.log(pageIndex, pages[pageIndex])

    changeIndicator()
    // switchPage()
}

function prevPage() {
    pageIndex > 0 ? pageIndex-- : pageIndex = 0;
    document.getElementById(`${pages[pageIndex]}`).scrollIntoView({
        behavior: 'smooth'
    });
    // console.log(pageIndex, pages[pageIndex])
    changeIndicator()
    // switchPage()
}


let lastTime = 0

document.addEventListener('wheel', event => {
    // event.preventDefault()

    let currentTime = new Date().getTime()

    // console.log(currentTime - lastTime)

    if (currentTime - lastTime < 1000) {
        // event.preventDefault();
        return
    }

    event.deltaY > 0 | event.deltaX > 0 ? nextPage() : prevPage();

    lastTime = currentTime

    // setTimeout(animateSkillBar, 600)
    // switchPage()
})

document.addEventListener('keydown', event => {
    // event.preventDefault();

    switch (event.code) {
        case 'Space':
            nextPage()
            break;
        case 'ArrowRight':
            event.preventDefault()
            nextPage()
            break;
        case 'ArrowDown':
            nextPage()
            break;
        case 'ArrowLeft':
            event.preventDefault()
            prevPage();
            break;
        case 'ArrowUp':
            prevPage();
            break;
    }

    // event.code == 'ArrowRight' || 'Space' ? nextPage() : null;
    // event.code == 'ArrowLeft' ? prevPage() : null;

    // console.log(event.code);

    // console.log(pageIndex);
})

// }, 500);

const circles = document.querySelectorAll('circle')

circles.forEach((circle, circleIndex) => {
    circle.classList.add('spin');

    setTimeout(() => {
        circle.classList.remove('spin')
    }, 1000 * (circleIndex + 1));
});

const indicatorTitles = document.querySelector('.indicator-title').children;

const changeIndicator = () => {
    // animateShow()

    document.querySelector('.indicator-title').style.transform = `rotate(${-90 * pageIndex}deg)`;

    document.querySelector('.indicator-active').classList.remove('indicator-active');

    indicatorTitles[pageIndex].classList.add('indicator-active');

    circles[1].style.strokeDashoffset = `${190 - 190 * 25 * (pageIndex + 1) / 100}`

    document.querySelector('.next-page').innerHTML = pageIndex < pages.length - 1 ? `<span>${navChildren[pageIndex + 1].innerHTML}</span><i class="fas fa-chevron-circle-right"></i>` : '';
    document.querySelector('.prev-page').innerHTML = pageIndex > 0 ?  `<i class="fas fa-chevron-circle-left"></i><span>${navChildren[pageIndex - 1].innerHTML}</span>` : '';

    setTimeout(animateSkillBar, 600)
    showOnScroll('home', 60);
    showOnScroll('skill', 20);
    showOnScroll('work', 20);
    showOnScroll('review', 60);}

navChildren = document.querySelector('.link').children;

for (let navIndex = 0; navIndex < navChildren.length; navIndex++) {
    const navChild = navChildren[navIndex];

    navChild.addEventListener('click', () => {
        pageIndex = navIndex;
        document.getElementById(pages[navIndex]).scrollIntoView({
            behavior: "smooth"
        })
        changeIndicator()
        // switchPage()
    })

}

// navChildren.map((navChild, navIndex) => {
//     navChild.style.background = 'red'
//     navChild.addEventListener('click', () => {
//         console.log('ok')
//         pages[navIndex].scrollIntoView({behavior: "smooth"})
//     })
// })


const skillBoxes = document.getElementById('skill').children

for (let skillIndex = 0; skillIndex < skillBoxes.length; skillIndex++) {
    const skillBox = skillBoxes[skillIndex];

    skillBox.addEventListener('mousemove', function (event) {
        skillBox.style.transform = `perspective(800px) rotateY(${(event.clientX - skillBox.getBoundingClientRect().left - 100) / 5}deg) rotateX(${ (-event.clientY + skillBox.getBoundingClientRect().top + 85) / 5}deg)`;
    })

    skillBox.addEventListener('mouseleave', function () {
        skillBox.style.transform = `none`;
    })
}

const detailButtons = document.querySelectorAll('.detail');

// let detailIsShow = false;

detailButtons.forEach(detailButton => {
    detailButton.addEventListener('click', showDetail = () => {
        detailButton.parentElement.parentElement.style.overflow = 'visible';
        setTimeout(() => {
            detailButton.parentElement.parentElement.style.borderBottom = 'none';
        detailButton.parentElement.style.marginTop = '150%';
        setTimeout(() => {
            detailButton.parentElement.style.marginTop = '100vh';
            document.getElementById('work').style.marginTop = '-100vh';
            document.getElementById('work').style.overflow = 'visible';
            detailButton.parentElement.parentElement.style.position = 'unset';
            document.querySelector('nav').classList.add('fadedown');
            document.querySelector('footer').classList.add('fadeup');
            document.querySelector('.next-page').classList.add('fade')
            document.querySelector('.prev-page').classList.add('fade')
            detailButton.parentElement.classList.add('wide-info')
            // detailIsShow = true;
            changeIndicator()
        }, 300);
        }, 300);
    })

            // if (detailIsShow == true) {
            //     window.addEventListener('wheel', closeDetail);
            //     window.addEventListener('keyup', closeDetail);
            // }

    const closeDetail = () => {
        document.getElementById('work').style.marginTop = 'inherit';
        detailButton.parentElement.style.marginTop = 'inherit';
        // detailButton.parentElement.style.transform = 'scale(.8)';
        setTimeout(() => {
            // detailButton.parentElement.style.transform = 'none';
            document.querySelector('.next-page').classList.remove('fade')
            document.querySelector('.prev-page').classList.remove('fade')
            document.getElementById('work').style.overflow = 'hidden';
            detailButton.parentElement.parentElement.style.overflow = 'hidden';
            detailButton.parentElement.parentElement.style.position = 'relative';
            detailButton.parentElement.parentElement.style.borderBottom = '2px solid var(--white)';
            document.querySelector('nav').classList.remove('fadedown');
            document.querySelector('footer').classList.remove('fadeup');
            detailButton.parentElement.classList.remove('wide-info')
        }, 200);
        changeIndicator()
        // detailIsShow = false;
    }

    const backButtons = document.querySelectorAll('.back-button');

    backButtons.forEach(backButton => {
        backButton.addEventListener('click', closeDetail)
    });
});

const showOnScroll = (section, timeOut) => {
    const sectionPage = document.getElementById(section);
    const items = sectionPage.querySelectorAll('*');

    items.forEach((item, i) => {
        // document.addEventListener('wheel', () => {
            // switchPage = () => {
            item.classList.add('fadedown');

            setTimeout(() => {
                item.classList.remove('fadedown');
            }, timeOut * (i + 1));
        // })
        // }
    })
}

function animateSkillBar() {
    const frontBar = document.querySelectorAll('.front')
    frontBar.forEach((front, frontIndex) => {
        front.style.transition = 'none';
        front.classList.add('front-animation');

        setTimeout(() => {
            // document.getElementById('skill').addEventListener('mouseenter', () => {
            front.style.transition = '1s'
            front.classList.remove('front-animation')
        }, 80 * (frontIndex + 1));
    })
}

const reviews = {
    username: ['ivanquez',
        'ishareapp',
        'randomdued',
        ' saifmukadam651'
    ],

    star: ['★ 5',
        '★ 5',
        '★ 5',
        '★ 3.3'
    ],

    text: ['Sigit is a great professional. He has a lot of potential and from the first minute he understood what do you want. He was always there to resolve any errors and he deliver the project ahead of schedule. He is very polite and work very hard on the project. Highly recommended. In addition, he has added in a professional and beautiful way animations on the web. I will not hesitate to buy again. ',
        'Wooow really good work, thank you so much. This is my first experience with the freelancer, and I can confirm, the developer know what he does. I receive a perfect HTML template, exactly like the description - Also I receive some more benefits, some animations for element interactions. I can definitely recommend this freelancer.',
        'Did my work very fast and nicely.',
        'Nice Communication. Still learning but have lots of potential to do work.Lots of effort and hard working guy but not PRO.If you have time you can give him project will put is 100% effort in it.',
    ],

    translated: ['Sigitさんは素晴らしいプロフェッショナルです。 彼には多くの性能があり、最初の瞬間から彼は私が望んでいることを理解しました。 彼はエラーを解決するために常にそこにいて、プロジェクトを予定より早く実行しました。 彼はとても礼儀正しく、プロジェクトに一生懸命取り組んでいます。 強くお勧めします。 さらに、ウェブ上のアニメーションをプロフェッショナルで美しい方法で追加しました。 もう一度買うのをためらうことはありません。',
        'すごくいい仕事です、ありがとうございました。 これは私がフリーターに頼んだ最初の経験であり、私は確認できます、開発者はやることを理解できました。 説明とまったく同じように、完璧なHTMLテンプレートをくれました。また、要素の相互作用のためのいくつかのより多くの利点、いくつかのアニメーションもくれました。 私は間違いなくこのフリーランサーをお勧めできます。',
        '私の頼んだことを非常に速く、うまくやってくれました。',
        '素敵なコミュニケーション。 まだ学習していますが、仕事をする性能はたくさんあります。多くの努力と勤勉な人ですが、プロではありません。時間があれば、彼にプロジェクトを提供することができます。'
    ]
}

let reviewIndex = reviews.username.length - 1;

function setNewReview() {
    showOnScroll('review-quote', 50)
    document.getElementById('review-photo').src = `img/profile-reviewer/${reviewIndex}.jpg`;
    document.getElementById('review-name').innerHTML = reviews.username[reviewIndex];
    document.getElementById('review-star').innerHTML = reviews.star[reviewIndex];
    document.getElementById('review-text').innerHTML = reviews.text[reviewIndex];
    document.getElementById('review-quote').children[1].innerHTML = reviews.translated[reviewIndex];

    document.querySelector('.teal') ? document.querySelector('.teal').classList.remove('teal') : null

    setTimeout(() => {
        dots.children[reviewIndex].classList.add('teal')
    }, 1000);
    // setTimeout(() => {
    //     nextReview();
    // }, 23000);
}

function nextReview() {

    setTimeout(() => {
        if (reviewIndex >= reviews.username.length - 1) {
            reviewIndex = 0;
            setNewReview()
        } else {
            reviewIndex++;
            setNewReview()
        }
    }, 300);
}

nextReview();

function prevReview() {

    setTimeout(() => {

        if (reviewIndex <= 0) {
            reviewIndex = reviews.username.length - 1;

            setNewReview()
        } else {
            reviewIndex--;

            setNewReview()
        }
    }, 300);
}

const dots = document.querySelector('.dots')

reviews.username.forEach( () => {
    dot = document.createElement('a');
    dot.classList.add('dot');
    dots.appendChild(dot)
    // dots.children[reviewIndex].classList.add('teal')
})

for (let dotIndex = 0; dotIndex < dots.children.length; dotIndex ++) {
    dots.children[dotIndex].addEventListener('click', () => {
        reviewIndex = dotIndex;
        setNewReview()
    })
}

setInterval( nextReview, 60000);