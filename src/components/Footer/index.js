import React from "react";
import { Content, First, Wrapper } from "./Footer.styles";
import Instagram from '../../assets/images/insta.svg'
import Twitter from '../../assets/images/twitter.svg'
import Facebook from '../../assets/images/facebook.svg'
import Linkedin from '../../assets/images/in.svg'
import Logo from '../../assets/images/LogoPerfectGlow.png'
import Payment1 from '../../assets/images/payment1.png'
import Payment2 from '../../assets/images/payment2.png'
import Payment3 from '../../assets/images/payment3.png'
import Payment4 from '../../assets/images/payment4.png'


const Footer = () =>{
    return(
        <Wrapper>
            <Content>
                <First>
                    <div style={{
                        color: 'white'
                    }}>
                        <h4>Find us here:</h4>
                        <div style={{
                             display: 'flex',
                             alignItems: 'center',
                             width: '30%'
                        }}>
                            <img src={Facebook} width='20px' style={{marginRigth: 10}}/>
                            <img src={Twitter} width='20px' style={{marginRigth: 10}}/>
                            <img src={Instagram} width='20px' style={{marginRigth: 10}}/>
                            <img src={Linkedin} width='20px' style={{marginRigth: 10}}/>
                        </div>
                    </div>
                    <img src={Logo} width="200px"/>
                    <div style={{
                        color: 'white'
                    }}>
                        <h4>Payment methods:</h4>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '30%'
                        }}>
                            <img src={Payment1} width='60px' style={{marginRigth: 20}}/>
                            <img src={Payment2} width='60px' style={{marginRigth: 10}}/>
                            <img src={Payment3} width='60px' style={{marginRigth: 10}}/>
                            <img src={Payment4} width='60px' style={{marginRigth: 10}}/>
                        </div>
                    </div>
                </First>
                <hr></hr>
                <First>
                    <div style={{color: 'white'}}>
                        <h1>About</h1>
                        <h3>About us</h3>
                        <h3>Categories</h3>
                        <h3>Shop</h3>
                        <h3>Blog</h3>
                        <h3>FAQ</h3>
                        <h3>Contacts</h3>
                    </div>
                    <div style={{color: 'white'}}>
                        <h1>Categories</h1>
                        <h3>Make up</h3>
                        <h3>SPA</h3>
                        <h3>Perfume</h3>
                        <h3>Nails</h3>
                        <h3>Skin care</h3>
                        <h3>Hair care</h3>
                    </div>
                    <div style={{color: 'white'}}>
                        <h1>Useful Links</h1>
                        <h3>Careers</h3>
                        <h3>Privacy policy</h3>
                        <h3>Terms of use</h3>
                        <h3>Support</h3>
                        <h3>Shipping details</h3>
                        <h3>Information</h3>
                    </div>
                    <div style={{color: 'white', width: '25%'}}>
                        <h1>Contact</h1>
                        <h3>Biashara Street, market mansion Biulding room 202 1st floor Nairobi, Kenya 29984 - 00100</h3>
                        <h3>0742 524123</h3>
                        <h3>perfectglowbeautypoint@gmail.com</h3>
                        
                    </div>
                </First>
            </Content>
        </Wrapper>
    )
}

export default Footer;