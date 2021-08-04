import styled from 'styled-components'

export const Container = styled.ul`
    list-style: none;
    padding: 0px;
    width: 30vw;
    min-width: 300px;
    height: 60vh;
    border: 2px solid brown;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const List = styled.li`
    width: 08vw;
    min-width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 16px;
    padding: 16px;
    border: 2px solid brown;

    button{
        background-color: white;
        color: brown;
        border: 2px solid brown;
        margin-top: 16px;
    }
`