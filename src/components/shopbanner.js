import '../style/shopbanner.css';
import hand from '../assets/images/hand_icon.png';
import rightimg from '../assets/images/hero_image.png';


const ShopBanner = () => {
    return (
        <div>
            <div className=''>
                <div className='banner_bg'>
                    <div className="row p-5 ">
                        <div className='col-md-7'>
                            <div className='p-5 '>
                                <h3 className='fs-5 fw-bold'>NEW ARRIVALS ONLY</h3>
                                <div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <h2 className='display-1 fw-semibold'>new</h2>
                                        </div>
                                        <div className='col-md-3'>
                                            <img src={hand} alt='' className='img-fluid ms-5 mt-0' />
                                        </div>
                                    </div>
                                    <h2 className='display-1 fw-semibold m-0 p-0 lh-1'>collections <br />for everyone</h2>

                                </div>
                                <div className=''>
                                    <div className='pt-5'>
                                        <a className='btn btn-danger rounded-pill p-3 ps-5 pe-5'>
                                            <span className='ps-4 pe-3'>Latest Collection</span>
                                            <span className='pe-4'><i class="bi bi-arrow-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='float-end'>
                                <img src={rightimg} alt='' className='img-fluid' />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ShopBanner;