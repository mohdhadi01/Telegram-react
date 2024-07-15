import React, { useState } from "react";
import styled from "styled-components";
import TextColor from "../../theme/typography";
import { useMode } from "../../store/mode/hooks";
import { MODE } from "../../store/mode";

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  padding-bottom: 5px;
  gap: 30px;
  padding-left: 30px;
  padding-right: 20px;
  overflow-x: auto;
`;
const Options = styled.div<{selected:string,mode:MODE }>`
padding-bottom: 5px;
position: relative;
color: ${(props) =>
    props.mode === MODE.DARK ? TextColor.secondary : TextColor.primary};
    color: rgba(255,255,255,0.60);
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.02px;
  letter-spacing: 0.17px;
cursor: pointer;
 &.all {
    border-bottom: 4px solid ${({ selected }) => (selected ==="all"? "#69beff" : "transparent")}; 
   color: ${({ selected }) => (selected ==="all"? "#69beff" : "")}; 
   
  }
  &.regular {
    border-bottom: 4px solid  ${({ selected }) => (selected ==="regular"? "#69beff" : "transparent")}; 
   color: ${({ selected }) => (selected ==="regular"? "#69beff" : "")}; 
}
  &.Unread {
    border-bottom: 4px solid  ${({ selected }) => (selected ==="Unread"? "#69beff" : "transparent")}; 
   color: ${({ selected }) => (selected ==="Unread"? "#69beff" : "")}; 

  }
  &.Personal {
    border-bottom: 4px solid  ${({ selected }) => (selected ==="Personal"? "#69beff" : "transparent")}; 
    color: ${({ selected }) => (selected ==="Personal"? "#69beff" : "")}; 
    
  }
`;
const UnreadMsg = styled.p`
  width: 16px;
  height: 16px;
  background-color: #69beff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 9px;
  border-radius: 100%;
  position: absolute;
  bottom:7px;
  right: -20px;
`;


const Categories = () => {
  const mode = useMode();
  const [selected, setSelected] = useState<string>("all");

  const handleClick = (category: string) => {
    setSelected(category);
  };

  const count = 1;
  return (
    <MainDiv>
      <Options mode={mode} selected={selected} className="all"  onClick={() => handleClick("all")}>
        <p >All</p>
        {selected==="all" && count>0 &&
          <UnreadMsg>{count}</UnreadMsg>
        }
      </Options>
      <Options mode={mode} selected={selected} className="regular"  onClick={() => handleClick("regular")}>
        <p>Regulars</p>
        { selected==="regular" && count>0 &&
          <UnreadMsg>{count}</UnreadMsg>
        }
      </Options>
      <Options mode={mode} selected={selected} className="Unread" onClick={() => handleClick("Unread")}>
        <p >Unread</p>
        {selected==="Unread" && count>0 &&
          <UnreadMsg>{count}</UnreadMsg>
        }
      </Options>
      <Options mode={mode} selected={selected} className="Personal" onClick={() => handleClick("Personal")}>
        <p>Personal</p>
        {selected==="Personal" && count>0 &&
          <UnreadMsg>{count}</UnreadMsg>
        }
      </Options>
    </MainDiv>
  );
};

export default Categories;
