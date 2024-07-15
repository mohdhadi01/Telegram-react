import React from 'react'
import styled from 'styled-components'
import avatar from '../../Assets/pngs/avatar.avif'
import { ChatbgColor } from '../../theme/colors'
import {  Paragraph2 } from '../../theme/typography'
import { useMode } from '../../store/mode/hooks'
import PeopleNearby from '../../Assets/svgs/People Neardby.svg'
import features from '../../Assets/svgs/features.svg'
import invite from '../../Assets/svgs/invite.svg'
import myProfile from '../../Assets/svgs/my-profile.svg'
import newGroup from '../../Assets/svgs/new-group.svg'
import savedMsg from '../../Assets/svgs/saved-msg.svg'
import setting from '../../Assets/svgs/setting.svg'
import DarkModeSwitch from '../DarkmodeSwitch/DarkModeSwitch'



const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
    background-color: ${ChatbgColor.secondary}; 

    box-shadow: rgba(0, 0, 0, 0.184) 0px 25px 99px ;
`
const UpperSection = styled.div`
 background-color: #1e2b38; 
    padding:25px 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const LowerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Profile = styled.img`
  width: 50px ;
  height: 50px ;
  border-radius:100%;
  margin-bottom: 15px;

`
const Border = styled.div`
  width: 100%;
  height: 1px ;
  background-color: #0000007b;
`
const Options = styled.div`
  width: 100%;
  padding:20px 30px;
  display: flex;
  gap: 20px;
  cursor: pointer;
`
const Icon = styled.img`
  width: 20px;
`
const Switch = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`
const Sidebar = () => {
  const mode=useMode()
  return (
    <MainDiv>
      <UpperSection>
        <Switch>
        <DarkModeSwitch/>
        </Switch>
      <Profile src={avatar} alt="" />
      <Paragraph2 mode={mode}> Mohd Hadi</Paragraph2>
      <Paragraph2 style={{color:"#7676ff"}} mode={mode}> Set Emoji Status</Paragraph2>
      </UpperSection>
      
      <LowerSection>
        <Options>
          <Icon src={myProfile} alt="" />
          <Paragraph2 mode={mode}>My Profile</Paragraph2>
        </Options>
        <Border/>
        <Options>
          <Icon src={newGroup} alt="" />
          <Paragraph2 mode={mode}>New Group</Paragraph2>
        </Options>
        <Options>
          <Icon src={PeopleNearby} alt="" />
          <Paragraph2 mode={mode}>People Nearby</Paragraph2>
        </Options>
        <Options>
          <Icon src={savedMsg} alt="" />
          <Paragraph2 mode={mode}>Saved Messages</Paragraph2>
        </Options>
        <Options>
          <Icon src={setting} alt="" />
          <Paragraph2 mode={mode}>Settings</Paragraph2>
        </Options>
        <Border/>
        <Options>
          <Icon src={invite} alt="" />
          <Paragraph2 mode={mode}>Invite Friends</Paragraph2>
        </Options>
        <Options>
          <Icon src={features} alt="" />
          <Paragraph2 mode={mode}>Telegram Features</Paragraph2>
        </Options>
      </LowerSection>
    </MainDiv>
  )
}

export default Sidebar