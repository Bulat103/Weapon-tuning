import { useEffect } from "react";
import { NavLink } from "react-router-dom"
function Header() {

    useEffect(() => {
        let slides = document.querySelectorAll('.slide-single');
        console.log(slides);
        let slider = [];
        for (let i = 0; i < slides.length; i++) {
            slider[i] = slides[i].src;
            slides[i].remove();
        }
        console.log(slider);
        let step = 0;
        let offset = 0;

        function draw() {
            let img = document.createElement('img');
            img.src = slider[step]
            img.classList.add('slide-single')
            img.style.left = offset * 2000 + 'px';
            document.querySelector('#slide').appendChild(img);
            if (step + 1 == slider.length) {
                step = 0;
            }
            else {
                step++
            }
            offset = 1;
        }
        function left() {
            let slides2 = document.querySelectorAll('.slide-single');
            let offset2 = 0;
            for (let i = 0; i < slides2.length; i++) {
                slides2[i].style.left = offset2 * 2000 - 2000 + "px"
                offset2++;
            }
            setTimeout(() => {
                slides2[0].remove();
                draw();
            }, 9500)

        }
        setInterval(() => {
            left();
        }, 10000)


        draw(); draw();
    });



    return (
        <div className="header-container">
            <div id="slide">
                <img src="/img/1.jpg" className="slide-single" alt="" />
                <img src="/img/2.jpg" className="slide-single" alt="" />
                <img src="/img/3.jpg" className="slide-single" alt="" />
                <img src="/img/4.jpg" className="slide-single" alt="" />
            </div>

            <div className="nav-container">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">ShareNote</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink exact className="nav-link" to="/goods">Goods</NavLink></li>
                                <li className="nav-item "><a className="nav-link " href="#services">Services</a></li>
                                <li className="nav-item "><a className="nav-link " href="#about">About</a></li>
                                <li className="nav-item "> <a className="nav-link " href="#footer">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;