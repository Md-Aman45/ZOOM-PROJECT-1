// import React, { useContext, useState } from 'react'
// import withAuth from '../utils/withAuth';
// import { useNavigate } from 'react-router-dom'
// import "../App.css";
// import { Button, IconButton, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import { AuthContext } from '../contexts/AuthContext';

// function HomeComponent() {


//     let navigate = useNavigate();
//     const [meetingCode, setMeetingCode] = useState("");


//     const {addToUserHistory} = useContext(AuthContext);
//     let handleJoinVideoCall = async () => {
//         await addToUserHistory(meetingCode)
//         navigate(`/${meetingCode}`)
//     }

//     return (
//         <>

//             <div className="navBar">

//                 <div style={{ display: "flex", alignItems: "center" }}>

//                     <h2>My Video Call</h2>
                    
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={
//                         () => {
//                             navigate("/history")
//                         }
//                     }>
//                         <RestoreIcon />
//                     <p>History</p>
//                     </IconButton>

//                     <Button onClick={() => {
//                         localStorage.removeItem("token")
//                         navigate("/auth")
//                     }}>
//                         Logout
//                     </Button>
//                 </div>


//             </div>


//             <div className="meetContainer">
//                 <div className="leftPanel">
//                     <div>
//                         <h2>Providing Quality Video Call Just Like Quality Education</h2>

//                         <div style={{ display: 'flex', gap: "10px" }}>

//                             <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     <img srcSet='/logo3.png' alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }


// export default withAuth(HomeComponent)



import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import {
  Button,
  IconButton,
  TextField,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Paper,
} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState('');
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (!meetingCode) return;
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">My Video Call</Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              startIcon={<RestoreIcon />}
              variant="outlined"
              onClick={() => navigate('/history')}
              color="inherit"
              sx={{ textTransform: 'none' }}
            >
              History
            </Button>

            <Button
              variant="contained"
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/auth');
              }}
              color="secondary"
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Body */}
      <Box
        sx={{
          display: 'flex',
          height: 'calc(100vh - 64px)',
        }}
      >
        {/* Left Panel */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
          }}
        >
          <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, width: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Providing Quality Video Call Just Like Quality Education
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label="Enter Meeting Code"
                variant="outlined"
                onChange={(e) => setMeetingCode(e.target.value)}
              />
              <Button variant="contained" onClick={handleJoinVideoCall}>
                Join
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* Right Panel */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
          }}
        >
          <img
            src="/logo3.png"
            alt="Video Illustration"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '16px' }}
          />
        </Box>
      </Box>
    </>
  );
}

export default withAuth(HomeComponent);
