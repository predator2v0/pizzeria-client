import ingredientsImg from "../../img/ingredients.jpg";
import "./Home.css";

export default function Ingredients() {
    return (
        <div className="ingredients-container">
            <img className="home-img" src={ingredientsImg} alt="ing logo" />
            <div className="ml-5 ingredients-text">
                <h2 className="text-left">Ingredients</h2>
                <p className="text-left">
                    We're ruthless about goodness. We have no qualms about
                    tearing up a day-old lettuce leaf (straight from the farm),
                    or steaming a baby (carrot). Cut. Cut. Chop. Chop. Steam.
                    Steam. Stir. Stir. While they're still young and fresh
                    -that's our motto. It makes the kitchen a better place
                </p>
            </div>
        </div>
    );
}
