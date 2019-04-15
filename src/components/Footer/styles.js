import styled from 'styled-components';

export const FooterText = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    a {
        display: flex;
        align-items: center;
        color: #999;
        text-decoration: none;
        transition: all .2s ease-in-out;

        &:hover {
            color: #666;
        }
    }
`;