import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bestQualityProductAndService from "../../assets/images/best_quality_product_and_services.png";
import easyOrderingProcess from "../../assets/images/easy_ordering_process.png";
import fastAndEasyToUse from "../../assets/images/fast_and_easy_to_use.png";
import futureOfPizzaDelivery from "../../assets/images/future_of_pizza_delivery.png";
import mainBanner from "../../assets/images/main_banner.png";
import moreChoicesLessHassle from "../../assets/images/more_choices_less_hassle.png";
import orderPizzaLikeThePros from "../../assets/images/order_pizza_like_the_pros.png";
import searchIcon from "../../assets/images/search-icon.svg";
import "./home.scss";
const Home = () => {
    return (
        <div className='home-component'>
            <Search />
            <HeroSection />
            <PizzeriaFor />
            <WeOffer />
        </div>
    );
};
const Search = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const handleSearch = () => {
        console.log("search clicked");
        const searchQuery = query.trim();
        if (searchQuery) {
            navigate(`/order?${searchQuery}`);
        }
    };
    return (
        <div className='search-component'>
            <div className='search-container'>
                <input
                    type='text'
                    name='searchItem'
                    id='searchItem'
                    className='search-item'
                    placeholder='search pizza'
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type='button'
                    className='search-button'
                    title='searchBtn'
                >
                    <img
                        src={searchIcon}
                        alt=''
                        className='search-icon'
                        onClick={handleSearch}
                    />
                </button>
            </div>
        </div>
    );
};
const HeroSection = () => {
    return (
        <main className='hero-section'>
            <div className='main-header'>
                <h1 className='main-heading'>
                    Order pizza from your favorite pizzeria
                </h1>
                <p className='main-description'>
                    Pizza delivery is just a click away. Build your own from
                    scratch, customize with our signature sauces and toppings,
                    then order it with just one click!
                </p>
            </div>
            <div className='main-banner'>
                <img
                    src={mainBanner}
                    alt='main banner'
                    className='main-banner-img'
                />
            </div>
        </main>
    );
};

const PizzeriaFor = () => {
    return (
        <div className='pizzeria-for-section'>
            <h2 className='section-heading'>Pizzeria For...</h2>
            <div className='fast-n-easy'>
                <div className='content'>
                    <h3>Fast & easy to use</h3>
                    <p>
                        We make it easy to order pizza online. Choose from your
                        favorite pizzeria, customize your order, then have it
                        delivered right at your door!
                    </p>
                </div>
                <div className='image'>
                    <img
                        src={fastAndEasyToUse}
                        alt='fast and easy to use'
                        className='feature-image'
                    />
                </div>
            </div>
            <div className='order-like-pro'>
                <div className='content'>
                    <h3>Order pizza like the pros</h3>
                    <p>
                        Customize the crust, sauce and toppings you want on your
                        pizza. If you're feeling like a pro, use our app that
                        lets you place an order without ever having to leave
                        home.
                    </p>
                </div>
                <div className='image'>
                    <img
                        src={orderPizzaLikeThePros}
                        alt='order like a pro'
                        className='feature-image'
                    />
                </div>
            </div>
            <div className='pizza-delivery-future'>
                <div className='content'>
                    <h3>The future of pizza delivery</h3>
                    <p>
                        Ordering pizza has never been easier - or faster. In as
                        little as 30 minutes, you can have a piping hot pizza
                        delivered right to your door!
                    </p>
                </div>
                <div className='image'>
                    <img
                        src={futureOfPizzaDelivery}
                        alt='future of pizza delivery'
                        className='feature-image'
                    />
                </div>
            </div>
        </div>
    );
};
const WeOffer = () => {
    return (
        <div className='we-offer-section'>
            <h2 className='section-heading'>We Offer...</h2>
            <div className='we-offer-container'>
                <div className='more-choice'>
                    <img
                        src={moreChoicesLessHassle}
                        alt='more choice less hassle'
                        className='image img-responsive'
                    />
                    <div className='content'>
                        <h3 className='heading'>More choices, less hassle</h3>
                        <p className='description'>
                            We offer more than just pizzas to satisfy your
                            hunger. Choose from various crusts, toppings and
                            sauces to create your favorite pizza.
                        </p>
                    </div>
                </div>
                <div className='easy-order'>
                    <img
                        src={easyOrderingProcess}
                        alt='easy ordering process'
                        className='image'
                    />
                    <div className='content'>
                        <h3 className='heading'>Easy ordering process</h3>
                        <p className='description'>
                            Place an order with just a few clicks! We'll provide
                            you with the most convenient ways to pay and manage
                            your orders. And with our tracking system, you'll
                            always know where your food is.
                        </p>
                    </div>
                </div>
                <div className='quality-product'>
                    <img
                        src={bestQualityProductAndService}
                        alt='best quality products and services'
                        className='image'
                    />
                    <div className='content'>
                        <h3 className='heading'>
                            Best quality product and service
                        </h3>
                        <p className='description'>
                            We deliver only the best tasting pizzas that are
                            freshly made-to-order with quality ingredients. All
                            our pizzas are made on site by our expert chefs,
                            ensuring that they're hot and ready when they reach
                            you!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
