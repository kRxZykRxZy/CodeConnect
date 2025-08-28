import React, { useState, useEffect, useContext } from 'react';
import { DbContext } from '../../contexts/DbContext';
import FileTree from './FileTree';

const FileExplorer = ({ onFileSelect }) => {
  const [files, setFiles] = useState([]);
  const { getFiles } = useContext(DbContext);

  useEffect(() => {
    const unsubscribe = getFiles(setFiles);
    return () => unsubscribe();
  }, [getFiles]);

  return (
    <div className="file-explorer">
      <FileTree files={files} onFileSelect={onFileSelect} />
    </div>
  );
};

export default FileExplorer;
