const navSlide = () => {
    const menicon = document.querySelector('.menicon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menicon.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');


        //Animate links
        navLinks.forEach((link,index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                console.log(index);
            }
        });

        //Menicon Animation
        menicon.classList.toggle('toggle');
    });

}

navSlide();
