import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../App/App';

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
    flex: 1 auto;
`;
const DescContainer = styled(Container)`
    margin-bottom: 5px;
`;
const Year = styled.div`
    display: ${props => props.date && props.radio === '2' ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 75px;
`;
const Line = styled.div`
    width: 40%;
    border-bottom: solid 3px #C3C3C6;
`;
const Text = styled.p`
    color: #C3C3C6;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
`;

const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

const Name = styled.p`
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #050510;
    text-align: left;
    margin: 0 0 0 10px;
`;

const UserTag = styled.span`
    font-size: 14px;
    color: #97979B;
    font-family: 'Inter', sans-serif;
    margin-left: 10px;
`;

const DepPos = styled(Name)`
    font-size: 13px;
    color:#55555C;
    font-weight: 400;
`;

const BirthDay = styled.p`
display: ${props => props.radio === '2' ? 'block' : 'none'};
line-height: 70px;
font-weight: 400;
font-size: 15px;
color: #55555C;
`;

const monthes = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
];

function makeDate(str) {
    const dateArr = str.split('-').reverse();
    const fixedMonth = monthes[+dateArr[1]-1];
    return dateArr[0] + ' ' + fixedMonth;
}

const yearText = new Date().getFullYear()+1;




export default function UserCard({avatar, firstName, secondName, userTag, dep, pos, birthday, date }) {
    const {radio} = useContext(AppContext);
    return (
        <>
        <Year date={date} radio={radio}>
            <Line />
            <Text>
                {yearText}
            </Text>
            <Line />
        </Year>
        <Container>
            <Avatar src={avatar}/>
            <Description>
                <DescContainer>
                    <Name> {firstName} </Name>
                    <Name> {secondName} </Name>
                    <UserTag>{userTag}</UserTag>
                </DescContainer>
                <DescContainer>
                    <DepPos>{dep}</DepPos>
                    <DepPos>{pos}</DepPos>
                </DescContainer>
            </Description>
            <BirthDay radio={radio}>{makeDate(birthday)}</BirthDay> 
        </Container>
        </>
    )
}
