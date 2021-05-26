import styled from 'styled-components'

export const Canvas = styled("div")`
    display: inline-block;
    text-align: left;
`;
export const TextTitle = styled("div")`
    background-color: #79818f;
    color: #ffffff;
    margin-top: 15px;
    font-weight: 300;
    font-family: "Merriweather-Italic";
    text-align: left;
    font-size: 72px;
    @media screen and (max-width : 823px){        
        font-size: 36px;
    }
`;
export const TextDescription = styled("div")`
    width: 552px;
    height: 114px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 23px;
    line-height: 30px;
    color: #8fffee;
    font-family: "Helvetica Neue";
    text-align: left;
    @media screen and (max-width : 823px){        
        font-size: 12px;
        width: 252px;
        height: 80px;
        
        line-height: 20px;  
    }
`;
export const TitleRectangle = styled("div")`
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 55px;
    color: #ffffff;
    font-weight: 500;
    font-family: "Helvetica Neue";
    text-align: center;
    width: 624px;
    height: 55px;
    background-image: linear-gradient(0deg, #818fa1 0%, rgba(153,167,185,0.6) 100%);
    margin-bottom: 15px;
    @media screen and (max-width : 823px){        
        font-size: 12px;
        line-height: 35px;
        height: 35px;
        width: 90vw;
    }
`;
export const ColumnContainer = styled("div")`
    width: 624px;
    display: flex;
    @media screen and (max-width : 823px){        
        width: 90vw;
        display: block;
    }
`;

export const OptionEditorContainer = styled("div")`
    width: 624px;
    @media screen and (max-width : 823px){        
        width: 90vw;
        display: block;
    }
`;
