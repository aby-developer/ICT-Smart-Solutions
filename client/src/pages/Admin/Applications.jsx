import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import api from "../../services/api";

const Applications = () => {
  const [apps, setApps] = useState([]);

  const loadData = async () => {
    const res = await api.get("/admin/applications");
    setApps(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteApp = async (id) => {
    await api.delete(`/admin/applications/${id}`);
    loadData();
  };

  return (
    <>
      <h3 className="mb-4">Applications</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Program</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {apps.map(app => (
            <tr key={app._id}>
              <td>{app.fullName}</td>
              <td>{app.email}</td>
              <td>{app.program}</td>
              <td>{app.status}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteApp(app._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Applications;
