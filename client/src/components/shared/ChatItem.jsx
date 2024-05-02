import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Stack, Box } from '@mui/material'; 

const ChatItem = ({
  _id,
  avatar = [],
  name,
  id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)} style={{ textDecoration: 'none' }}>
     <div style={{
        display : "flex",
        gap :"1rem",
        position : "relative",
        alignItems : "center",
        padding : "1rem",
        backgroundColor : sameSender ? "#3b0764" : "unset",
        color : sameSender ? "white" : "unset",
        borderBottom : "1px solid #f0f0f0",
        justifyContent : "space-between",
    }}>
         <Stack>
          <Typography>{name}</Typography>

          {newMessageAlert && 
        <Typography sx={{
          color : "black"
        }}>{newMessageAlert}New Message</Typography>}

        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
