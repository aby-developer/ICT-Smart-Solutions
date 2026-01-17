import { useEffect, useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import api from "../../services/api";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const loadData = async () => {
    const res = await api.get("/admin/messages");
    setMessages(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const markRead = async (id) => {
    await api.patch(`/admin/messages/${id}/read`);
    loadData();
  };

  const del = async (id) => {
    await api.delete(`/admin/messages/${id}`);
    loadData();
  };

  return (
    <>
      <h3 className="mb-4">Messages</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(msg => (
            <tr key={msg._id}>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>
                {msg.isRead
                  ? <Badge bg="success">Read</Badge>
                  : <Badge bg="warning">Unread</Badge>}
              </td>
              <td>
                {!msg.isRead && (
                  <Button size="sm" onClick={() => markRead(msg._id)}>Read</Button>
                )}{" "}
                <Button variant="danger" size="sm" onClick={() => del(msg._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Messages;
