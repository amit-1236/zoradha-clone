import Logo from './../assets/Picture/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
    height: 68px;
    display: flex;
    align-items: center;
    padding: 0 75px;
    background: #fff;
    border-bottom: 1px solid #ededed;
`;

const Brand = styled(Link)`
    display: inline-flex;
    align-items: center;
    margin-right: auto;
`;

const LogoImage = styled.img`
    width: 120px;
    display: block;
`;

const Navigation = styled.div`
    display: flex;
    align-items: center;
    gap: 44px;
`;

const NavigationLink = styled(Link)`
    color: #555;
    font-size: 15px;
    font-weight: 400;
    line-height: 1;
    text-decoration: none;
    transition: color 150ms ease;

    &:hover,
    &:focus-visible {
        color: #387ed1;
    }
`;

const MenuButton = styled.button`
    width: 20px;
    height: 20px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    margin-left: 1px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    span {
        width: 18px;
        height: 2px;
        display: block;
        background: #333;
    }
`;

function Navbar() {
    return (
        <NavbarContainer>
            <Brand to="/" aria-label="Zoradha home">
                <LogoImage src={Logo} alt="Zoradha" />
            </Brand>
            <Navigation>
                <NavigationLink to="/Signup">Signup</NavigationLink>
                <NavigationLink to="/About">About</NavigationLink>
                <NavigationLink to="/Products">Products</NavigationLink>
                <NavigationLink to="/Pricing">Pricing</NavigationLink>
                <NavigationLink to="/Support">Support</NavigationLink>
                <MenuButton type="button" aria-label="Open menu">
                    <span />
                    <span />
                    <span />
                </MenuButton>
            </Navigation>
        </NavbarContainer>

    );
}

export default Navbar;