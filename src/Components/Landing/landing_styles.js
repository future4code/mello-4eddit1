import styled from 'styled-components';

export const ContainerLanding = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    border: 1px solid black;
    text-align: center;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 85px;
    height: 300px;
    width: 300px;
    border: 1px solid black;
    text-align: center;
    align-items: center;

    a {
        text-decoration: none;
        color: inherit;

        button {
            height: 30px;
            width: 200px;
            margin: 5px;
        }
    }
`;
