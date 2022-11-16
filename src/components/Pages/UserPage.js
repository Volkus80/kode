import { useParams, useNavigate, Navigate } from "react-router-dom";
import styled from 'styled-components';
import star from '../../images/star.svg';
import phone from '../../images/phone.svg';
import arrow from '../../images/arrow.svg';
import Button from "../Button/Button";


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F7F7F8;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    margin-bottom: 20px;
`;

const Avatar = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

const Name = styled.p`
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #050510;
    text-align: left;
    margin: 0 10px 0 0;
`;

const UserTag = styled.p`
    font-size: 17px;
    color: #97979B;
    font-family: 'Inter', sans-serif;
`;

const Pos = styled(Name)`
    font-size: 13px;
    color:#55555C;
    font-weight: 400;
`;

const Info = styled(Container)`
    flex: 1 auto;
    min-height: 0;
`;

const Row = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    margin-bottom: 20px;
    width: ${props => props.width};
`;

const Icon = styled.span`
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-left: 20px;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    
`;
const Text = styled.p`
    color:${props => props.color};
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    height: 100%;
    line-height: 20px;
    margin-right: 20px;
`;
const Link = styled.a`
    color: inherit;
    text-decoration: none;
`;


const monthes = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];



export default function UserPage({data}) {
    const {id} = useParams();
    const navigate = useNavigate();
    const moveBack = () => navigate(-1);


    function getUser(arr, par) {
        const res = arr.filter(elem => elem.id === par);
        return res[0];
    }

    function normDate(str) {
        let arr = str.split('-').reverse().map(elem => Number(elem));
        arr[1] = monthes[arr[1]-1];
        return arr.join(' ');

    }

    const user = getUser(data, id);
    const age = () => Math.floor((new Date() - new Date(user.birthday))/(1000*60*60*24*365));


    const getLabel = (num) => {
        const numsLast = String(num)[String(num).length-1];
        if (num > 10 && num < 20) {
            return 'лет';
        } else if (+numsLast === 1) {
            return 'год';
        } else if (+numsLast > 1 && + numsLast < 5) {
            return 'года';
        } else {
            return 'лет';
        }
    };

    const fullAge = () => age() + ' ' + getLabel(age());     
    
    return ( user ? (
        <Container>
            <Header> 
                <Button clickHandler={moveBack} img={arrow} backBtn />
                <Avatar src={user.avatarUrl} />
                <Row justify ='center' align='center'>
                    <Name>{user.firstName}</Name>
                    <Name>{user.lastName}</Name>
                    <UserTag>{user.userTag}</UserTag>
                </Row>
                <Pos>{user.position}</Pos>
            </Header>
            <Info>
                <Row justify='space-between' width='100%'> 
                    <Row align='center'>
                        <Icon url={star}/>
                        <Text color='#050510;'>{normDate(user.birthday)} </Text>
                    </Row>
                    <Text color='#97979B'>{fullAge()}</Text>
                </Row>
                <Row justify='space-between' width='100%'> 
                    <Row>
                        <Icon url={phone}/>
                        <Text color='#050510;'>
                            <Link href={`tel:${user.phone}`}>{user.phone}</Link>
                        </Text>
                    </Row>
                </Row>
            </Info>
        </Container> ) : <Navigate to='/' />
    )
}