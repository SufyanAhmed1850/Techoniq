const splideFunc = () => {
    new Splide(".splide", {
        perPage: 1,
        rewind: true,
        arrows: false,
        pagination: true,
        classes: {
            pagination: "splide__pagination",
            page: "splide__pagination__page",
            active: "is-active",
        },
    }).mount();
};
const sliderContent = (content, element) => {
    let allBtn = element.parentNode.querySelectorAll("p");
    allBtn.forEach((btn) => {
        btn.classList.remove("activeBtn");
    });
    element.classList.add("activeBtn");
    console.log(allBtn);
    let slideParent = document.getElementById("slideParent");
    let slideAllParent = document.getElementById("slideAllParent");
    let splide__list = document.getElementById("splide__list");
    let splide__pagination = document.querySelector(".splide__pagination");
    if (content === "all") {
        slideParent.classList.add("d-none");
        slideAllParent.classList.remove("d-none");
    } else if (content === "apps") {
        splide__list.innerHTML = `<div class="splide__slide">
                        <div class="slide-left">
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                pariatur consectetur
                                natus iusto dignissimos distinctio placeat a ratione necessitatibus. Assumenda
                                obcaecati aspernatur iste aliquid recusandae minima provident molestiae error magni
                                nostrum ipsam debitis, commodi possimus expedita? Rem ipsam labore nobis!</p>
                            <h1>1. Pay App</h1>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Nostrum
                                vitae magni
                                similique error sequi, iusto, ex quibusdam debitis provident accusantium quod
                                recusandae dicta, veritatis nulla aliquam doloremque adipisci quidem at?</p>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                                corrupti
                                explicabo
                                maiores corporis delectus ut magni soluta, recusandae ullam est nulla. Aspernatur,
                                sequi.</p>
                        </div>
                        <div class="slide-right">
                            <img src="./assets/Group 7.png" alt="pay app image">
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="slide-left">
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Nostrum
                                vitae magni
                                similique error sequi, iusto, ex quibusdam debitis provident accusantium quod
                                recusandae dicta, veritatis nulla aliquam doloremque adipisci quidem at?</p>
                            <h1>2. Equalizer App</h1>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                                corrupti
                                explicabo
                                maiores corporis delectus ut magni soluta, recusandae ullam est nulla. Aspernatur,
                                sequi.</p>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                pariatur consectetur
                                natus iusto dignissimos distinctio placeat a ratione necessitatibus. Assumenda
                                obcaecati aspernatur iste aliquid recusandae minima provident molestiae error magni
                                nostrum ipsam debitis, commodi possimus expedita? Rem ipsam labore nobis!</p>
                        </div>
                        <div class="slide-right equalizer-app">
                            <img src="./assets/Group-5.png" alt="pay app image">
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="slide-left">
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Nostrum
                                vitae magni
                                similique error sequi, iusto, ex quibusdam debitis provident accusantium quod
                                recusandae dicta, veritatis nulla aliquam doloremque adipisci quidem at?</p>
                            <h1>3. Recipe App</h1>
                            <p class="justify-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                                quis
                                fuga expedita deserunt? Distinctio ipsum illum quibusdam dolore natus nisi error et
                                quae
                                quod ratione? Quia autem voluptate assumenda error sit perspiciatis dolore corrupti
                                accusamus suscipit.</p>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                                corrupti
                                explicabo
                                maiores corporis delectus ut magni soluta, recusandae ullam est nulla. Aspernatur,
                                sequi.</p>
                        </div>
                        <div class="slide-right equalizer-app">
                            <img src="./assets/Group 29.png" alt="recipe app image">
                        </div>
                    </div>`;
        splideFunc();
        slideAllParent.classList.add("d-none");
        slideParent.classList.remove("d-none");
    } else if (content === "web") {
        splide__list.innerHTML = `<div class="splide__slide">
                        <div class="slide-left">
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                pariatur consectetur
                                natus iusto dignissimos distinctio placeat a ratione necessitatibus. Assumenda
                                obcaecati aspernatur iste aliquid recusandae minima provident molestiae error magni
                                nostrum ipsam debitis, commodi possimus expedita? Rem ipsam labore nobis!</p>
                            <h1>1. Entertainment Web App</h1>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Nostrum
                                vitae magni
                                similique error sequi, iusto, ex quibusdam debitis provident accusantium quod
                                recusandae dicta, veritatis nulla aliquam doloremque adipisci quidem at?</p>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                                corrupti
                                explicabo
                                maiores corporis delectus ut magni soluta, recusandae ullam est nulla. Aspernatur,
                                sequi.</p>
                        </div>
                        <div class="slide-right equalizer-app">
                            <img src="./assets/entertainment.jpg" alt="pay app image">
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="slide-left">
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Nostrum
                                vitae magni
                                similique error sequi, iusto, ex quibusdam debitis provident accusantium quod
                                recusandae dicta, veritatis nulla aliquam doloremque adipisci quidem at?</p>
                            <h1>2. Task Management Web App</h1>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                                corrupti
                                explicabo
                                maiores corporis delectus ut magni soluta, recusandae ullam est nulla. Aspernatur,
                                sequi.</p>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                pariatur consectetur
                                natus iusto dignissimos distinctio placeat a ratione necessitatibus. Assumenda
                                obcaecati aspernatur iste aliquid recusandae minima provident molestiae error magni
                                nostrum ipsam debitis, commodi possimus expedita? Rem ipsam labore nobis!</p>
                        </div>
                        <div class="slide-right equalizer-app">
                            <img src="./assets/taskmanagment.jpg" alt="pay app image">
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="slide-left">
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Nostrum
                                vitae magni
                                similique error sequi, iusto, ex quibusdam debitis provident accusantium quod
                                recusandae dicta, veritatis nulla aliquam doloremque adipisci quidem at?</p>
                            <h1>3. Invoice Web App</h1>
                            <p class="justify-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                                quis
                                fuga expedita deserunt? Distinctio ipsum illum quibusdam dolore natus nisi error et
                                quae
                                quod ratione? Quia autem voluptate assumenda error sit perspiciatis dolore corrupti
                                accusamus suscipit.</p>
                            <p class="justify-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                                corrupti
                                explicabo
                                maiores corporis delectus ut magni soluta, recusandae ullam est nulla. Aspernatur,
                                sequi.</p>
                        </div>
                        <div class="slide-right equalizer-app">
                            <img src="./assets/invoice.jpg" alt="recipe app image">
                        </div>
                    </div>`;
        splideFunc();
        slideAllParent.classList.add("d-none");
        slideParent.classList.remove("d-none");
    }
    splide__pagination.innerHTML = `<li>
                            <button class="splide__pagination__page" type="button" aria-controls="splide01-slide01" aria-label="Go to slide 1"></button>
                        </li>
                        <li>
                            <button class="splide__pagination__page" type="button" aria-controls="splide01-slide02" aria-label="Go to slide 2"></button>
                        </li>
                        <li>
                            <button class="splide__pagination__page" type="button" aria-controls="splide01-slide03" aria-label="Go to slide 3"></button>
                    </li>`;
};
document.addEventListener("DOMContentLoaded", splideFunc());

const showExploreBtn = (imageContainer, event) => {
    let hoverElem = imageContainer.querySelector(".slide-all-hover");
    if (event === "in") {
        hoverElem.classList.remove("d-none");
        gsap.fromTo(
            ".slide-all-hover",
            {
                y: 75,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: "power4.out",
                duration: 1,
            }
        );
    } else {
        gsap.fromTo(
            ".slide-all-hover",
            {
                y: 0,
                opacity: 1,
            },
            {
                y: 75,
                opacity: 0,
                ease: "power4.out",
                duration: 1.25,
                onComplete: function () {
                    hoverElem.classList.add("d-none");
                },
            }
        );
    }
};

function changeBg(element) {
    let allExpertie = element.parentNode.querySelectorAll(".expertie");
    allExpertie.forEach((expertie) => {
        expertie.classList.remove("expertieHoverBg");
    });
    element.classList.add("expertieHoverBg");
}
