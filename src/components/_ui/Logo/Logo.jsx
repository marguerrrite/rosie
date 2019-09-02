import React from "react";
import classNames from 'classnames';
import styled from "@emotion/styled";
import colors from "styles/colors";

const LogoPlate = styled("div")`
    background: ${colors.blue500};
    width: 60px;
    height: 51px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 9px 12px;
`

const LogoType = styled("div")`
    font-size: 18px;
    font-weight: 800;
    color: white;
    text-decoration: none;
    line-height: 1;
`

const Logo = ({className}) => (
    <LogoPlate className={classNames("Logo", className)}>
        <LogoType className="LogoType">
            M
        </LogoType>
    </LogoPlate>
);

export default Logo;