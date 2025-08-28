import React, { useState } from 'react';
import FileExplorer from '../components/files/FileExplorer';
import CodeEditor from '../components/editor/Editor';
import OrganizationList from '../components/organization/OrganizationList';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(null);

  return (
    <div className="dashboard-container">
      <OrganizationList onSelect={setSelectedOrg} />
      {selectedOrg && (
        <FileExplorer
          organizationId={selectedOrg.id}
          onFileSelect={setSelectedFile}
        />
      )}
      {selectedFile && <CodeEditor file={selectedFile} onSave={() => {}} />}
    </div>
  );
};

export default Dashboard;
