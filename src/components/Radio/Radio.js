import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../App/App';
import { MainContext } from '../Pages/Main';

// const Container = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `;

const Label = styled.label`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: #050510;;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;;
    font-weight: 500;
    
`;
const Input = styled.input`
    display: none;
`;
const Span = styled.span`
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    border: solid rgba(101, 52, 255, 1) 2px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    ${Input}:checked + && {
        border-width: 6px;
    }
    
`;

export default function Radio({name, text, checked, value}) {
    const {changeRadio} = useContext(AppContext);
    const {setSort} = useContext(MainContext);

    return (
        <Label>
            <Input 
            type='radio' 
            name={name} 
            checked={checked} 
            value={value}
            onChange={changeRadio}
            onClick={setSort}
            />
            <Span/>
            {text}            
        </Label>
    )
}