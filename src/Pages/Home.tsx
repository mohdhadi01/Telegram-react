import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import LeftSectionBox from '../Components/Layout/LeftSectionBox'
import RightSectionBox from '../Components/Layout/RightSectionBox'
import { ChatbgColor } from '../theme/colors'
import Sidebar from '../Components/Layout/Sidebar'
import Slide from '@mui/material/Slide';

const MainDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
`
const LeftSection = styled.div<{sideBar:boolean}>`
    background-color: ${ChatbgColor.secondary};
  height: 100%;
  width: 430px;
  filter: brightness(${(props)=>props.sideBar?"0.6":1});
  @media (max-width: 900px){
   width: 100%;
  }
`
const RightSection = styled.div<{sideBar:boolean}>`
  height: 100%;
  width: calc(100% - 400px );
  filter: brightness(${(props)=>props.sideBar?"0.5":1});
  @media (max-width: 900px){
    display: none;
  }
`
const SideBarDiv= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    z-index: 99;
`

// const LeftSection = styled.div`
  
// `
// const LeftSection = styled.div`
  
// `
// const LeftSection = styled.div`
  
// `

const Home = () => {
  const [sideBar, setSideBar] = useState(false)
  const SideBarRef = useRef<HTMLDivElement | null>(null)

  const closeCard = (e:any)=>{
    if(!SideBarRef?.current?.contains(e.target)){
      setSideBar(false)
    }
  }
  document.addEventListener("mousedown", closeCard)
  return (
    <MainDiv>
        {
            sideBar && 
              <Slide direction="right" in={sideBar} >
            <SideBarDiv ref={SideBarRef}>
                <Sidebar/>
            </SideBarDiv>
              </Slide>
        }
      <LeftSection sideBar={sideBar}>
        <LeftSectionBox sideBar={sideBar} setSideBar={setSideBar}/>
      </LeftSection >
      <RightSection sideBar={sideBar}>
        <RightSectionBox/>
      </RightSection>
    </MainDiv>
  )
}

export default Home