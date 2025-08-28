import React, { useState, useEffect, useContext } from 'react';
import { DbContext } from '../../contexts/DbContext';

const OrganizationList = ({ onSelect }) => {
  const [organizations, setOrganizations] = useState([]);
  const { getOrganizations } = useContext(DbContext);

  useEffect(() => {
    const unsubscribe = getOrganizations(setOrganizations);
    return () => unsubscribe();
  }, [getOrganizations]);

  return (
    <div className="organization-list">
      <h2>Organizations</h2>
      <ul>
        {organizations.map((org) => (
          <li key={org.id} onClick={() => onSelect(org)}>
            {org.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationList;
