import './Delivery.css'

const InfoDelivery = () => {
    return (
        <div className="delivery">
            <div className="container">
                <h2 className="delivery__title">Оплата и доставка</h2>
                <div className="delivery__inner">
                    <div className="delivery__block delivery__block--1">
                        <div className="img-block">
                            <img src="Images/delivery1.svg" alt="Доставка 1" />
                        </div>
                        <p className="delivery__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                    <div className="delivery__block delivery__block--2">
                        <div className="img-block">
                            <img src="Images/delivery2.svg" alt="Доставка 2" />
                        </div>
                        <p className="delivery__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                    <div className="delivery__block delivery__block--3">
                        <div className="img-block">
                            <img src="Images/delivery3.svg" alt="Доставка 3" />
                        </div>
                        <p className="delivery__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                    <div className="delivery__block delivery__block--4">
                        <div className="img-block">
                            <img src="Images/delivery4.svg" alt="Доставка 4" />
                        </div>
                        <p className="delivery__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoDelivery;
