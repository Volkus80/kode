import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';
import SearchFailed from '../SearchFailed/SearchFailed';
import { useContext } from 'react';
import { AppContext } from '../App/App';
import { MainContext } from '../Pages/Main';

const Container = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    flex: 1 auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default function UsersList() {
    const {data} = useContext(AppContext);
    const {param, query} = useContext(MainContext);
    const currentYear = new Date().getFullYear();
    const getQuery = (par) => par.toLowerCase().includes(query.toLowerCase());
    const filteredData = param === 'all' ? 
        data.filter(elem => (getQuery(elem.firstName) || getQuery(elem.lastName) || getQuery(elem.userTag))) : 
        data.filter(elem => elem.department === param && (getQuery(elem.firstName) || getQuery(elem.lastName) || getQuery(elem.userTag)));

    const list = filteredData.map((user, i, arr) => 
            <StyledLink key={user.id} to={`/main/${user.id}`}>
                <UserCard
                    key = {user.id}
                    id={user.id}
                    avatar={user.avatarUrl}
                    firstName={user.firstName}
                    secondName={user.lastName}
                    userTag={user.userTag}
                    pos={user.position}
                    dep={user.department}
                    birthday={user.birthday}
                    date = {arr[i-1] ? (user.sortDate.getFullYear() > arr[i-1].sortDate.getFullYear() ? true : false) : (user.sortDate.getFullYear() > currentYear ? true:false)}
                />
            </StyledLink> );


    return (
        <Container>
            {list.length === 0 ? <SearchFailed /> : list}
        </Container>
    )
}

