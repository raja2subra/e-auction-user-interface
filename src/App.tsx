import React from 'react';
import logo from './logo.svg';
import './App.css';
import EauctionLandingPage from './components/EauctionLandingPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <EauctionLandingPage></EauctionLandingPage>
    </LocalizationProvider>
  );
}

export default App;
