import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const FormBuilder = ({ user }) => {
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedTable, setSelectedTable] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [selectedFields, setSelectedFields] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleBaseChange = (baseId) => {
    setSelectedBase(baseId);
    setSelectedTable('');
    setSelectedFields([]);
  };

  const handleFieldToggle = (field) => {
    if (selectedFields.some(f => f.fieldId === field.id)) {
      setSelectedFields(selectedFields.filter(f => f.fieldId !== field.id));
    } else {
      setSelectedFields([...selectedFields, {
        fieldId: field.id,
        label: field.name,
        type: field.type,
        required: false
      }]);
    }
  };

  const handleSaveForm = async () => {
    try {
      if (!selectedBase || !selectedTable || !formTitle || selectedFields.length === 0) {
        setError('Please fill all required fields and select at least one field');
        return;
      }

      // Simulate API call
      setTimeout(() => {
        setSuccess('Form created successfully!');
        setError('');
        
        // Reset form
        setSelectedBase('');
        setSelectedTable('');
        setFormTitle('');
        setSelectedFields([]);
      }, 1000);

    } catch (error) {
      setError('Failed to create form: ' + error.message);
      setSuccess('');
    }
  };

  const selectedBaseData = user.bases?.find(base => base.id === selectedBase);
  const selectedTableData = selectedBaseData?.tables.find(table => table.id === selectedTable);

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h2>Create New Form</h2>
          <p className="text-muted">Build your form using Airtable fields</p>
        </Col>
      </Row>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <h5>Form Details</h5>
              <Form.Group className="mb-3">
                <Form.Label>Form Title *</Form.Label>
                <Form.Control
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Enter form title"
                  required
                />
              </Form.Group>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h5>Selected Fields ({selectedFields.length})</h5>
              {selectedFields.length > 0 ? (
                selectedFields.map(field => (
                  <div key={field.fieldId} className="border p-3 mb-2 rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{field.label}</strong>
                        <span className="badge bg-secondary ms-2">{field.type}</span>
                      </div>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleFieldToggle({ id: field.fieldId })}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">No fields selected yet</p>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <h5>Select Base</h5>
              <Form.Select
                value={selectedBase}
                onChange={(e) => handleBaseChange(e.target.value)}
                className="mb-3"
              >
                <option value="">Choose a base</option>
                {user.bases?.map(base => (
                  <option key={base.id} value={base.id}>{base.name}</option>
                ))}
              </Form.Select>

              {selectedBase && (
                <>
                  <h5>Select Table</h5>
                  <Form.Select
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                    className="mb-3"
                  >
                    <option value="">Choose a table</option>
                    {selectedBaseData.tables.map(table => (
                      <option key={table.id} value={table.id}>{table.name}</option>
                    ))}
                  </Form.Select>
                </>
              )}
            </Card.Body>
          </Card>

          {selectedTableData && (
            <Card>
              <Card.Body>
                <h5>Available Fields</h5>
                {selectedTableData.fields.map(field => (
                  <Form.Check
                    key={field.id}
                    type="checkbox"
                    label={
                      <div>
                        {field.name}
                        <span className="badge bg-secondary ms-2">{field.type}</span>
                      </div>
                    }
                    checked={selectedFields.some(f => f.fieldId === field.id)}
                    onChange={() => handleFieldToggle(field)}
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>
          )}

          <Button
            variant="primary"
            className="w-100 mt-3"
            onClick={handleSaveForm}
            disabled={!selectedBase || !selectedTable || !formTitle || selectedFields.length === 0}
          >
            Save Form
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormBuilder;