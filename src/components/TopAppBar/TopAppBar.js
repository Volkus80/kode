import styled from 'styled-components';
import FilterAppBar from '../FilterAppBar/FilterAppBar';
import Title from '../Title/Title';
import FilterMenu from '../FilterMenu/FilterMenu';



const Container = styled.header`
    margin: 0 auto 30px;
    width: 90%;
    display: flex;
    flex-direction: column;
    

`;



export default function TopAppBar() {
    return (
        <Container>
            <Title text='Поиск' />
            <FilterAppBar />
            <FilterMenu />
        </Container>
        
    )
}

