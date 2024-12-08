import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams();

  const services = [
    { id: '1', name: 'Custom Cake Orders', description: 'Details about cake orders.' },
    { id: '2', name: 'Event Catering', description: 'Details about catering.' },
    { id: '3', name: 'Baking Classes', description: 'Details about baking classes.' },
  ];

  const service = services.find((service) => service.id === id);

  if (!service) return <p>Service not found.</p>;

  return (
    <div>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetails;
