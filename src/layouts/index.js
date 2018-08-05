import React from "react";
import Link from "gatsby-link";
//import "../assets/scss/main.scss";
import "../assets/css/style.css"
import "../assets/css/font-awesome.min.css"

import Header from "../components/Header";
import Footer from "../components/Footer";

import gal11 from '../assets/images/gal1-1.png'
import gal12 from '../assets/images/gal1-2.png'
import gal13 from '../assets/images/gal1-3.png'
import gal14 from '../assets/images/gal1-4.png'
import gal21 from '../assets/images/gal2-1.png'
import gal22 from '../assets/images/gal2-2.png'
import gal23 from '../assets/images/gal2-3.png'
import gal24 from '../assets/images/gal2-4.png'
import gal31 from '../assets/images/gal3-1.png'
import gal32 from '../assets/images/gal3-2.png'
import gal33 from '../assets/images/gal3-3.png'
import gal34 from '../assets/images/gal3-4.png'

import balenciaga from '../assets/images/balenciaga.png'
import alexmacqueen from '../assets/images/alex-macqueen.png'
import givenchy from '../assets/images/givenchy.png'
import gucci from '../assets/images/gucci.png'
import fendi from '../assets/images/fedi.png'
import carolinahererrra from '../assets/images/carolina-hererra.png'
import giorgoarmani from '../assets/images/giorgo-armani.png'
import altuzarra from '../assets/images/altuzarra.png'
import elliesaab from '../assets/images/ellie-saab.png'


