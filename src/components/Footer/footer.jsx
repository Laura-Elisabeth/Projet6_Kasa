import Logo from '../../assets/logo_footer.png'
import { HomeLogo } from '../Header/header'
import './footer.scss'

function Footer() {
    return (
        <footer className='footer-container'>
            <HomeLogo src={Logo}/>
            <h2 className='footer-text'><span>&#169;</span> 2020 Kasa. All rights reserved</h2>
        </footer >
    )
}

export default Footer