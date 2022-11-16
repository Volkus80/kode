import styled from 'styled-components';
import { useState, createContext, useContext } from 'react';
import TopAppBar from '../TopAppBar/TopAppBar';
import UsersList from '../UsersList/UsersList';
import EmptyList from '../EmptyList/EmptyList';
import SortSwitcher from '../SortSwitcher/SortSwitcher';
import SearchFailed from '../SearchFailed/SearchFailed';
import { AppContext } from '../App/App';


const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainContext = createContext('MainContext');

export default function Main() {
    const [param, setParam] = useState('all'); 
    const [active, setActive] = useState(false);
    const [query, setQuery] = useState(''); 
    const {err, loading} = useContext(AppContext);
    
    const list = !err ? (!loading ? <UsersList /> : <EmptyList />) : <SearchFailed /> ;
    

    function newParam(param) {
      setParam(param);
    } 
    
    function setSort() {
      setActive(!active);
    }

    const value = {param ,query, setQuery, newParam, setSort, active, setActive};
    return (
        <MainContext.Provider value={value}>
          <Container>
            <TopAppBar />
            {list}
            <SortSwitcher />
          </Container>
        </MainContext.Provider>

        
    )
}

