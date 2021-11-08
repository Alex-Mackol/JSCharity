import Carousel from '../../components/carousel'
import Text from "../../components/text-div"
import Button from "../../components/button-help"
import foto_Hand from "../../img/Ellipse_img_hands.svg"

import style from "./mainpage.module.css"
import "../../scss/styledElements.scss"

const MainPage = () => {
    return (
            <div className="container">
                <div className={style.carousel}>
                    <div className={style.textPosit}>
                        <Text title={"ЧОМУ ПОТРІБНО ДОПОМАГАТИ ІНШИМ ЛЮДЯМ?"}
                            titleStyle={"p-OpSan-25"}
                            width={"widthText-500"}
                            label={"У людей не повинно виникати це питання, оскільки - це нормальне явище, почуття жалю до чужої біди є у кожного з нас. Жалость, як і мілосердіе- нормальні людські почуття, властиві нормальним людям. Питання в іншому, чому ми боїмося стати добрішими?"}
                            labelStyle={"p-WS-18 color-white"} />

                        <Button classButtonDiv={"banner-button "}
                            classButton={"banner-button need-help p-WS-18"}
                            label={"Мені потрібна допомога!"} />
                    </div>
                    <Carousel />
                </div>

                <div class={style.mainMission}>
                    <div className={style.picture}>
                        <Text title={"БЛАГОДійний фонд"}
                            titleStyle={"p-PTSan-15 color-grey"}
                            width={"widthText-400"}
                            label={"ХТО, ЯКЩО НЕ МИ"}
                            labelStyle={"p-PTSan-40 color-grey"} />

                        <div className={style.ellipse_img_hands}>
                            <img src={foto_Hand} alt="logo" />
                        </div>
                    </div>

                    <div className={style.picture}>
                        <Text title={"наші приоритети"}
                            titleStyle={"p-PTSan-30 color-blue"}
                            width={"widthText-500"}
                            label={"громадська благодійна організація. Фонд зареєстрований в травні 2021 року, але фактична робота з пенітенціарними установами ведеться з 2020 року. Пріорітети: Особливе піклування і турбота про засуджених жінок та дітей, які перебувають в будинках матері та дитини при жіночих виправних установах, а також про підлітків у виховних колоніях. У сфері уваги знаходяться не тільки засуджені, а й співробітники системи виконання покарань. А так само всім, хто опинився у важкій життєвій ситуації."}
                            labelStyle={"p-PTSan-15"} />

                        <Text title={"наша міссія"}
                            titleStyle={"p-PTSan-30 color-blue"}
                            width={"widthText-500"}
                            label={"це допомагати людям, які опініліся у скрутному становищі."}
                            labelStyle={"p-PTSan-15"} />

                        <Text title={"наші цілі"}
                            titleStyle={"p-PTSan-30 color-blue"}
                            width={"widthText-500"}
                            label={"це допомагати людям, які опініліся у скрутному становищі."}
                            labelStyle={"p-PTSan-15"} />
                    </div>
                </div>
            </div>
    );
}
export default MainPage;