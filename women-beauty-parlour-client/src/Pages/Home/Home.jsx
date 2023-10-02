/** @format */

import Hero from "./Hero";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Reviews from "./Reviews";
import Contact from "./Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>WP-Home</title>
            </Helmet>
            <Hero />
            <Services />
            <Testimonial />
            <Reviews />
            <Contact />
        </div>
    );
};

export default Home;
