import { useProducts } from "../../Context/Products";
import ProductSlider from "./ProductSlider";
import styles from './recommendations.module.css';


const NewProduct = () => {
    const { allProducts } = useProducts();
    const { newProduct } = allProducts;

    return (
        <div className="recommendation">
            <div className="container">
                <div className={styles.newProducts}>
                    <ProductSlider products={newProduct} title="Новинки" />
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
