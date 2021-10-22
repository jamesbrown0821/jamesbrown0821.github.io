import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import { Link } from 'react-router-dom';

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: 'Download CV',
        buttonLink: ''
    }
]

const ReviewList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Durant B.',
        description: 'Website was the best investment I ever made. Website is exactly what our business has been lacking. I was amazed at the quality of Website.',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Gavriel C.',
        description: 'Website impressed me on multiple levels.',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Brian N.',
        description: 'Since I invested in Website I made over 100,000 dollars profits. I\'m good to go. The best on the net!',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Ainsile O.',
        description: 'Service was worth a fortune to my company.',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Rey T.',
        description: 'Dude, your stuff is the bomb! Just what I was looking for. Service is the real deal! We\'ve used service for the last five years.',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Xerxes F.',
        description: 'It\'s the perfect solution for our business. Thanks guys, keep up the good work! You guys rock! We\'ve used service for the last five years.',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Christabel R.',
        description: 'Thank you so much for your help. I am completely blown away.',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Arlana Q.',
        description: 'You won\'t regret it.',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'John L.',
        description: 'Your service is the next killer app.',
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--1',
        category: 'My Happy Client',
        image: 'https://lorempixel.com/200/200/',
        title: 'Dalila J.',
        description: 'I can\'t say enough about your service.',
    }
]
const PortfolioLanding = () => {
    let title = 'About Me',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour.';
    const PostList = BlogContent.slice(0 , 3);
    return (
        <div className="active-dark bg_color--9">
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">I’m James Brown <br/>
                                            <TextLoop>
                                                <span> Senior Fullstack Engineer.</span>
                                                <span> Software Developer.</span>
                                                <span> Website Builder.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>based in USA.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn mt--30"><a className="btn-default btn-border btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--8">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/person.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <span className="subtitle">My About Details</span>
                                            <h2 className="title mb--20">{title}</h2>
                                            <p className="description mt_dec--20">{description}</p>
                                        </div>
                                        <div className="row mt--40">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper pb--120 bg_color--8" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30 mb_sm--0">
                                    <span className="subtitle">What I can do for you</span>
                                    <h2 className="title">My Awesome Service</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area pb--120 bg_color--8">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30 mb_sm--0">
                                        <span className="subtitle">My Complete project</span>
                                        <h2 className="title">My Latest Project</h2>
                                        <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="btn-default" href="#portofolio"><span>View Projects</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Slider Area   */}
            <div className="slider-wrapper">
                    <div className="slider-activation slider-startup">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {ReviewList.map((value , index) => (
                                // Start Single Slider 
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.image ? <img className="mx-auto mb-3 rounded-circle" height="100px" width="100px" src={`${value.image}`} /> : ''}
                                                    <span>My Happy Client</span>
                                                    {value.description ? <h4 className="theme-gradient description">{value.description}</h4> : ''}
                                                    {value.title ? <p className="description">{value.title}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-border btn-large btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 // End Single Slider 
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}

            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area pb--120 bg_color--8">
                    <ContactThree contactImages="/assets/images/about/about-13.jpg" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
