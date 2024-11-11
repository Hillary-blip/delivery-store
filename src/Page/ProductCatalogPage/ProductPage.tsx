import { FC } from "react";
import CatalogProduct from "../../component/CatalogProduct/Catalogproduct";
import { useNavigate } from "react-router-dom";
import Stock from "../../component/Stock/Stock";

interface ProductPageProps {
    category: 'pizza' | 'rolls';
}

const ProductPage: FC<ProductPageProps> = ({ category }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="Product-page">
            <div className="container">
                <CatalogProduct
                    goBack={goBack}
                    category={category}
                />
                <Stock />
            </div>
        </div>
    );
};

export default ProductPage;
