import React, { memo, useState } from "react"
import { Content } from "../../components";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    Avatar,
    ConversationHeader,
    InfoButton,
    TypingIndicator,
    MessageSeparator
} from "@chatscope/chat-ui-kit-react";
import { Paper } from "@mui/material";

const ChatMemo = () => {
    const [messageInputValue, setMessageInputValue] = useState("");
    const avatarIco =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";

    return (
        <Content>
            <Paper sx={{ marginTop: '-35px', marginLeft: '-50px', marginRight: '-46px' }}>
                <div
                    style={{
                        height: 850,
                        position: "relative"
                    }}
                >
                    <MainContainer responsive>
                        <ChatContainer>
                            <ConversationHeader>
                                <ConversationHeader.Back />
                                <Avatar src={avatarIco} name="Zoe" />
                                <ConversationHeader.Content
                                    userName="Zoe"
                                    info="Active 10 mins ago"
                                />
                                <ConversationHeader.Actions>
                                    <InfoButton />
                                </ConversationHeader.Actions>
                            </ConversationHeader>
                            <MessageList
                                typingIndicator={<TypingIndicator content="Zoe is typing" />}
                            >
                                <MessageSeparator />

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "single"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "single"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "single"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "single"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "single"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "single"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "single"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "single"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Patrik",
                                        direction: "outgoing",
                                        position: "single"
                                    }}
                                    avatarSpacer
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Patrik",
                                        direction: "outgoing",
                                        position: "single"
                                    }}
                                    avatarSpacer
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Patrik",
                                        direction: "outgoing",
                                        position: "single"
                                    }}
                                    avatarSpacer
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Patrik",
                                        direction: "outgoing",
                                        position: "single"
                                    }}
                                    avatarSpacer
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "first"
                                    }}
                                    avatarSpacer
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "normal"
                                    }}
                                    avatarSpacer
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "normal"
                                    }}
                                    avatarSpacer
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "last"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Patrik",
                                        direction: "outgoing",
                                        position: "first"
                                    }}
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Patrik",
                                        direction: "outgoing",
                                        position: "normal"
                                    }}
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Patrik",
                                        direction: "outgoing",
                                        position: "normal"
                                    }}
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Patrik",
                                        direction: "outgoing",
                                        position: "last"
                                    }}
                                />

                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "first"
                                    }}
                                    avatarSpacer
                                />
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "15 mins ago",
                                        sender: "Zoe",
                                        direction: "incoming",
                                        position: "last"
                                    }}
                                >
                                    <Avatar src={avatarIco} name="Zoe" />
                                </Message>
                            </MessageList>
                            <MessageInput
                                placeholder="Type message here"
                                value={messageInputValue}
                                onChange={(val) => setMessageInputValue(val)}
                                onSend={() => setMessageInputValue("")}
                            />
                        </ChatContainer>
                    </MainContainer>
                </div>
            </Paper>
        </Content>
    );
}

export const Chat = memo(ChatMemo);