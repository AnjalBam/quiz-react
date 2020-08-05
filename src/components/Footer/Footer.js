import React from "react";
import * as styles from './Footer.styles'

const Footer = props => {
    return (
        <styles.FooterWrapper>
            
            <styles.FooterHead>Copyright&copy; 2020</styles.FooterHead>
            <p>Made with <styles.StyledIconFooter className="fas fa-heart" /> by Anjal Bam</p>

        </styles.FooterWrapper>
    )
}
export default Footer