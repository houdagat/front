import { Link } from "react-router-dom";
import "./offer.css"

const Offer = ()=>{
    return (
        <div className="offer">
            <div className="offerItem">
                <img
                src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/184699273.jpeg?k=503e088a7d417c30217b5109dda404d2c2050001588cf7a45fca63e3363573de&o="
                alt="img"
                className="offerImg"
                />
                <div className="offerTitle">
                <h4>Escape for a while</h4>
                <h6>Enjoy the freedom of a monthly stay on Booking.com</h6>
                <Link to="/">
                    <button className="butn">Discover Monthly Stays</button>
                    </Link>
                </div>
            </div>

            <div className="offerItem">
                <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/204490944.jpeg?k=f1dbbec42645c0ed1dc25f1e0878ab449b461baf936dcd971ad8c63bf13d0dc6&o="
                alt="img"
                className="offerImg"
                />
                <div className="offerTitle">
                <h4>The great getaway, your way</h4>
                <h6>Save at least 15% on stays worldwide, from relaxing retreats to off-the-grid adventures</h6>
                <Link to="/">
                    <button className="butn">Find Getaway Deals</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Offer ;