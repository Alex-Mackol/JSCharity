import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, } from '@fortawesome/free-brands-svg-icons';

import "../icons-comp/icon.scss"
import "../../scss/index.scss"

const Icons = () => {
    return (
        <div>
            <ul class="socialIcons">
                <li>
                    <a href="https://www.facebook.com/HYNMDnipro" class="facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
            </ul>

        </div>
    );
}
export default Icons;