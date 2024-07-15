import React, { useState } from "react";
import styled from "styled-components";
import darkBg from "../../Assets/Desktop.webp";
import { useMode } from "../../store/mode/hooks";
import { Paragraph2 } from "../../theme/typography";

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
`;
const UnselectedBackground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const DarkBgImage = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(0.7);
`
const MidWrittenText = styled.p`
      background: #2c3243;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding:2px 10px;
      border-radius: 15px;
`
const RightSectionBox = () => {
  const [chatSelected, setChatSelected] = useState(false);
  const mode = useMode()
  return (
    <MainDiv>
      {chatSelected ? "" : 
        
        <UnselectedBackground>
        <DarkBgImage src={darkBg} alt="" />
        <MidWrittenText>
            <Paragraph2 mode={mode}>
            Select a chat to start messaging
            </Paragraph2>
            </MidWrittenText>
        </UnselectedBackground>}
    </MainDiv>
  );
};

export default RightSectionBox;
