import React from 'react'

import "../carousel-text/text.scss"
import "../../scss/index.scss"

const CarouselText = () => {
    return (
        <div class="main-banner content">
        {/* <div class="social-Icon">
            <a href="#"><img src="/img/Instagram.svg"></a>
            <a href="#"><img src="/img/Facebook.svg"></a>
            <a href="#"><img src="/img/Twitter.svg"></a>
            <a href="#"><img src="/img/WhatsApp.svg"></a>
        </div> */}
        <div class="title">
            <p class="p-OpSan-25">ЧОМУ ПОТРІБНО ДОПОМАГАТИ ІНШИМ ЛЮДЯМ?</p>
        </div>
        <div class="text">
            <p class="p-WS-18">У людей не повинно виникати це питання, оскільки - це нормальне явище,
                почуття жалю до чужої біди є у кожного з нас.Жалость, як і мілосердіе- нормальні людські
                почуття, властиві нормальним людям. Питання в іншому, чому ми боїмося стати добрішими?
            </p>
        </div>
        <div class="banner-button">
            <button class="banner-button need-help" onclick="document.location='takehelppage.html'">Мені потрібна допомога!</button>
        </div>
    </div>
    );
}

export default CarouselText;