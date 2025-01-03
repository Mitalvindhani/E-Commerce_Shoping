import logo from '../../assets/images/shopping.png';
import '../../style/footer/footer.css';


const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <a class="d-flex flex-row align-items-center text-decoration-none">
                            <img src={logo} alt="" className='img-fluid_logo' />
                            <h2 className="fw-bold text-dark pt-3 ps-3">SHOPPER</h2>
                        </a>
                    </div>
                    <div className='pt-3'>
                        <div className='footer_link'>
                            <div className='text-center'>Company</div>
                            <div className='text-center'>Products</div>
                            <div className='text-center'>Offices</div>
                            <div className='text-center'>About</div>
                            <div className='text-center'>Contact</div>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div className='d-flex flex-wrap gap-5'>
                            <span className='border ps-2 pe-2'>
                                <i class="bi bi-whatsapp fs-3"></i>
                            </span>
                            <span className='border ps-2 pe-2'>
                                <i class="bi bi-pinterest fs-3"></i>
                            </span>
                            <span className='border ps-2 pe-2'>
                                <i class="bi bi-instagram fs-3"></i>
                            </span>
                        </div>
                    </div>
                    <div className='container pt-4'>
                        <div>
                            <div className='footer_hr'></div>
                        </div>
                        <div>
                            <p className='text-center'>Copyright @ 2023 - All Right Reserved.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;