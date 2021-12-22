import styled from "styled-components";

export const Wrapper = styled.div`
    align-items: center;
    max-width: var(--maxWidth);
    margin: auto;
    padding: 0 20px;
    margin-bottom: 20px;
    /* background-color: #d8d8d8; */

    h1 {
        color: var(--mediumGrey);

        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`;
