import { Box } from '@mui/material';
import React from 'react';
import Image from '../shared/assets/background.jpeg'
import NavBar from '../shared/components/navBar';


export default function Landing() {
    return (
        <React.Fragment>
            <Box style={{ backgroundImage: `url(${Image})`, height: '100vh', backgroundSize: 'cover' }}>
                <NavBar />
            </Box>

        </React.Fragment>
    );
}