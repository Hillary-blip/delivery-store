import { useCart } from '../../Context/Cart';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

    const { totalCount } = useCart()

    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-prev">
                        <div className="cuty">
                            <div className="logo-block">
                                <img src="/Images/logo-header.svg" alt="" />
                            </div>
                            <p className="text-cuty">
                                Доставка пасты
                                <span className="span-cuty">Москва</span>
                            </p>
                        </div>
                        <div className="bell-block">
                            <button className="btn-number">
                                Заказать звонок
                            </button>
                            <p className="number-bell">
                                8 499 391-84-49
                            </p>
                        </div>
                    </div>
                    <nav>
                        <div className="nav-block">
                            <div className="list-block">
                                <ul className="list">
                                    <li className="list-inner">
                                        <NavLink to={'/'}>
                                            Главная
                                        </NavLink>
                                    </li>
                                    <li className="list-inner">
                                        <NavLink to={'product/pizza'}>
                                            Пицца
                                        </NavLink>
                                    </li>
                                    <li className="list-inner">
                                        <NavLink to={'product/rolls'}>
                                            Роллы
                                        </NavLink>
                                    </li>
                                    <li className="list-inner">
                                        Супы
                                    </li>
                                    <li className="list-inner">
                                        Напитки
                                    </li>
                                    <li className="list-inner">
                                        Десерты
                                    </li>
                                    <li className="list-inner">
                                        Закуски
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-to__cart">
                                <Link to={'/cartPage'} className="btn-cart-link">
                                    <div className="btn-cart-inner">
                                        <button className="cart-btn">корзина</button>
                                    </div>
                                    <div className="total-count">
                                        <p>
                                            {totalCount}
                                        </p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </nav>
                </div>
            </div >
        </div >
    );
}

export default Header;