import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Records() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({ patient_name: '', diagnosis: '', treatment: '' });

  useEffect(() => {
    axios.get('http://localhost:5003/records')
      .then(response => setRecords(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5003/records', formData)
      .then(() => {
        setRecords([...records, formData]);
        setFormData({ patient_name: '', diagnosis: '', treatment: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="patient_name" placeholder="Nom du patient" value={formData.patient_name} onChange={handleChange} required />
        <input type="text" name="diagnosis" placeholder="Diagnostic" value={formData.diagnosis} onChange={handleChange} required />
        <input type="text" name="treatment" placeholder="Traitement" value={formData.treatment} onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record.patient_name} - {record.diagnosis} - {record.treatment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Records;
