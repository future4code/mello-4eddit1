import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    flex-direction: column;
    align-items: center;
    border: 4px dashed black;
    margin: 15px;
    border-radius: 3px;
    padding: 10px;

    a {
        text-decoration: none;
        color: inherit;
    }

    div {
        margin-top: 30px;
        width: 100%;
        height: 30%;
    }

    span {
        margin-left: 145px;
    }

    svg {
        cursor: pointer;
        margin: 0 10px;
    }
`;

export const Text = styled.p`
    padding: 10px;
    word-break: break-word;
    text-align: center;
    width: 100%;
    height: 80px;
    overflow-y: scroll;
`;
