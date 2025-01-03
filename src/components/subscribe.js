

const Subscribe = () => {
    return (
        <div>
            <div className="container">
                <div className='banner_bg p-5'>
                    <div className="d-flex flex-column justify-content-center w-100 align-items-center">
                        <h1 className="">Get Exclusive Offers On Your Email</h1>
                        <p className="fs-5 text-secondary">Subscribe to our newletter and stay updated</p>
                        <div className="w-75">
                            <div class="input-group mb-3 position-relative">
                                <input type="text" class="form-control p-3 rounded-pill" placeholder="Your Email id" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-dark rounded-pill ps-5 pe-5 position-absolute p-3 end-0" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;