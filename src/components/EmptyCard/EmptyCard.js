import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-self: flex-start;
    margin-bottom: 1rem;

`;
const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const DescContainer = styled(Container)`
    margin-bottom: 5px;
    background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
    width: 144px;
    height: 16px;
    border-radius: 50px;
`;

const Avatar = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
`;

export default function EmptyCard() {
    return (
        <Container>
            <Avatar />
            <Description>
                <DescContainer />
                <DescContainer />
            </Description>
        </Container>
    )
}