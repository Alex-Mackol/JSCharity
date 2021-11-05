import React from 'react'

import "../text-div/text.scss"
import "../../scss/index.scss"

const CarouselText = (props) => {
    return (
        <div /*class={props.classDiv}*/>
            <div class="title">
                <p class={props.titleStyle}>{props.title}</p>
            </div>
            <div class="text">
                <p class={props.labelStyle}>{props.label}</p>
            </div>
        </div>
    );
}

export default CarouselText;