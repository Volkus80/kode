import styled from 'styled-components';
import { useState, memo } from 'react';
import Button from '../Button/Button';



const depButtons = [
    {
        text: 'Все',
        active: true,
        filterBtn: true,
        param: 'all'

    },
    {
        text: 'IOS',
        active: false,
        filterBtn: true,
        param: 'ios'

    },
    {
        text: 'Android',
        active: false,
        filterBtn: true,
        param: 'android'

    },
    {
        text: 'Дизайн',
        active: false,
        filterBtn: true,
        param: 'design'

    },
    {
        text: 'Менеджмент',
        active: false,
        filterBtn: true,
        param: 'management'

    },
    {
        text: 'QA',
        active: false,
        filterBtn: true,
        param: 'qa'

    },
    {
        text: 'Бэк-офис',
        active: false,
        filterBtn: true,
        param: 'back_office'

    },
    {
        text: 'Frontend',
        active: false,
        filterBtn: true,
        param: 'frontend'

    },
    {
        text: 'HR',
        active: false,
        filterBtn: true,
        param: 'hr'

    },
    {
        text: 'PR',
        active: false,
        filterBtn: true,
        param: 'pr'

    },
    {
        text: 'Backend',
        active: false,
        filterBtn: true,
        param: 'backend'

    },
    {
        text: 'Техподдержка',
        active: false,
        filterBtn: true,
        param: 'support'

    },
    {
        text: 'Аналитика',
        active: false,
        filterBtn: true,
        param: 'analytics'

    },
];

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export default memo(function FilterMenu() {
    const [buttons, setButtons] = useState(depButtons);
    
    
    const filterButtons = buttons.map((button, i) => (
        <Button 
            key = {i}
            tab = {i}
            filterBtn = {button.filterBtn}
            text = {button.text}
            active = {button.active}
            btnParam={button.param}
            setActive = {setActive}            
            />
    ));
    function setActive(param) {
        setButtons(buttons.map(button => button.param === param ? {...button, active: true} : {...button, active: false}));
    }
       
    return (
        <Container>
            {filterButtons}
        </Container>
    )
});