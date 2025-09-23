import React, { useState } from 'react';

const Formulaire = ({ fields, initialData = {}, onSubmit, onDelete, submitLabel = 'Enregistrer', deleteLabel = 'Supprimer' }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: 10 }}>
          <label>
            {field.label}:
            <input
              type={field.type || 'text'}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
            />
          </label>
        </div>
      ))}
      <button type="submit">{submitLabel}</button>
    </form>
  );
};

export default Formulaire;
