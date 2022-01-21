function m1() {
    const burger = document.querySelector(".menu");
    const header = document.querySelector("header");
    burger.addEventListener('click', () =>{
        burger.classList.toggle('burger__active');
        header.classList.toggle('header__active');
    });
};

m1 ();
