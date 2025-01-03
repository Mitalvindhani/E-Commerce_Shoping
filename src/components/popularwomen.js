import '../style/popularwomen.css';
import hand from '../assets/images/hand_icon.png';
import exclusiveimg from '../assets/images/exclusive_img.png';
import { Link } from 'react-router-dom';
import {PWproducts} from '../assets/AllProducts/AllProducts.js'




const PopularWomen = () => {
    return (
        <div>
            <div className='pt-5'>
                <div className='d-flex flex-column align-items-center'>
                    <div>
                        <h1>POPULAR IN WOMEN</h1>
                    </div>
                    <div className='pt-2'>
                        <div className='hr_horizontal'></div>
                    </div>
                </div>
                <div className='container pt-5'>
                    <div className='row'>
                        {PWproducts.map((item, index) => (
                            <div className='col-6 col-md-3 p-3'>
                                <div className='product_para product_details_hover'>
                                    <Link to={`/product/${item.id}`}>
                                        <img src={item.product_img} alt='' className='img-fluid' />
                                    </Link>
                                    <p className=''>{item.product_title}</p>
                                    <div className='d-flex flex-row gap-5'>
                                        <div className='price_new'>
                                            <p className=''>{item.new_price}</p>
                                        </div>
                                        <div className='price_old'>
                                            <p>{item.old_price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )}


                    </div>
                </div>

                <div className='container p-5'>
                    <div className='banner_bg'>
                        <div className="row p-5">
                            <div className='col-md-7'>
                                <div className='h-100 d-flex flex-column justify-content-center'>
                                    <div>
                                        <div>
                                            <div className='ps-5'>
                                                <h2 className='fs-1 fw-semibold'>Exclusive <br />Offers For You</h2>
                                                <p className='fs-6 fw-medium'>ONLY ON BEST SELLERS PRODUCTS</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ps-5'>
                                        <div className='pt-3'>
                                            <a className='btn btn-danger rounded-pill p-3 ps-5 pe-5'>
                                                <span className='ps-4 pe-3'>Check Now</span>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='float-end'>
                                    <img src={exclusiveimg} alt='' className='img-fluid' />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularWomen;