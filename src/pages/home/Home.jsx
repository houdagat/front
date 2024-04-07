import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Offer from "../../components/offer/offer";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">

      <div className="covid">
      <FontAwesomeIcon className="ic" icon={faCircleExclamation} style={{color: "#c20f0f",}} />
        <h4 className="covidTitle">Coronavirus (COVID-19) support</h4>
      <p className="covidTitle" >Get the advice you need. Check the latest COVID-19 restrictions before you travel.</p>
      </div>

      <h1 className="homeTitle">Offers</h1>
      <h5 className="homeUnderTitle">Save at least 15% on stays worldwide, from relaxing retreats to off-the-grid adventures</h5>
        <Offer/>
        <h1 className="homeTitle">Explore Tunisia</h1>
        <h5 className="homeUnderTitle">From castles and villas to boats and igloos, we've got it all</h5>
        <Featured/>
        <h1 className="homeTitle">Browse By Property Type</h1>
        <h5 className="homeUnderTitle">From castles and villas to boats and igloos, we've got it all</h5>
        <PropertyList/>

        <h1 className="homeTitle">Homes Guests Love</h1>
        <h5 className="homeUnderTitle">From castles and villas to boats and igloos, we've got it all</h5>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;