import React, { useState } from 'react'
import DashboardNavbar from "./dashboardNavbar"
import { Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Bruce, Curved } from '../../assets/images';

function Profile() {
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

                            <div class="container-fluid">
                                <div class="page-header min-height-300 border-radius-xl mt-4" style={{ "background-image": `url(${Curved})`, "background-position-y": "50%" }}>
                                    <span class="mask bg-gradient-primary opacity-6"></span>
                                </div>
                                <div class="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
                                    <div class="row gx-4">
                                        <div class="col-auto">
                                            <div class="avatar avatar-xl position-relative">
                                                <img src={Bruce} alt="profile_image" class="w-100 border-radius-lg shadow-sm" />
                                            </div>
                                        </div>
                                        <div class="col-auto my-auto">
                                            <div class="h-100">
                                                <h5 class="mb-1">
                                                    Alec Thompson
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container-fluid py-4">
                                <div class="row">
                                    <div class="col-12 col-xl-4">
                                        <div class="card h-100">
                                            <div class="card-header pb-0 p-3">
                                                <div class="row">
                                                    <div class="col-md-8 d-flex align-items-center">
                                                        <h6 class="mb-0">Profile Information</h6>
                                                    </div>
                                                    <div class="col-md-4 text-end">
                                                        <a href="javascript:;">
                                                            <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body p-3">
                                                <p class="text-sm">
                                                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                                </p>
                                                <hr class="horizontal gray-light my-4" />
                                                <ul class="list-group">
                                                    <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Location:</strong> &nbsp; USA</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <footer class="footer pt-3  ">
                                    <div class="container-fluid">
                                        <div class="row align-items-center justify-content-lg-between">
                                            <div class="col-lg-6 mb-lg-0 mb-4">
                                                <div class="copyright text-center text-sm text-muted text-lg-start">
                                                    © <script>
                                                        document.write(new Date().getFullYear())
                                                    </script>,
                                                    made with <i class="fa fa-heart"></i> by
                                                    <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank"> Saad Khan </a>
                                                    for a better web.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </main>
                    </div>
            }
        </>
    )
}

export default Profile;