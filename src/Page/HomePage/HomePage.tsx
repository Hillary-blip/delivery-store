import { Outlet } from "react-router-dom";
import Slider from "../../component/Slider/Slider";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

const HomePage = () => {
    return (
        <div className="">
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default HomePage;