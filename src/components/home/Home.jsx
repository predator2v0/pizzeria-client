import Ingredients from "./Ingredients";
import OurStory from "./OurStory";
import OurChefs from "./OurChefs";
import FastDelivery from "./FastDelivery";

export default function Home() {
    return (
        <div className="container">
            <OurStory />
            <Ingredients />
            <OurChefs />
            <FastDelivery />
        </div>
    );
}
