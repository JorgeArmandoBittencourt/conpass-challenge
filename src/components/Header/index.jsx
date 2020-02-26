import React, { memo } from 'react'
import logo from '../../assets/logo.png'
import StyledHeader from './Style'

const Header = () => {
    return (
        <StyledHeader>
            <picture className="logo">
                <img src={logo} alt="Logo" />
            </picture>
            <a className="header-link" href="#">Link fake 1</a>
            <a className="header-link" href="#">Link fake 2</a>
            <a className="header-link" href="#">Link fake 3</a>
        </StyledHeader>
    )
}

export default memo(Header);
