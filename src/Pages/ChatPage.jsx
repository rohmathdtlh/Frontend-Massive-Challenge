import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdSend } from "react-icons/io";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const chats = [
    { id: 1, name: "Aulia Ayun", avatar: "https://e7.pngegg.com/pngimages/223/244/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle.png" },
    { id: 2, name: "Raka fredy", avatar: "https://e7.pngegg.com/pngimages/223/244/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle.png" },
    { id: 3, name: "Chika jessika", avatar: "https://e7.pngegg.com/pngimages/223/244/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle.png" },
    { id: 3, name: "Aditiya Putra", avatar: "https://e7.pngegg.com/pngimages/223/244/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle.png" },
  ];

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setMessages([]); // Reset messages when a new chat is selected
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  return (
    <Container fluid className="p-3">
      <Row>
        <Col md={3}>
          <Card className="shadow-sm">
            <Card.Header className="fw-bold fs-4">Pesan</Card.Header>
            <ListGroup variant="flush">
              {chats.map((chat) => (
                <ListGroup.Item key={chat.id} action onClick={() => handleSelectChat(chat)} className="d-flex align-items-center">
                  <Image src={chat.avatar} roundedCircle width="40" height="40" className="me-3" />
                  {chat.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={6}>
          {selectedChat ? (
            <Card className="h-100 shadow-sm">
              <Card.Header className="d-flex align-items-center">
                <Image src={selectedChat.avatar} roundedCircle width="40" height="40" className="me-3" />
                {selectedChat.name}
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <div className="flex-grow-1 overflow-auto">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`my-2 p-2 rounded ${message.sender === "You" ? "bg-secondary text-white align-self-end" : "bg-light"}`}
                      style={{ maxWidth: "75%", alignSelf: message.sender === "You" ? "flex-end" : "flex-start" }}
                    >
                      <strong>{message.sender}:</strong> {message.text}
                    </div>
                  ))}
                </div>
                <Form onSubmit={handleSendMessage} className="d-flex mt-3">
                  <Form.Control type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Ketik pesan..." />
                  <Button type="submit" variant="light" className="ms-2">
                    <IoMdSend size={30} />
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <div className="text-center mt-5">
              <h4>Pilih percakapan untuk memulai chatting</h4>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;
