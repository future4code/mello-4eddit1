import styled from 'styled-components';

export const ContainerLogin = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    border: 1px solid black;

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
export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 40px;
    height: 400px;
    width: 400px;
    border: 1px solid black;
    text-align: center;
    align-items: center;

    > input {
        height: 30px;
        width: 250px;
        margin: 15px;
    }

    > button {
        height: 30px;
        width: 200px;
        margin: 5px;
    }
`;
