import { createGlobalStyle, css } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --mediumGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontVeryBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
}
*{
    box-sizing:border-box;
    font-family: 'Abel' ,sans-sherif;
}
body{
    padding:0;
    margin:0;
    h1{
        font-size:2rem;
        font-weight:600;
        color:var(--white);
    }
    h3{
        font-size:1.1rem;
        font-weight:600;
    }
    p{
        font-size:1rem;
        color:var(--white);
    }
}

`;
