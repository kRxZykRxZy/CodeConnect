import React, { createContext, useContext } from 'react';
import { firestore } from '../firebase';
import { AuthContext } from './AuthContext';

export const DbContext = createContext();

export const DbProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const getOrganizations = (callback) => {
    return firestore
      .collection('organizations')
      .where('members', 'array-contains', currentUser.uid)
      .onSnapshot(callback);
  };

  const getFiles = (organizationId, callback) => {
    return firestore
      .collection('organizations')
      .doc(organizationId)
      .collection('files')
      .onSnapshot(callback);
  };

  const saveFile = (organizationId, fileId, content) => {
    return firestore
      .collection('organizations')
      .doc(organizationId)
      .collection('files')
      .doc(fileId)
      .update({ content });
  };

  const value = {
    getOrganizations,
    getFiles,
    saveFile,
  };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
};
