import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { authenticate } from '../Services/api';

const Login = ({ onLogin }) => {
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simulate API call for demo
      setTimeout(() => {
        onLogin(
          { 
            id: 'user-123', 
            name: 'John Doe', 
            email: 'john@example.com',
            bases: [
              {
                id: 'base1',
                name: 'Project Management',
                tables: [
                  {
                    id: 'tbl1',
                    name: 'Tasks',
                    fields: [
                      { id: 'fld1', name: 'Task Name', type: 'Short text' },
                      { id: 'fld2', name: 'Description', type: 'Long text' },
                      { id: 'fld3', name: 'Status', type: 'Single select', options: ['Todo', 'In Progress', 'Done'] }
                    ]
                  }
                ]
              }
            ]
          },
          'mock-jwt-token'
        );
        setLoading(false);
      }, 1000);

      // In real app, use:
      // const response = await authenticate(accessToken);
      // onLogin(response.data.user, response.data.token);
      
    } catch (error) {
      setError('Authentication failed. Please check your access token.');
      setLoading(false);
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <i className="fas fa-table fa-3x text-primary mb-3"></i>
                <h2>Airtable Form Builder</h2>
                <p className="text-muted">Connect your Airtable account</p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Airtable Access Token</Form.Label>
                  <Form.Control
                    type="password"
                    value={accessToken}
                    onChange={(e) => setAccessToken(e.target.value)}
                    placeholder="Enter your access token"
                    required
                  />
                  <Form.Text className="text-muted">
                    Get this from your Airtable account settings
                  </Form.Text>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? 'Connecting...' : 'Connect to Airtable'}
                </Button>
              </Form>

              <div className="mt-4">
                <h6>How to get your token:</h6>
                <ol className="small text-muted">
                  <li>Go to Airtable account settings</li>
                  <li>Navigate to "Developer" section</li>
                  <li>Generate personal access token</li>
                  <li>Copy and paste above</li>
                </ol>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;