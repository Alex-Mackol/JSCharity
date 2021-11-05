import React from 'react'
import "../../scss/index.scss"

const Button = ({classButtonDiv, classButton, label}) =>{
    return(
        <div class={classButtonDiv}>
            <button class={classButton}>
                {label}</button>
        </div>
    );
}

export default Button;