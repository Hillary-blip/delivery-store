import { useState } from "react";
import styles from './recommendations.module.css';
import { Product } from "../../Context/Products";
import { useCart } from "../../Context/Cart";


//  interface ProductSliderProps {
//     products: Array<{ id: number, image: string, name: string, price: number, description: string }>;
//     title: string;
// }

interface ProductSliderProps {
    products: Product[],
    title: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products, title }) => {

    const { cart, addToCart } = useCart()

    const [currentSlide, setCurrentSlide] = useState(0);
    const productsToShow = 3;

    const handleNext = () => {
        setCurrentSlide((prev) =>
            prev + 1 >= products.length - productsToShow + 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setCurrentSlide((prev) =>
            prev - 1 < 0 ? 0 : prev - 1
        );
    };

    return (
        <div className={styles.sliderProduct}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.sliderContainer}>
                <button onClick={handlePrev} className={`${styles.sliderButton} ${styles.left}`} disabled={currentSlide === 0}>
                    <img src="Images/left.svg" alt="Previous" />
                </button>
                <div className={styles.sliderContent}>
                    <div
                        className={styles.sliderTrack}
                        style={{
                            transform: `translateX(-${currentSlide * (100 / productsToShow)}%)`,
                            transition: 'transform 0.5s ease'
                        }}
                    >
                        {products.map((product) => (
                            <div key={product.id} className={styles.sliderItem}>
                                <div className={styles.imgBlock}>
                                    <img className={styles.imgSlide} src={product.image} alt={product.name} />
                                </div>
                                <div className={styles.info}>
                                    <h2 className={styles.productName}>{product.name}</h2>

                                    <p className={styles.description}>{product.description}</p>
                                </div>
                                <div className={styles.addCard}>
                                    <span className={styles.price}>{product.price} ₽</span>
                                    <button className={styles.addcartProduct} >
                                        <img src="/Images/add-cartsvg.svg" alt="добавить в корзину" onClick={() => addToCart({ ...product, quantity: 1 })} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className={`${styles.sliderButton} ${styles.right}`} disabled={currentSlide >= products.length - productsToShow}>
                    <img src="Images/right.svg" alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default ProductSlider;
