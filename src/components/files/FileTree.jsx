import React from 'react';

const FileTree = ({ files, onFileSelect }) => {
  const renderTree = (nodes) => (
    <ul>
      {nodes.map((node) => (
        <li key={node.id} onClick={() => onFileSelect(node)}>
          {node.name}
          {node.children && renderTree(node.children)}
        </li>
      ))}
    </ul>
  );

  return <div className="file-tree">{renderTree(files)}</div>;
};

export default FileTree;