class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body ${this.state.loading}`}>
                {/* <Header />
                {children()}
                <Footer /> */}
                <div className = "wrap"> 
                    <div id="slider">
                        
                        <div className="slide waitlist">
                            <div className="slide-content">
                                <div id="pulldown-menu"><hr/></div>
                                <div className="dropdown-menu">
                                    
                                    <ul className="menus-list">
                                        <li><a href="#">Waitlist</a></li>
                                        <li><a href="#">About </a></li>
                                        <li><a href="#">Brands </a></li>
                                        <li><a href="#">Wardrobe </a></li>
                                        <li><a href="#">How </a></li>
                                    </ul>

                                </div>
                                <div id="waitlist-desc">
                                        <span id="waitlist-text">Get Unlimited Premium Designer Workwear at <br/><strong>$239 / month.</strong> Join the waitlist today!</span>
                                        <span id="waitlist-small-text">(Private Customers: Only 50 spots available this month) </span>
                                        <button id="waitlist-email-button"> <span id="waitlist-button-label">Email</span> <span id="waitlist-button-ellipse"> <small> <i className="fa fa-arrow-right"></i> </small></span></button>
                                    </div>
                                <button id="button-down"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>

                        <div className="slide about-page">
                            <div className="slide-content">
                                <div id="pulldown-menu"><hr/></div>
                                <div id="about-desc">
                                    <table className="about-table about-table-main">
                                        <tr>
                                            <td className="about-table about-table-heading">Curated Luxury Workwear. </td>
                                            <td className="about-table about-table-heading">For the Discerning Few. </td> 
                                            <td className="about-table about-table-heading">Highly Personalised Service. </td>
                                        </tr>
                                        <tr>
                                                <td className="about-table about-table-desc">100S of selected premium styles, from boardroom jackets to jewellery and classy outfits.</td>
                                                <td className="about-table about-table-desc">You’ll only find items for more than $500 in our collection. We love high quality premium brands as much as you do. </td>
                                                <td className="about-table about-table-desc">24/7 customer support, on demand <br/>courier services & exclusive <br/>member privileges.</td>
                                        </tr>
                                    </table>
                                </div>
                                <button id="button-down"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>

                        <div className="slide brands-page">
                            <div className="slide-content">
                                    <div id="pulldown-menu"><hr/></div>
                                    <div id="brands-desc">
                                        <span className = "brands-heading">Luxury Brands We Carry</span>
                                        <table className = "brands-table"> 
                                            <tr> 
                                                <td><img src={balenciaga} /> </td>
                                                <td><img src={alexmacqueen} /> </td>
                                                <td><img src={givenchy} /> </td>
                                            </tr>
                                            <tr> 
                                                <td><img src={gucci} /> </td>
                                                <td><img src={fendi} /> </td>
                                                <td><img src={carolinahererrra} /> </td>
                                            </tr>
                                            <tr> 
                                                <td><img src={giorgoarmani} /> </td>
                                                <td><img src={altuzarra} /> </td>
                                                <td><img src={elliesaab} /> </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <button id="button-down"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>

                        <div className="slide how-page"> 
                            <div className="slide-content">
                                <div id="pulldown-menu"><hr/></div>
                                <div className="how-container"> 
                                    <span className ="how-heading"><strong>How does it work?</strong></span>
                                    <table className="how-table"> 
                                        <tr> 
                                            <td className="how-subheader">1.Browse The <br/>Closet of Curated <br/>Designer Wear </td>
                                            <td className="how-subheader">2.Ready For Your <br/>Next 3 Styles? <br/>Swap for New <br/>Outfits Whenever</td>
                                            <td className="how-subheader">3. Easy Shipping <br/>& Professional <br/>Drycleaning </td>
                                        </tr>

                                          <tr> 
                                            <td className="how-text">Select 3 items at a time for $239 / month. <br/> Your order is process and packed <br/> immediately. Our next-day courier <br/> service delivers your order right to your <br/> doorstep at no extra cost! Easy peasy</td>
                                            <td className="how-text">When you feel you want a change of <br/> clothes, pin us on our app and we'll pick <br/>up your current box in return for your <br/> next box instantly. You'll get up to 3 <br/> swaps a month.</td>
                                            <td className="how-text">No germs, please. Each piece is <br/> dry-cleaned professionally so it's <br/>delivered to you sparkling fresh. Quality<br/> checked and assured by our dedicated <br/> QC staff. Leave it with us!</td>
                                        </tr>

                                    </table>
                                </div>
                                <button id="button-down"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>

                        <div className="slide slide1">
                            <div className="slide-content">
                                    <div id="pulldown-menu"><hr/></div>
                                    <div id="rectangle-container">
                                            <span className="rectangle-text">Peek <br/>Inside <br/>The Closet </span>
                                            <button className="button-right"><i className="fa fa-arrow-right"></i></button>
                                    </div>
                                    <button id="button-down"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>

                        <div className="slide slide2">
                            <div className="slide-content">
                                <div id="pulldown-menu"><hr/></div>
                                <button className="button-left"><i className="fa fa-arrow-left"></i></button>
                                <table className="table-gallery">
                                    <tr> 
                                        <td className="table-gallery-set">Boardroom Chic</td>
                                        <td className="table-item"><img src={gal11} alt="seo-name"/></td>  
                                        <td className="table-item"><img src={gal12} alt="seo-name"/></td>
                                        <td className="table-item"><img src={gal13} alt="seo-name"/></td>
                                        <td className="table-item"><img src={gal14} alt="seo-name"/></td>
                                    </tr>

                                    <tr> 
                                        <td className="table-gallery-set">Day-To-Night Dazzle</td>
                                        <td className="table-item"><img src={gal21} alt="seo-name"/></td>  
                                        <td className="table-item"><img src={gal22} alt="seo-name"/></td>
                                        <td className="table-item"><img src={gal23} alt="seo-name"/></td>
                                        <td className="table-item"><img src={gal24} alt="seo-name"/></td>
                                    </tr>
                                        
                                    <tr> 
                                        <td className="table-gallery-set">Weekend Off-Duty Chic</td>
                                        <td className="table-item"><img src={gal31} alt="seo-name"/></td>  
                                        <td className="table-item"><img src={gal32} alt="seo-name"/></td>
                                        <td className="table-item"><img src={gal33} alt="seo-name"/></td>
                                        <td className="table-item"><img src={gal34} alt="seo-name"/></td>
                                    </tr>
                                    
                                </table>
                                <button id="button-down"><i className="fa fa-arrow-down"></i></button>
                            </div>
                        </div>      

                        <div className="slide join-page">
                            <div className="slide-content">
                                    <div id="pulldown-menu"><hr/></div>
                                    <div className="join-container"> 
                                        <span className="join-heading">Be the first to <br/> know when we <br/> launch. Secure <br/> Your Spot Today!</span>
                                        <span className="join-text">Get exclusive access to unlimited <br/> designer clothes at $239/month .</span>
                                        <button className="btn-join-waitlist"> JOIN WAIT LIST </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Template.propTypes = {
    children: React.PropTypes.func
};

export default Template;
