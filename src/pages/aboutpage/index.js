import Tabs from "../../components/tabs-panel/tabs"
import Text from "../../components/text-div"
import "./aboutpage.scss"

const AboutPage = () => {
    return (
        <div className="container">
            <div className="about-content">
                <Text classDiv={"textHeader"}
                    title={"БЛАГОДійний фонд"}
                    titleStyle={"p-PTSan-15 color-grey"}
                    width={"widthText-400"}
                    label={"ХТО, ЯКЩО НЕ МИ"}
                    labelStyle={"p-PTSan-40 color-grey"} />

                <div class="about-back" id="about-back-div"></div>
                <div class="about-navMini">
                    <Tabs />
                </div>
            </div>
        </div>
    );
}
export default AboutPage;