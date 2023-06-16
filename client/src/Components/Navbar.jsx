import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/home.css";
import { Logo } from '../assets/images';
import $ from "jquery";
import "jquery-ui-dist/jquery-ui"
function Navbar() {
    useEffect(() => {
        if ($('.menu-trigger').length) {
            $(".menu-trigger").on('click', function () {
                $(this).toggleClass('active');
                $('.header-area .nav').slideToggle(200);
            });
        }
    }, [])
    return (
        <div className='home'>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link to="/" className="logo">
                                    <img src={Logo} alt="Chain App Dev" />
                                </Link>
                                <ul className="nav">
                                    <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                                    <li className="scroll-to-section"><a href="#services">Services</a></li>
                                    <li className="scroll-to-section"><a href="#about">About</a></li>
                                    <li className="scroll-to-section"><a href="#pricing">Pricing</a></li>
                                    <li className="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                                    <li ><div className="gradient-button"><Link id="modal_trigger" to="/dashboard"><i className="fa fa-sign-in-alt"></i> Try for free</Link></div></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar