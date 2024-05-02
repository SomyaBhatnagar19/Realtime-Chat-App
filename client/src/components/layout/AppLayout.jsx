import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { SampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {


  return (props) => {

    
  const params = useParams();

  const chatId = params.chatId;

  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDefault();
    console.log("Delete Chat", _id, groupChat);
  }

    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            xs={4}
            sm={4}
            md={3}
            lg={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={SampleChats}
              chatId={chatId}
              handleDeleteChat= {handleDeleteChat}
            />
          </Grid>
          <Grid item xs={6} sm={8} md={5} lg={7} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            xs={2}
            md={4}
            lg={2}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "1rem",
              bgcolor: "#0f172a",
            }}
          >
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
