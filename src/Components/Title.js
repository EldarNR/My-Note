import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import PostForm from './PostForm';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({ create }) {
  return (
    <Container lg={12} xs={12} sm={12} md={12}>
      <Box style={{ paddingTop: 15 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} sm={10} md={9} lg={8} >

            <Item style={{ textAlign: 'center' }}>
              <h1>My Note!</h1>
            </Item>

            <Item style={{ marginTop: "10px" }}>
              <Typography variant="body1" gutterBottom style={{ paddingLeft: "7px" }}>
                <span variant="h2"><b>Here are some of the key features of My Note!:</b></span><br />

                <strong>Create notes with titles and body text:</strong> You can create notes with titles and body text to help you organize your thoughts and ideas.<br />
                <strong>Delete or add notes to your favorites:</strong>You can delete notes that you no longer need or add them to your favorites for easy access.<br />
                <strong>Simple and convenient interface:</strong>The interface is clean and straightforward, making it easy to find what you need.
                Try Note-It today and see how it can help you keep track of your thoughts, ideas, and tasks. <br />

              </Typography>

            </Item>
          </Grid>
          <Grid item xs={2} sm={2} md={3} lg={4}>
            <Item style={{ marginTop: "50px", textAlign: 'center' }}><PostForm create={create} /></Item>
          </Grid>
        </Grid>
      </Box>
    </Container >
  );
}