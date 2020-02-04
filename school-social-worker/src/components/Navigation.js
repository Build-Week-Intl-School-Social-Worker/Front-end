import React from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/ghana-make-a-difference.png';


const Navigation = () => {

const NavigationStyles = styled.div`
display: flex;
color: white;
background: #fff;
padding: 0px;
margin: 0px;
`;

const Logo = styled.img`
width: 120px;
justify-content: center;
align-items: center;
`;

const LogoContainer = styled.div`
display: flex;
padding: 10px 80px;
`;

const NavLinks = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
align-items: center;
`;
const Link = styled.div`
padding: 10px;
margin: 10px;
color: #000;
`;



    return (
        <NavigationStyles>
            <LogoContainer>
                <Logo src={LogoImg} />
            </LogoContainer>
            <NavLinks>
                <Link>Account</Link>
                <Link>Sign out</Link>
            </NavLinks>
        </NavigationStyles>
    )
}

export default Navigation;