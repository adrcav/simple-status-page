import styled from 'styled-components';

import { animateGradient } from '../../styles/keyframes';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 50px 0;

    &.bg-green {
        background: linear-gradient(135deg, rgba(83,230,139,1) 0%, rgba(102,170,80,1) 100%);
        background-size: 400% 400%;
        animation: ${animateGradient} 30s ease infinite;
    }

    h1 {
        text-align: center;
        color: white;
        margin-bottom: 35px;
        font-weight: 600;
    }

    .main-operational {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute; 
        top: 0;
        left: 0;

        span {
            background-color: #313ee7;
            padding: 10px 35px;
            border-radius: 20px;
            display: block;
            transform: translateY(-50%);
            color: white;
            border: 2px solid #313ee7;
            transition: all .2s ease-in-out;

            &:hover {
                border-color: white;
            }
        }
    }

    .main-container {
        width: 700px;
        height: auto;
        background-color: white;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, .1);
        margin: 0 auto;
        border-radius: 5px;
        padding: 35px 20px 30px;
        position: relative;

        @media (max-width: 768px) {
            width: 90%;
        }

        p.desc {
            color: #888;
            margin: 5px 0 7px;
            text-align: justify;
            line-height: 1.2rem;
        }
    }
`;