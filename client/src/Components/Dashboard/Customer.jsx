import React, { useState } from 'react'
import DashboardNavbar from "./dashboardNavbar"
import { Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { team2, team3, team4, team1 } from '../../assets/images';

function Customer() {
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
                            <div class="container-fluid py-4">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card mb-4">
                                            <div class="card-header pb-0">
                                                <h6>Authors table</h6>
                                            </div>
                                            <div class="card-body px-0 pt-0 pb-2">
                                                <div class="table-responsive p-0">
                                                    <table class="table align-items-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                                                                <th class="text-secondary opacity-7"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={team1} class="avatar avatar-sm me-3" alt="user1" />
                                                                        </div>
                                                                        <div class="d-flex flex-column justify-content-center">
                                                                            <h6 class="mb-0 text-sm">John Michael</h6>
                                                                            <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p class="text-xs font-weight-bold mb-0">Manager</p>
                                                                    <p class="text-xs text-secondary mb-0">Organization</p>
                                                                </td>
                                                                <td class="align-middle text-center text-sm">
                                                                    {/* <span class="badge badge-sm bg-gradient-success">Online</span> */}
                                                                </td>
                                                                <td class="align-middle text-center">
                                                                    <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                                </td>
                                                                <td class="align-middle">
                                                                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                        Edit
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={team3} class="avatar avatar-sm me-3" alt="user2" />
                                                                        </div>
                                                                        <div class="d-flex flex-column justify-content-center">
                                                                            <h6 class="mb-0 text-sm">Alexa Liras</h6>
                                                                            <p class="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p class="text-xs font-weight-bold mb-0">Programator</p>
                                                                    <p class="text-xs text-secondary mb-0">Developer</p>
                                                                </td>
                                                                <td class="align-middle text-center text-sm">
                                                                    {/* <span class="badge badge-sm bg-gradient-secondary">Offline</span> */}
                                                                </td>
                                                                <td class="align-middle text-center">
                                                                    <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                                                                </td>
                                                                <td class="align-middle">
                                                                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                        Edit
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={team4} class="avatar avatar-sm me-3" alt="user3" />
                                                                        </div>
                                                                        <div class="d-flex flex-column justify-content-center">
                                                                            <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                                                                            <p class="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p class="text-xs font-weight-bold mb-0">Executive</p>
                                                                    <p class="text-xs text-secondary mb-0">Projects</p>
                                                                </td>
                                                                <td class="align-middle text-center text-sm">
                                                                    {/* <span class="badge badge-sm bg-gradient-success">Online</span> */}
                                                                </td>
                                                                <td class="align-middle text-center">
                                                                    <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                                                                </td>
                                                                <td class="align-middle">
                                                                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                        Edit
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={team3} class="avatar avatar-sm me-3" alt="user4" />
                                                                        </div>
                                                                        <div class="d-flex flex-column justify-content-center">
                                                                            <h6 class="mb-0 text-sm">Michael Levi</h6>
                                                                            <p class="text-xs text-secondary mb-0">michael@creative-tim.com</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p class="text-xs font-weight-bold mb-0">Programator</p>
                                                                    <p class="text-xs text-secondary mb-0">Developer</p>
                                                                </td>
                                                                <td class="align-middle text-center text-sm">
                                                                    {/* <span class="badge badge-sm bg-gradient-success">Online</span> */}
                                                                </td>
                                                                <td class="align-middle text-center">
                                                                    <span class="text-secondary text-xs font-weight-bold">24/12/08</span>
                                                                </td>
                                                                <td class="align-middle">
                                                                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                        Edit
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={team2} class="avatar avatar-sm me-3" alt="user5" />
                                                                        </div>
                                                                        <div class="d-flex flex-column justify-content-center">
                                                                            <h6 class="mb-0 text-sm">Richard Gran</h6>
                                                                            <p class="text-xs text-secondary mb-0">richard@creative-tim.com</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p class="text-xs font-weight-bold mb-0">Manager</p>
                                                                    <p class="text-xs text-secondary mb-0">Executive</p>
                                                                </td>
                                                                <td class="align-middle text-center text-sm">
                                                                    {/* <span class="badge badge-sm bg-gradient-secondary">Offline</span> */}
                                                                </td>
                                                                <td class="align-middle text-center">
                                                                    <span class="text-secondary text-xs font-weight-bold">04/10/21</span>
                                                                </td>
                                                                <td class="align-middle">
                                                                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                        Edit
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={team4} class="avatar avatar-sm me-3" alt="user6" />
                                                                        </div>
                                                                        <div class="d-flex flex-column justify-content-center">
                                                                            <h6 class="mb-0 text-sm">Miriam Eric</h6>
                                                                            <p class="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p class="text-xs font-weight-bold mb-0">Programtor</p>
                                                                    <p class="text-xs text-secondary mb-0">Developer</p>
                                                                </td>
                                                                <td class="align-middle text-center text-sm">
                                                                    {/* <span class="badge badge-sm bg-gradient-secondary">Offline</span> */}
                                                                </td>
                                                                <td class="align-middle text-center">
                                                                    <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                                                                </td>
                                                                <td class="align-middle">
                                                                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                        Edit
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>
            }
        </>
    )
}

export default Customer;