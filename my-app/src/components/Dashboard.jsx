import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading forms
    setTimeout(() => {
      setForms([
        { id: 1, title: 'Employee Onboarding', responses: 15, createdAt: '2024-01-15' },
        { id: 2, title: 'Customer Feedback', responses: 8, createdAt: '2024-01-10' },
        { id: 3, title: 'Project Proposal', responses: 5, createdAt: '2024-01-05' }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>My Forms</h2>
            <Link to="/create" className="btn btn-primary">
              <i className="fas fa-plus me-2"></i>Create New Form
            </Link>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              {forms.map(form => (
                <div key={form.id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{form.title}</h5>
                      <p className="card-text">
                        <small className="text-muted">
                          Created: {new Date(form.createdAt).toLocaleDateString()}
                        </small>
                      </p>
                      <p className="card-text">
                        <span className="badge bg-secondary">
                          {form.responses} responses
                        </span>
                      </p>
                    </div>
                    <div className="card-footer">
                      <Link to={`/form/${form.id}`} className="btn btn-outline-primary btn-sm me-2">
                        <i className="fas fa-eye me-1"></i>View
                      </Link>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="fas fa-chart-bar me-1"></i>Analytics
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;