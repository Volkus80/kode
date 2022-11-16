import styled from 'styled-components';
import Radio from '../Radio/Radio';
import Button from '../Button/Button';
import { MainContext } from '../Pages/Main';
import { AppContext } from '../App/App';
import { useContext } from 'react';

const Container = styled.div`
    display: ${props => props.active ? 'flex' : 'none'};
    position: fixed;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: rgba(5, 5, 16, 0.16);
`;

const Unit = styled.div`
    width: 400px;
    height: 200px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`;

const Title = styled.p`
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #050510;
`;

export default function SortSwitcher() {
    const {active, setSort} = useContext(MainContext);
    const {radio} = useContext(AppContext);
    return (
        <Container active={active}>
            <Unit>
                <Title>Сортировка
                    <Button 
                        closeBtn
                        text='&#10006;'
                        clickHandler={setSort}
                        
                    />
                </Title>
                <Radio 
                    value = '1'
                    text = 'По алфавиту'
                    checked = {radio === '1'}
                    name = 'sort'
                />
                <Radio 
                    value = '2'
                    text = 'По дню рождения'
                    checked = {radio === '2'}
                    name = 'sort'
                />
            </Unit>
        </Container>
    )
}
