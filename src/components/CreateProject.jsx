import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { createProject } from '../services/blockchain';
import { useGlobalState, setGlobalState } from '../store';

// Adjusted styling for the modal to mimic the original aesthetic
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#F0F0D7', // Updated background color
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  borderRadius: '12px',
  p: 4,
  width: '90%',
  maxWidth: '500px',
  overflow: 'hidden',
};


const CreateProject = () => {
  const [createModal] = useGlobalState('createModal');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [imageURL, setImageURL] = useState('');

  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr);
    return dateObj / 1000;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !cost || !date || !imageURL) return;

    const params = {
      title,
      description,
      cost,
      expiresAt: toTimestamp(date),
      imageURL,
    };

    await createProject(params);
    toast.success('Project created successfully, will reflect in 30sec.');
    onClose();
  };

  const onClose = () => {
    setGlobalState('createModal', false); // Assuming 'false' is the correct state for closing the modal
    reset();
  };

  const reset = () => {
    setTitle('');
    setCost('');
    setDescription('');
    setImageURL('');
    setDate('');
  };

  return (
    <Modal
      open={Boolean(createModal)}
      onClose={onClose}
      aria-labelledby="create-project-modal-title"
      aria-describedby="create-project-modal-description"
    >
      <Box sx={style}>
        <Typography id="create-project-modal-title" variant="h6" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
          Add Project
        </Typography>
        <Button onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <FaTimes />
        </Button>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 1,
          }}
        >
          <TextField
            margin="normal"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            sx={{
              input: { bgcolor: 'white', borderRadius: '4px' },
            }}
          />
          <TextField
            margin="normal"
            id="cost"
            label="Cost (ETH)"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e) => setCost(e.target.value)}
            value={cost}
            required
            sx={{
              input: { bgcolor: 'white', borderRadius: '4px' },
            }}
          />
          <TextField
            margin="normal"
            id="date"
            label="Expires"
            type="date"
            fullWidth
            variant="outlined"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              input: { bgcolor: 'white', borderRadius: '4px' },
            }}
          />
          <TextField
            margin="normal"
            id="imageURL"
            label="Image URL"
            type="url"
            fullWidth
            variant="outlined"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
            required
            sx={{
              input: { bgcolor: 'white', borderRadius: '4px' },
            }}
          />
          <TextField
            margin="normal"
            id="description"
            label="Description"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
            sx={{
              input: { bgcolor: 'white', borderRadius: '4px' },
            }}
          />
<Button type="submit" variant="contained" sx={{ mt: 3, bgcolor: '#15803D', ':hover': { bgcolor: '#105a2b' }, color: '#1F2937' }}>
  Submit Project
</Button>


        </Box>
      </Box>
    </Modal>
  );
};

export default CreateProject;
