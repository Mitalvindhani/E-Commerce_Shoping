// import '../style/men.css';
import banner_kids from '../assets/images/banner_kids.png';
import {KIDproducts} from '../assets/AllProducts/AllProducts.js'
import { Link } from 'react-router-dom';

const Kids = () => {
    return (
        <div>
            <div className="container">
                <div className='pt-4'>
                    <div className="row">
                        <div>
                            <div>
                                <img src={banner_kids} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='container pt-5'>
                        <div className='row'>
                            {KIDproducts.map((item, index) => (
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

                    <div>
                    <div className='text-center'>
                        <div className='pb-5 pt-5'>
                            <a className='btn rounded-pill p-3 ps-5 pe-5 btn_explore'>
                                <span className='ps-4 pe-3'>Explore More</span>
                            </a>
                        </div>
                    </div>
                </div>

                </div>
                
            </div>
        </div>
    );
}

export default Kids;