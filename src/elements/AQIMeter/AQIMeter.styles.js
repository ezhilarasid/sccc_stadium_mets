import {styled} from "@mui/material/styles";

export const RootContainer = styled("div")`
    width: ${({width = 300}) => width}px;
    height: ${({width = 300}) => (width/2)+((width/2)*0.1)}px;
    overflow: hidden;
    position: relative;
`;

export const NeedleShaft = styled("div")`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: ${({width}) => width*0.17}px;
    height: ${({width}) => width*0.17}px;
    border-radius: ${({width}) => width*0.17}px;
    background-color: #595757;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ShaftLabel = styled("div")`
    font-size: ${({width}) => width*0.06}px;
    line-height: ${({width}) => width*0.06}px;
    font-weight: 700;
    color: #FFF;
`;

export const ShaftValue = styled(ShaftLabel)`
    color: #FFF744;
`;