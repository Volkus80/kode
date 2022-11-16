import styled from 'styled-components';
import EmptyCard from "../EmptyCard/EmptyCard";

const Container = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
`;

export default function EmptyList() {
    const list = [];
    for (let i = 1; i<=12; i++) {
        list.push(<EmptyCard key={i}/>)
    } 
    return (
        <Container>
            {list}
        </Container>
    )
}


