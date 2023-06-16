import React, { useState } from 'react'
import DashboardNavbar from "./dashboardNavbar"
import { Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Invoice() {
    AOS.init({
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
    });

    let token = JSON.parse(localStorage.getItem("profile"));
    token = token?.token;
    const [obj, setObj] = useState({
        display: "block",
    })
    function toggleMenu() {
        if (obj.display === "none") {
            setObj({ display: "block" });
        }
        else
            setObj({ display: "none" });
    }



    return (
        <>
            {
                !token ? <>
                    <Navigate replace to="/login" />;
                </> :
                    <div>
                        <DashboardNavbar obj={obj} />


                        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                            {/* <!-- Navbar --> */}
                            <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
                                navbar-scroll="true">
                                <div class="container-fluid py-1 px-3">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                                            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                                        </ol>
                                        <h6 class="font-weight-bolder mb-0">Dashboard</h6>
                                    </nav>
                                    <div class="mobile_navbar_icon navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                                        <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                                        </div>
                                        <ul class="navbar-nav justify-content-end">
                                            <li class="nav-item dropdown pe-2 d-flex align-items-center">
                                                <i class="fa fa-bell cursor-pointer"></i>
                                            </li>
                                            <li onClick={toggleMenu} class="nav-item ps-3 d-xl-none d-flex align-items-center">
                                                <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                                                    <div class="sidenav-toggler-inner">
                                                        <i class="sidenav-toggler-line"></i>
                                                        <i class="sidenav-toggler-line"></i>
                                                        <i class="sidenav-toggler-line"></i>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            {/* <!-- End Navbar --> */}
                        </main>
                    </div>
            }
        </>
    )
}

export default Invoice