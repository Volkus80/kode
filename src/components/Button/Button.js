import styled, {css} from 'styled-components';
import { useContext } from 'react';
import { MainContext } from '../Pages/Main';
import { AppContext } from '../App/App';

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding: 10px;
    ${props =>
        props.bar && css`
        width: 20px;
        height: 20px;       
        background-image: url(${props => props.img});
        background-position: center;
        background-repeat: no-repeat;
        color: lightgrey;
        &:hover {
            background-color: black;
            mix-blend-mode: exclusion;
        }`
    };
    ${props =>
        props.filterBtn && css`
        color: ${props => props.active ? '#000' : '#97979B'};
        border-bottom: ${props => props.active ? 'solid 2px #6534FF' : 'none'};
        margin-right: 10px;
        &:hover {
            color: black;
            border-bottom: solid 2px #6534FF;
        };
        `};
    ${props =>
        props.closeBtn && css`
        width: 25px;
        height: 25px;
        background-color: #F7F7F8;
        border-radius: 50%;
        color: lightgrey;
        position: absolute;
        right: 20px; 
        font-size: 13px;
        padding:0;
        `};
    ${props =>
        props.backBtn && css`
        width: 20px;
        height: 20px;
        margin: 20px;
        color: #000;
        align-self: flex-start;
        background-image: url(${props => props.img});
        background-position: center;
        background-repeat: no-repeat;
        `};
    ${props =>
        props.submitBtn && css`
        display: ${props => props.err ? 'block' : 'none'};
        color: #6534FF;
        font-weight: 600;
        font-size: 16px;
    `};

    
`;

export default function Button(props) {
    const {param, newParam} = useContext(MainContext);
    const {err} = useContext(AppContext);
    
    function menuHandler() {
        newParam(props.btnParam);
        props.setActive(props.btnParam);
    }

    const clickFunc = props.filterBtn ? menuHandler : props.clickHandler;
    
    return (
        <StyledButton 
        tabIndex = {props.tab}
        bar={props.bar}
        img={props.img}
        filterBtn={props.filterBtn}
        active={props.active}
        param = {param}
        type = {props.type}
        err = {err}
        submitBtn = {props.submitBtn}
        btnParam = {props.btnParam}
        closeBtn = {props.closeBtn}
        backBtn = {props.backBtn}
        onClick = {clickFunc}
        
        > {props.text} </StyledButton>
    )
}