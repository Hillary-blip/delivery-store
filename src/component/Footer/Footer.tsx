import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="Images/logo-header.svg" alt="Fibo Logo" />
                    <p>pizza<br />pasta<br />bar</p>
                </div>

                <div className="footer-links">
                    <a href="#">Калорийность и состав</a>
                    <a href="#">Правовая информация</a>
                </div>

                <div className="footer-social">
                    <p>Мы в соцсетях</p>
                    <a href="#">YouTube</a>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">ВКонтакте</a>
                </div>

                <div className="footer-contact">
                    <p>Москва ул. Проспект<br />Вернадского 86В</p>
                    <div className="footer-phone">
                        <span>8 499 391-84-49</span>
                    </div>
                </div>

                <div className="footer-icons">
                    <p>Остались вопросы? А мы всегда на связи:</p>
                    <div className="social-icons">
                        {['viber', 'skype', 'messenger', 'facebook', 'vk', 'telegram'].map((icon, index) => (
                            <a key={index} href="#">
                                <img src={`/images/${icon}.svg`} alt={icon} />
                            </a>
                        ))}
                    </div>
                    <button className="contact-button">Заказать звонок</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>YaBao Все права защищены © 2021</p>
                <div className="payment-icons">
                    {['visa', 'paypal', 'mastercard'].map((payment, index) => (
                        <img key={index} src={`Images/${payment}.svg`} alt={payment} />
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
