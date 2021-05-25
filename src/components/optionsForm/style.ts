import { DropDownHeaderType } from './type'
import styled from 'styled-components'

export const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",

    // or we can define dynamic ones
    size: props.size || "0em",
}))`
    font-size: 16px;
    letter-spacing: 0px;
    color: #ffffff;
    font-weight: 300;
    font-family: "Helvetica Neue";
    text-align: left;
    
    width: calc(280px - 2em - 8px);
    height: calc(73px - 8px);
    background-color: #9aa0ab;
    border: 4px solid #ffffff;
    outline: 0px;

    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size} 1em;
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #d1d3d8;
        opacity: 1; 
    }
    @media screen and (max-width : 823px){        
        width: calc(100% - 2em - 8px);
        height: 37px;        
        font-size: 10px;
    }
  `;
export const Button = styled.button`
    font-size: 20px;
    color: #ffffff;
    font-family: "Helvetica Neue";
    text-align: center;
    
    width: 280px;
    height: 73px;
    background-color: #79818f;
    border: 4px solid #ffffff;
    outline: 0px;
    cursor: ${props => props.disabled ? "" : "pointer"}; 
    margin: 26px 0px;
    @media screen and (max-width : 823px){        
        width: 100%;
        height: 37px;        
        font-size: 10px;
        margin: 10px 0px;
    }
    
    &:hover {
        color: ${props => props.disabled ? "#ffffff80" : "#474d57"};        
        background-image: ${props => props.disabled ? "none" : "linear-gradient(0deg, #556175 0%, #b5c5d7 100%)"};
    }
`;




export const DropDownContainer = styled("div")`
    height: calc(73px - 8px + 73px + 73px);
    @media screen and (max-width : 823px){  
        height: 100%;        
    }
`;

export const DropDownHeader = styled.div.attrs<DropDownHeaderType>(({ isOpen }) => ({
    // we can define static props
    isOpen: isOpen ?? true,

}))<DropDownHeaderType>`    
    width: calc(280px - 2em - 8px);
    height: calc(73px - 8px);
    font-size: 16px;
    letter-spacing: 0px;
    color: #d1d3d8;
    font-family: "Helvetica Neue";
    text-align: left;
    margin: 1em 0px 0px 0px;
    padding: 0em 1em;
    background-color: ${({isOpen}) => isOpen ? "#b3b8c0" : "#9aa0ab"};
    border: 4px solid #ffffff;
    cursor: pointer;
    outline: 0px;
    align-items: center;
    display: flex;
    @media screen and (max-width : 823px){        
        width: calc(100% - 2em - 8px);
        
        height: 37px;        
        font-size: 10px;
    }
`;



export const DropDownHeaderText = styled("div")`
    display: inline-block;
    flex: 1;
`;

export const DropDownList = styled("ul")`
    margin: 0px;
    padding: 0px;
`;

export const ListOption = styled("li")`
    width: calc(280px - 1em - 4px);
    height: 73px ;
    font-size: 16px;
    color: #79818f;
    font-weight: 500;
    font-family: "Helvetica Neue";
    outline: 0px;
    align-items: center;
    display: flex;

    padding-left: calc(1em + 4px);
    border-bottom: 2px solid #79818f;
    background-color: #ffffff;
    cursor: pointer;
    &:hover {
        color: #474d57;        
    }
    @media screen and (max-width : 823px){        
        width: calc(100% - 1em - 4px);
        
        height: 37px;        
        font-size: 10px;
    }
`;

export const Canvas = styled("div")`
    display: inline-block;
    margin-top: "10px";
    width: 280px;
    flex: 1;
    p {
        color: red;
    }
    
    @media screen and (max-width : 823px){        
        width: 100%;
    }
`;

export const SearchContainer = styled("div")`
    margin-top: 100px;
    margin-bottom: 130px;
    position: relative;
    top: -58px;
    @media screen and (max-width : 823px){   
        margin-bottom: 70px;
        margin-top: 20px;
        top: 0px;
    }
`;

export const SearchInput = styled.input.attrs(props => ({
    // we can define static props
    type: "text",

    // or we can define dynamic ones
    size: props.size || "0em",
}))`
    position: absolute;
    width: calc(280px - 4em - 8px);
    height: 50px;
    background-color: #9aa0ab;
    border: 4px solid #ffffff;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    font-weight: 300;
    font-family: "Helvetica Neue";
    text-align: left;
    outline: 0px;

    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: 0em 3em 0em 1em;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #d1d3d8;
        opacity: 1; 
    }
    @media screen and (max-width : 823px){   
        font-size: 10px;
        padding: 0em 4em 0em 1em;              
        width: calc(100% - 5em - 8px);
        height: 30px; 
    }
  `;

  
export const SearchTitleText = styled("div")`
    position: absolute;
    top: -40px;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 36px;
    color: #ffffff;
    font-weight: bold;
    font-family: "Helvetica Neue";
    text-align: left;
    @media screen and (max-width : 823px){  
        font-size: 10px;
        line-height: 20px;     
        top: -20px; 
    }
`;