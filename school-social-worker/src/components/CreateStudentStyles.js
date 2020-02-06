import React from 'react';
import  styled  from 'styled-components';

export const CreateStudent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: right;
    align-content: space-around;
    width: 64%;
    margin-bottom: 15%;
    padding: 5%;
    border: 1px solid white;
`

export const FormSection = styled.div  `
    display: flex;
    justify-content: space-evenly;
    align-items: space-between;
    flex-wrap: wrap;
    margin: 4% 0;
    width: 100%;
`

export const FormRow = styled.div `
    display: flex;
    margin: 2% 0;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    flex-wrap: no-wrap;
`

export const FormCol = styled.div `
    diplay: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 50%;

`
