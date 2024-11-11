import Slider from "../component/Slider/Slider";
import Recommendation from "../component/Recommendations/PecommendationsProduct";
import NewProduct from "../component/Recommendations/NewProduct";
import Stock from "../component/Stock/Stock";
import InfoDelivery from "../component/PaymentandDelivery/Delivery";
const LoyutHome = () => {
    return (
        <div className="">
            <Slider />
            <Recommendation />
            <Stock />
            <NewProduct />
            <InfoDelivery />
        </div>
    );
}

export default LoyutHome;