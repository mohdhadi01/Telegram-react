import React, { useState } from 'react'
import styled from 'styled-components'
import darkMenuIcon from '../../Assets/pngs/dark-menu-icon.png'
import hoveredDarkMenu from '../../Assets/pngs/hovered-menu.png'
import ChatBox from '../ChatBox'
import Categories from '../categorySection/Categories'
const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Header = styled.div`
    display: flex;
    height: 54px;
    padding: 7px 20px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
const CategorySection = styled.div`
    height: 36px;
    width: 100%;
`
const MenuBarIcon = styled.img`
    width: 20px;
    height: 17px;
    cursor: pointer;
`
const SearchBar = styled.input`
    width: 340px;
    height: 35px;
    border-radius: 50px;
    background: #2c3243;
    outline: none;
    border: none;
    padding: 5px 15px;
    color: #ffffff;
    @media (max-width: 450px){
   width: 300px;
  }
`
const ChatDiv = styled.div`
    width: 100%;
    height: calc(100% - 90px);
`
interface props{
    setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    sideBar:boolean;
}
const LeftSectionBox = ({setSideBar,sideBar}:props) => {
    const [menuFocus, setMenuFocus] = useState<boolean>(false)
    
  return (
    <MainDiv >
        <Header>
            <MenuBarIcon onClick={()=>setSideBar(true)} onMouseEnter={()=>setMenuFocus(true)} onMouseLeave={()=>setMenuFocus(false)} src={menuFocus? hoveredDarkMenu : darkMenuIcon}  alt="" />
            <form action="submit">
                <SearchBar placeholder='Search' type="text" />
            </form>
        </Header>
        <CategorySection>
            <Categories/>
        </CategorySection>
        <ChatDiv>
        <ChatBox/>
        </ChatDiv>
    </MainDiv>
  )
}

export default LeftSectionBox