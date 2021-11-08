import React from 'react'

import "../text-div/text.scss"
import "../../scss/index.scss"

const CarouselText = (props) => {
    let width = "text " + props.width;
    return (
        <div class={props.classDiv}>
            <div class="title">
                <p class={props.titleStyle}>{props.title}</p>
            </div>
            <div class={width}>
                <p class={props.labelStyle}>{props.label}</p>
            </div>
        </div>
    );
}

export default CarouselText;