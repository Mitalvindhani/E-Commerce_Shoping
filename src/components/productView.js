import React, { useContext } from 'react'
import '../style/productView.css'
import star_icon from "../assets/images/star_icon.png";
import star_dull_icon from "../assets/images/star_dull_icon.png";
import { Link, useParams } from "react-router-dom";
import { PWproducts, NCproducts, MANproducts, WOMENproducts, KIDproducts } from '../assets/AllProducts/AllProducts.js'
import RelatedProduct from './relatedProducts.js';



const ProductView = () => {
    var path = null;
    const { id } = useParams();
    let productDetials;
    if (id.includes("NC")) {
        productDetials = NCproducts.find((prod) => prod.id === id);
        path = (<Link className='text-secondary text-decoration-none' to="/">Shop</Link> > productDetials.product_title)
    }
    else if (id.includes("PW")) {
        productDetials = PWproducts.find((prod) => prod.id === id);
        path = (<Link className='text-secondary text-decoration-none' to="/">Shop</Link> > productDetials.product_title)
    }
    else if (id.includes("M")) {
        productDetials = MANproducts.find((prod) => prod.id === id);
        path = (<><Link className='text-secondary text-decoration-none' to="/">Shop</Link> > <Link className='text-secondary text-decoration-none' to="/men">Men</Link> > {productDetials.product_title}</>)
    }
    else if (id.includes("W")) {
        productDetials = WOMENproducts.find((prod) => prod.id === id);
        path = (<><Link className='text-secondary text-decoration-none' to="/">Shop</Link> > <Link className='text-secondary text-decoration-none' to="/women">Women</Link> > {productDetials.product_title}</>)
    }
    else if (id.includes("K")) {
        productDetials = KIDproducts.find((prod) => prod.id === id);
        path = (<><Link className='text-secondary text-decoration-none' to="/">Shop</Link> > <Link className='text-secondary text-decoration-none' to="/kids">Kids</Link> > {productDetials.product_title}</>)
    }
    else {
        return <h2>Not Found!!!</h2>
    }

    return (
        <>
            <div className='container mt-3'>
                <div className="text-secondary ms-4">{path}</div>
            </div>
            <div className='productdisplay pt-4 pb-5'>
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={productDetials.product_img} alt="" />
                        <img src={productDetials.product_img} alt="" />
                        <img src={productDetials.product_img} alt="" />
                        <img src={productDetials.product_img} alt="" />
                    </div>
                    <div className="productdisplay-img">
                        <img className='productdisplay-main-img' src={productDetials.product_img} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{productDetials.product_title}</h1>
                    <div className="productdisplay-right-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">{productDetials.old_price}</div>
                        <div className="productdisplay-right-price-new">{productDetials.new_price}</div>
                    </div>
                    <div className="productdisplay-right-description">
                        A lightweight, usually knitted, pullover shirt, close-fitting and with
                        a round neckline and short sleeves, worn as an undershirt or outer
                        garment.
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXl</div>
                        </div>
                    </div>
                    <button>ADD TO CART</button>
                    <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
                    <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
                </div>
            </div>

            <div>
                <div className='descriptionbox'>
                    <div className="descriptionbox-navigator">
                        <div className="descriptionbox-nav-box">Description</div>
                        <div className="descriptionbox-nav-box ">Reviews (122)</div>
                    </div>
                    <div className="descriptionbox-description">
                        <p>An e-commerce website is an online platform that facilitates the
                            buying and selling of products or services over the internet. It
                            serves as a virtual marketplace where businesses and individuals can
                            showcase their products, interact with customers, and conduct
                            transactions without the need for a physical presence. E-commerce
                            websites have gained immense popularity due to their convenience,
                            accessibility, and the global reach they offer.</p>
                        <p>
                            E-commerce websites typically display products or services along with
                            detailed descriptions, images, prices, and any available variations
                            (e.g., sizes, colors). Each product usually has its own dedicated page
                            with relevant information.
                        </p>
                    </div>
                </div>
            </div>

            <RelatedProduct />
        </>
    )
}

export default ProductView;