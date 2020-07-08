import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
    DivHeader, DivLogo, DivLogin, ImgLogo
} from './style';
import logo from '../../Global/image.png'

const HeaderLogout = () => {
    const history = useHistory();

    const logout = () => {
        localStorage.clear()
        history.push('/')
    }
      return(
        <DivHeader>
            <div></div>
            <DivLogo onClick={() => history.push('/feed')}>
                <ImgLogo src={logo} />
            </DivLogo>
            <DivLogin onClick={logout}>
                Logout
            </DivLogin>
        </DivHeader>)
}

export default HeaderLogout;