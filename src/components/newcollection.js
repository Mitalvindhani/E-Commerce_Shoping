import { Link } from 'react-router-dom';
import {NCproducts} from '../assets/AllProducts/AllProducts.js'

const NewCollection = () => {
    return (
        <div>
            <div className='pt-5'>
                <div className='d-flex flex-column align-items-center'>
                    <div>
                        <h1>NEW COLLECTION</h1>
                    </div>
                    <div className='pt-2'>
                        <div className='hr_horizontal'></div>
                    </div>
                </div>
                <div className='container pt-5'>
                    <div className='row'>
                        {NCproducts.map((item, index) => (
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
                <div className='container pt-5'>
                    <div className='row'>
                        {NCproducts.map((item, index) => (
                            <div className='col-6 col-md-3 p-3'>
                                <div className='product_para product_details_hover'>
                                    <a href=''>
                                        <img src={item.product_img} alt='' className='img-fluid' />
                                    </a>
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
            </div>
        </div>
    );
}


export default NewCollection;