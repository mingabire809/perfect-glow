import React from "react";
import { Content, Logo, Menu, Wrapper } from "./Header.styles";
import LogoImage from '../../assets/images/LogoPerfectGlow_1.png'

const Header = ()=>{
    return(
        <Wrapper>
            <Content>
        <Logo src={LogoImage}/>
        <Menu>
            <h3>Home</h3>
            <h3>Pages</h3>
            <h3>Shop</h3>
            <h3>Categories</h3>
            <h3>Contact</h3>
        </Menu>
        <div></div>
            </Content>
        </Wrapper>
    )
}

export default Header;