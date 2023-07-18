import logo from 'assets/mets-logo.png';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import {
    RootContainer,
    Image,
    PageName,
} from './styles';

const Header = (props) => {
    const {pageName} = props;

    useEffect(() => {
        new Typewriter("#type-effect-container", {
            strings: pageName,
            loop: false,
            cursor: "_",
            autoStart: true
        })
    }, [pageName])

    return(
        <RootContainer>
            <Image src={logo} />
            <PageName id="type-effect-container" ></PageName>
        </RootContainer>
    )
}

export default Header;