import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../../services/api";

const Settings = () => {
  const [data, setData] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    await api.put("/admin/profile", data);
    alert("Profile updated");
  };

  return (
    <>
      <h3 className="mb-4">Admin Settings</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={e => setData({...data, username: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={e => setData({...data, email: e.target.value})}/>
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
};

export default Settings;
