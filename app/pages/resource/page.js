"use client"

import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Modal from 'react-modal';

const Folder = ({ folderName, onAddFile, onAddFolder }) => {
  const [isAddingFile, setIsAddingFile] = useState(false);
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const handleAddFile = () => {
    setIsAddingFile(true);
  };

  const handleAddFolder = () => {
    setIsAddingFolder(true);
  };

  const handleFileUpload = () => {
    // Handle file upload logic here
    console.log('File uploaded');
    setIsAddingFile(false);
  };

  const handleFolderCreate = () => {
    // Handle folder creation logic here
    console.log('Folder created:', newFolderName);
    setNewFolderName('');
    setIsAddingFolder(false);
  };

  const handleClose = () => {
    setIsAddingFile(false);
    setIsAddingFolder(false);
  };

  return (
    <div>
      <div>Folder: {folderName}</div>
      
      <Button variant="contained" color="primary" onClick={handleAddFile}>
        Add File
      </Button>

      <Button variant="contained" color="primary" onClick={handleAddFolder}>
        Add Folder
      </Button>

      <Dialog open={isAddingFile || isAddingFolder} onClose={handleClose}>
        <DialogTitle>{isAddingFile ? 'Add File' : 'Add Folder'}</DialogTitle>
        <DialogContent>
          {isAddingFile && <input type="file" onChange={handleFileUpload} />}
          {isAddingFolder && (
            <TextField
              autoFocus
              margin="dense"
              label="New Folder Name"
              fullWidth
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={isAddingFile ? handleFileUpload : handleFolderCreate} color="primary">
            {isAddingFile ? 'Upload' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const File = ({ fileName, onFileClick }) => {
  const handleClick = () => {
    onFileClick(fileName);
  };

  return (
    <div>
      <div>File: {fileName}</div>
      <button onClick={handleClick}>View Details</button>
    </div>
  );
};

const FileDetailsModal = ({ isOpen, closeModal, fileName }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>File Details: {fileName}</h2>
      {/* Add your file details, edit, and delete functionality here */}
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default function FileExplorer (){
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileDetailsModalOpen, setIsFileDetailsModalOpen] = useState(false);

  const handleAddFile = (e) => {
    // Handle file upload logic here
    console.log('File uploaded:', e.target.files[0]);
  };

  const handleFileClick = (fileName) => {
    setSelectedFile(fileName);
    setIsFileDetailsModalOpen(true);
  };

  const closeModal = () => {
    setIsFileDetailsModalOpen(false);
  };

  return (
    <div>
      <h1>File Explorer</h1>
      <Folder folderName="Parent Folder" onAddFile={handleAddFile} />
      <File fileName="Sample File 1" onFileClick={handleFileClick} />
      <File fileName="Sample File 2" onFileClick={handleFileClick} />

      <FileDetailsModal
        isOpen={isFileDetailsModalOpen}
        closeModal={closeModal}
        fileName={selectedFile}
      />
    </div>
  );
};


