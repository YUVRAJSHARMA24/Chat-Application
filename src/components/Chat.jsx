import React from "react";
import Cam from "../assets/video-camera-svgrepo-com.svg";
import Add from "../assets/add-profile-svgrepo-com.svg";
import More from "../assets/three-dots-svgrepo-com.svg";
import Messages from "../components/Messages";
import Input from "../components/Input";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
