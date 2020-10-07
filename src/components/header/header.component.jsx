import {
    HeaderContainer,
    LogoContainer, OptionsContainer, OptionLink
} from "./header.styles";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import React from 'react'

export const Header = ({}) => (
<HeaderContainer>
    <LogoContainer to='/'>
        <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to='/nestedContext'>NESTED-Example</OptionLink>
        <OptionLink to='/'>CONTACT</OptionLink>
    </OptionsContainer>
</HeaderContainer>
)
