import styled from 'styled-components';
import Button from "../Button/Button";
import filter from '../../images/filter.svg';
import find from '../../images/search.svg';
import { useContext, memo, useRef } from 'react';
import { MainContext } from '../Pages/Main';




const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F7F7F8;
    border-radius: 1rem;
    padding: 10px;
    margin-bottom: 20px;
`;
const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    flex: 1 auto;
    margin: 0 10px;
`;
const Image = styled.div`
    width: 20px;
    height: 20px;       
    background-image: url(${find});
    background-position: center;
    background-repeat: no-repeat;
    color: lightgrey;
    `;

const placeholder = 'Введите имя, фамилию, никнейм...';
let intervalID;

export default memo(function FilterAppBar() {
    const {setSort, setQuery} = useContext(MainContext);
    const queryRef = useRef(); 

    
    function setDalay() {
        clearInterval(intervalID);
        intervalID = setInterval(() => setQuery(queryRef.current.value),1000);
    }
    

    return (
        <Container>
            <Image />
            <Input 
            placeholder={placeholder} 
            ref = {queryRef}
            onChange={setDalay}
             />
            <Button 
            bar
            img={filter}
            clickHandler={setSort}
            />
        </Container>
    )
});
