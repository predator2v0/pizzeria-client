import ourchef from "../../img/ourchefs.jpg";
import "./Home.css";

export default function OurChefs() {
    return (
        <div className="our-chef-container">
            <div className="our-chef-text mr-5">
                <h2 className="text-left">Our Chefs</h2>
                <p className="text-left">
                    They make sauces sing and salads dance. They create magic
                    with skill, knowledge, passion, and stirring spoons (among
                    other things). They make goodness so good, it doesn't know
                    what to do with itself. We do though. We send it to you.
                </p>
            </div>
            <img className="home-img" src={ourchef} alt="our chefs" />
        </div>
    );
}
