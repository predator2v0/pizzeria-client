import fastDelivery from "../../img/expressdel.jpg";
import "./Home.css";

export default function FastDelivery() {
    return (
        <div className="fast-delivery-container">
            <img className="home-img" src={fastDelivery} alt="fast delivery" />
            <div className="fast-delivery-text ml-5">
                <h2 className="text-left">45 minutes delivery</h2>
                <p className="text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque alias placeat, exercitationem quasi, autem optio
                    distinctio omnis provident sunt quae veritatis culpa
                    consectetur molestias maxime magnam molestiae, dignissimos
                    aperiam quia?
                </p>
            </div>
        </div>
    );
}
