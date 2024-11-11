import { FC } from "react";
import { useProducts } from "../../Context/Products";
import { useCart } from "../../Context/Cart";
import './CatalogProduct.css';

export interface CatalogProductProps {
    category: 'pizza' | 'rolls';
    goBack: () => void;
}

const CatalogProduct: FC<CatalogProductProps> = ({ category, goBack }) => {
    const { allProducts } = useProducts();
    const { addToCart } = useCart();

    if (!allProducts) {
        return <div>Loading...</div>;
    }

    const filterProduct = category === "pizza" ? allProducts.pizza : allProducts.rolls;

    return (
        <div className="catalog-product">
            <div className="catalog__product-inner">
                <div className="prev-product">
                    <h1 className="title-product">
                        {category === "pizza" ? "Пицца" : "Роллы"}
                    </h1>
                    <div className="back-button" onClick={goBack}>
                        <img src="/Images/back.svg" alt="" />
                        <button className="back-btn" >
                            Вернуться назад
                        </button>
                    </div>
                </div>
                <div className="product-block">
                    {filterProduct.map((product) => (
                        <div className="product-block__inner" key={product.id}>
                            <div className="product-img">
                                <img className="product-img" src={product.image} alt="товары" />
                            </div>
                            <div className="info-text__block">
                                <h3>{product.name}</h3>
                                <p className="text-inner__product">{product.description}</p>
                            </div>
                            <div className="add-block">
                                <p className="price-product">От {product.price} руб</p>
                                <button
                                    className="add__btn-cart"
                                    onClick={() => addToCart({
                                        ...product,
                                        quantity: 1
                                    })}
                                >
                                    В корзину
                                    {/* <span>{cart.find(cartItem => product.id === cartItem.id)?.quantity || null}</span> */}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogProduct;

