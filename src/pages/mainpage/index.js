import Carousel from '../../components/carousel'
import Text from "../../components/carousel-text"

import "./mainpage.scss"

const MainPage = () => {
    return (
        <div className="container">
            <div className="carousel">
                <Text className="text-posit" />
                <Carousel />
            </div>
        </div>
    );
}
export default MainPage;