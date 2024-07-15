import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Paragraph2, Paragraph3b } from "../../theme/typography";
import { useMode } from "../../store/mode/hooks";
import { getAllChat, getChatMessages } from "../../utils/fetch";

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
const SingleChat = styled.div`
  height: 65px;
  width: 100%;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
  &:hover {
    background-color: #202b36;
    cursor: pointer;
  }
`;
// const Profile = styled.img`
//   border-radius: 100%;
//   width: 42px;
// `;
const ProfileDiv = styled.div<{index:number}>`
  border-radius: 100%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 16px;
  background-color: #7265e1;
  background-color: ${(props)=>props.index%2===0?"#7265e1":(props.index%3===0?'#a78af4':'#fbb403')};
`;
const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const MYDate = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
`;
// const UnreadMsg = styled.p`
//   width: 20px;
//   height: 20px;
//   background-color: #4c7ac9;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #ffffff;
//   font-size: 10px;
//   border-radius: 100%;
//   position: absolute;
//   bottom: 10px;
//   right: 10px;
// `;
const Border = styled.div`
  height: 1px;
  width: 100%;
  background-color: #0000002b;
  position: absolute;
  bottom: 0;
  left: 60px;
`;
const Index = () => {
  const mode = useMode();
  const [chats, setChats] = useState<any[]>();
  const [messages, setMessages] = useState<any[]>();

 

  const getChats = async () => {
    const chats = await getAllChat(3888);
    setChats(chats.data);
  };
  const getMessages = async () => {
    const messages = await getChatMessages();
    setMessages(messages.data.data)
  };
  useEffect(() => {
    getChats();
    getMessages();
  }, []);
  console.log('chats',chats);
  console.log("messages",messages);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);  
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;  
  };

  return (
    <MainDiv>
      {chats?.map((data, index) => (
        <SingleChat key={index}>
          {/* <Profile src={avatar} alt="" /> */}
          <ProfileDiv index={index} >
            {data?.sender?.name
              ?.split(" ")
              .map((word: String) => word?.charAt(0))
              .join("")}
          </ProfileDiv>
          <DetailDiv>
            <Paragraph2 mode={mode}>{data?.sender?.name}</Paragraph2>
            <Paragraph2
              style={{
                fontWeight: "300",
                fontSize: "13px",
                color: "rgba(255,255,255,0.60)",
              }}
              mode={mode}
            >
              {data?.message.length > 22
                ? data?.message.substring(0, 50) + "..."
                : data?.message}
            </Paragraph2>
          </DetailDiv>
          <MYDate>
            <Paragraph3b
              mode={mode}
              style={{ fontWeight: "300", color: "rgba(255, 255, 255, 0.537)" }}
            >
              {formatDate(data?.updated_at)}
            </Paragraph3b>
          </MYDate>
          {data?.unanswered === "0" ? (
            data?.unanswered
          ) : (
            ""
          )}
          <Border />
        </SingleChat>
      ))}
    </MainDiv>
  );
};

export default Index;
