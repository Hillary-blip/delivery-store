import { FC, useEffect, useState } from "react";
import { useCart } from "../../Context/Cart";
import Animation from "../AnimationPrice/AnimationPrice";
import './CartProduct.css';
import { useNavigate } from "react-router-dom";

const CartProduct: FC = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    const { cart, totalCount, totalPrice, increaseItemQuantity, desrememtionItemQuantity, ClearCart, updatedCart } = useCart();

    const [animatedTotal, setAnimatedTotal] = useState(totalPrice);
    useEffect(() => {
        const duration = 500; // Длительность анимации в миллисекундах
        const stepTime = 10; // Шаг анимацyии

        // Вычисляем разницу
        const difference = totalPrice - animatedTotal;
    /*8*/    const step = difference / (duration / stepTime);

        console.log(step)

        const interval = setInterval(() => {
            setAnimatedTotal((prev) => {
                const newTotal = prev + step;
                // Проверяем, достигли ли мы нужного значения, чтобы остановить анимацию
                if ((step > 0 && newTotal >= totalPrice) || (step < 0 && newTotal <= totalPrice)) {
                    clearInterval(interval);
                    return totalPrice; // Устанавливаем точное значение в конце
                }
                return newTotal;
            });
        }, stepTime);

        return () => clearInterval(interval);
    }, [totalPrice]);

    return (
        <div className="cart-container">

            {cart.length === 0 ? (
                <div className="cart-null">
                    <img src="Images/cart-null.svg" alt="" />
                    <p className="empty-cart">Ваша корзина пуста</p>
                    <button className="back-btn" onClick={goBack} >  Вернуться назад</button>
                </div>
            ) : (

                <div className="cart-items">
                    <div className="trash-cart">
                        <h2 className="cart-title">Корзина</h2>
                        <button className="clear-cart" onClick={() => ClearCart(cart)}>
                            <img src="/Images/trash-cart.svg" alt="" />
                        </button>
                    </div>
                    {cart.map((cartItem) => (
                        <div className="cart-item" key={cartItem.id}>
                            <div className="cart-item__image">
                                <img src={cartItem.image} alt={cartItem.name} />
                            </div>
                            <div className="cart-item__details">
                                <h3 className="cart-item__name">{cartItem.name}</h3>
                                <p className="cart-item__description">{cartItem.description}</p>
                                <div className="total-rpice__product">
                                    <div className="increaseItemQuantity">
                                        <button className="quantity-btn" onClick={() => desrememtionItemQuantity(cartItem.id)}>-</button>
                                        <span className="quantity-value">{cartItem.quantity}</span>
                                        <button className="quantity-btn" onClick={() => increaseItemQuantity(cartItem.id)}>+</button>
                                    </div>
                                    {/* <div className="remove-btn">
                                        <button className="remove-item-btn">✖</button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="cart-item__price-block">
                                <div className="cart-item__quantity-controls">
                                    <p>{cartItem.price * cartItem.quantity} ₽</p>
                                    <div className="remove-btn">
                                        <button className="remove-item-btn" onClick={() => updatedCart(cartItem.id)}>✖</button>
                                    </div>
                                </div>
                            </div>
                            {/* <button className="remove-item-btn">✖</button> */}
                        </div>
                    ))}
                    <div className="info-price">
                        <p className="text-info__price">Сумма заказа <span className="info-price__inner" >{animatedTotal.toFixed(2)}</span></p>
                        <p className="text-info__count">  Количество <span className="info-count__inner"> {totalCount} </span></p>
                    </div>
                    <div className="back-button" onClick={goBack}>
                        <img src="/Images/back.svg" alt="" />
                        <button className="back-btn" >
                            Вернуться назад
                        </button>
                    </div>
                </div>

            )}
            {/* <h3 className="add-to-order">Добавить к заказу?</h3> */}
        </div>
    );
};

export default CartProduct;
