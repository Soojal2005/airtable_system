import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { authenticate } from '../services/api';

const Login = ({ onLogin }) => {
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // For demo purposes - replace with actual API call
      setTimeout(() => {
        onLogin(
          { 
            id: 'user-123', 
            name: 'John Doe', 
            email: 'john@example.com',
            bases: [] 
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
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6} lg={4}>
          <Card className="shadow">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2>Airtable Form Builder</h2>
                <p className="text-muted">Connect your Airtable account to get started</p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Airtable Personal Access Token</Form.Label>
                  <Form.Control
                    type="password"
                    value={accessToken}
                    onChange={(e) => setAccessToken(e.target.value)}
                    placeholder="Enter your access token"
                    required
                  />
                  <Form.Text className="text-muted">
                    You can generate an access token from your Airtable account settings.
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
                <h6>How to get your access token:</h6>
                <ol className="small">
                  <li>Go to your Airtable account settings</li>
                  <li>Navigate to the "Developer" section</li>
                  <li>Generate a new personal access token</li>
                  <li>Copy and paste it above</li>
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