import { useProducts } from "../../Context/Products";
import ProductSlider from "./ProductSlider";
import styles from './recommendations.module.css';


const Recommendation = () => {
    const { allProducts } = useProducts();
    const { recommended } = allProducts;

    return (
        <div className="recommendation">
            <div className="container">
                <div className={styles.recommendedProducts}>
                    <ProductSlider products={recommended} title="Рекомендуемые товары" />
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
