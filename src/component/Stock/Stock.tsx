import './Stock.css'

const Stock = () => {
    return (
        <div className="stock">
            <div className="container">
                <h1 className="stock__title">
                    Наши
                    <span className="stock__highlight">
                        акции
                    </span>
                </h1>
                <div className="stock__inner">
                    <div className="stock__item stock__item--main">
                        <img src="/Images/stock.svg" alt="Основная акция" />
                    </div>
                    <div className="stock__list">
                        <div className="stock__item">
                            <img src="/Images/stock1.svg" alt="Акция 1" />
                        </div>
                        <div className="stock__item">
                            <img src="/Images/stock1.svg" alt="Акция 2" />
                        </div>
                        <div className="stock__item">
                            <img src="/Images/stock1.svg" alt="Акция 3" />
                        </div>
                        <div className="stock__item">
                            <img src="/Images/stock1.svg" alt="Акция 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stock;
