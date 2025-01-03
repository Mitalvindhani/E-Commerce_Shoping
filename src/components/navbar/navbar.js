import { Link } from "react-router-dom";
import logo from '../../assets/images/shopping.png';
import '../../style/navbar/navbar.css';
import { useState } from "react";


const Navbar = () => {

    const [activeIndex, setActiveIndex] = useState('shop');

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand ms-5 d-flex flex-row align-items-center " href="#">
                        <img src={logo} alt="" className='img-fluid_logo' />
                        <span className="logo_title fw-bold">SHOPPER</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="row w-100">
                            <div className="col-12 col-md-9">
                                <div className="d-flex flex-row justify-content-center mt-2">
                                    <div>
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                                            <li class="nav-item">
                                                <Link className={`nav-link fs-6 ${activeIndex === 'shop' ? 'active' : 'text-secondary'}`} onClick={() => setActiveIndex('shop')} aria-current="page" href="#" to="/">Shop</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link className={`nav-link fs-6 ${activeIndex === 'men' ? 'active' : 'text-secondary'}`} onClick={() => setActiveIndex('men')} aria-current="page" href="#" to="/men">Men</Link>
                                            </li>                                            
                                            <li class="nav-item">
                                                <Link className={`nav-link fs-6 ${activeIndex === 'women' ? 'active' : 'text-secondary' }`} onClick={() => setActiveIndex('women')} aria-current="page" href="#" to="/women">Women</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link className={`nav-link fs-6 ${activeIndex === 'kids' ? 'active' : 'text-secondary' }`} onClick={() => setActiveIndex('kids')} aria-current="page" href="#" to="/kids">Kids</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="d-flex flex-row align-items-center gap-3">
                                        <button class="btn btn-outline-secondary rounded-pill ps-5 pe-5 p-2" type="submit">Login</button>
                                        <a class="position-relative text-dark">
                                            <span className="iconcart_size">
                                                <i class="bi bi-cart"></i>
                                            </span>
                                            <span class="position-absolute top-0 start-100 translate-middle_cart badge rounded-pill bg-danger">
                                                0
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;