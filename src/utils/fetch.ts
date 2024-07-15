import axios from "axios";

export const getChatMessages = async () => {
    try {
      const response = await axios.get(
        "https://devapi.beyondchats.com/api/get_all_chats",
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get Blog-post", error);
      throw error;
    }
  };

  export const getAllChat = async (id:number) => {
    try {
      const response = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get Blog-post", error);
      throw error;
    }
  };