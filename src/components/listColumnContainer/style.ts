import { RowType } from './type'
import styled from 'styled-components'

export const Canvas = styled("div")`
    display: flex;
    width: calc(323px - 17px + 8px);
    background-color: #79818f;
    border: 8px solid #ffffff;
    
    @media screen and (max-width : 823px){        
        width: calc(100% - 1em - 4px);
        display: block;
        margin-top: 50px;
    }
`;

export const Horizontal = styled("div")`
    width: 314px;
    @media screen and (max-width : 823px){   
        width: 100%;
    }
`;

export const ColumnHeader = styled("div")`
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 65px;
    color: #ffffff;
    font-weight: 500;
    font-family: "Helvetica Neue";
    text-align: center;
    width: 314px;
    height: 65px;
    background-image: linear-gradient(0deg, #495468 0%, #b8c8db 100%);
    @media screen and (max-width : 823px){  
        font-size: 11px;  
        
        line-height: 35px;
        height: 35px;  
        width: 100%;
    }
`;

export const Row = styled.div.attrs<RowType>(({ isOdd, isHover }) => ({
    // we can define static props
    isOdd: isOdd ?? true,
    isHover: isHover ?? true,
})) <RowType>`   
    font-size: 23px;
    letter-spacing: 1px;
    color: ${({ isOdd, isHover }) => isHover ? "#dc3545" : (isOdd ? "#79818f" : "#ffffff")};
    font-weight: 300;
    font-family: "Helvetica Neue";
    text-align: left;
    background-color: ${({ isOdd }) => isOdd ? "#ffffff" : "#bcc0c7"};
    line-height: 65px;
    width: calc(314px - 2em);
    height: 65px;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    @media screen and (max-width : 823px){  
        font-size: 11px;  
        
        line-height: 35px;
        height: 35px;  
        width: calc(100% - 2em);
    }
`;

export const Divider = styled("div")`
    width: 10px;
    height: 100%;
    background-color: #ffffff;
    @media screen and (max-width : 823px){        
        display: none;
    }
`;

export const RowText = styled("div")`
    flex: 1;
`;

export const RowIcon = styled("div")`
    cursor: pointer;    
    padding: 0px;
    margin: 0px;
    height: 0px;
`;
