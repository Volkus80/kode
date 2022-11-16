import { useContext } from 'react';
import styled from 'styled-components';
import zoomer from '../../images/zoomer.svg';
import itplate from '../../images/itplate.svg';
import Button from '../Button/Button';
import { AppContext } from '../App/App';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 auto;
    align-items: center;
    justify-content: center;
`;

const Image = styled.div`
    width: 56px;
    height: 56px;
    background-image: url(${props => props.err ? itplate : zoomer});
    backgrond-position: center;
    background-repeat: no-repeat;
`;

const Text = styled.p`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    color: #050510;
`;

const TextBelow = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    color: #97979B;
`;

export default function SearchFailed() {
    function clickHandler() {
        window.location.reload();
    }
    const {err} = useContext(AppContext);
    return (
        <Container>
            <Image err={err}/>
            <Text err={err}>{err ? 'Какой-то сверхразум все сломал' : 'Мы никого не нашли'}</Text>
            <TextBelow err={err}>{err ? 'Постараемся быстро починить' : 'Попробуй скорректировать запрос'}</TextBelow>
            <Button  
                type='submit' 
                text='Попробовать снова'
                clickHandler={clickHandler}
                submitBtn />
        </Container>
    )
}