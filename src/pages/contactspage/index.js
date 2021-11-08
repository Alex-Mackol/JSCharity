import Text from "../../components/text-div"
import fotoMap from "../../img/map.png"

import "./contactspage.scss"
import "../../scss/index.scss"

const ContactsPage = () => {
    return (
        <div className="container">
            <div className="contact-content">
                <Text classDiv={"textHeader"}
                    title={"БЛАГОДійний фонд"}
                    titleStyle={"p-PTSan-15 color-grey"}
                    width={"widthText-400"}
                    label={"ХТО, ЯКЩО НЕ МИ"}
                    labelStyle={"p-PTSan-40 color-grey"} />

                <div class="contact-map">
                    <div class="contact-map-img">
                        <img src={fotoMap} alt=""></img>
                    </div>
                    <div class="contact-map-text">
                        <p class="p-PTSan-20">наша адреса:</p>
                        <p class="p-PTSan-25">Дніпро, вул. Короленка 8/10</p>
                        <p class="p-PTSan-20">Телефон: </p>
                        <p class="p-PTSan-25">098 187 99 99</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactsPage;