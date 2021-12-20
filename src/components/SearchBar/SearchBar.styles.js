import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;
export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--mediumGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: relative;
        left: 15px;
        top: 14px;
        width: 30px;
    }
    input {
        position: absolute;
        font-size: var(--fontBig);
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);
        border: 0;

        :focus {
            outline: none;
        }
    }
`;
