import { AppBar, Box, Container, createStyles, FormControl, FormGroup, InputLabel, makeStyles, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Theme, Toolbar, Typography } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import { padding } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers';
import { arrayIncludes } from '@mui/x-date-pickers/internals/utils/utils';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import logo from "../images/logo.png";

const EauctionLandingPage = () => {

   
   type bid = {
    bidAmount: number,
    name: string,
    email: string,
    mobile: number

   }


    type bidDetais = {


        pkid: number
        name: string,
        shortDescription: string,
        detailedDescription: string,
        category: string,
        startingPrice: string,
        biddingEndDate: string,
        bids: bid[]

    }



    const [rowdata, setRowdata] = useState<bidDetais>();


    const mockjson: bidDetais[] = [
        {
            pkid: 1,
            name: "Bike",
            shortDescription: "pulsur bike",
            detailedDescription: "pulsur bike 160CC",
            category: "Automobile",
            startingPrice: "30000",
            biddingEndDate: "11/06/2023",
            bids: [
                {
                    bidAmount: 10000,
                    name: "Rama",
                    email: "raam.gmail.com",
                    mobile: 12345678
                },
                {
                    bidAmount: 10004,
                    name: "Raja",
                    email: "raam.gmail.com",
                    mobile: 12345678
                },

            ]

        },

        {
            pkid: 2,
            name: "Car",
            shortDescription: "Hundai",
            detailedDescription: "Hundai i20",
            category: "Automobile",
            startingPrice: "200000",
            biddingEndDate: "11/03/2023",
            bids: [
                {
                    bidAmount: 30003,
                    name: "Eric",
                    email: "eric@outlook.com",
                    mobile: 987654367
                },
                {
                    bidAmount: 30002,
                    name: "Fred",
                    email: "eric@outlook.com",
                    mobile: 987654367
                }

            ]

        }]

    const options = ['Pulser Bike', 'Toyota Car'];

    const buildOption = (input: bidDetais[]) => {

        const arr: string[] = [];


        input.map(i => {
            arr.push(i.name)
        })


        return arr;

    }



   

        return (

        <div>
            <Container maxWidth="sm">
                <AppBar ><Toolbar>

                    <img src={logo} alt="Kitty Katty!" />
                    <Typography variant="h6" component="div" align='center'>EAuction</Typography>



                </Toolbar>


                </AppBar>

                <div style={{ marginTop: '100px' }}>

                    <FormControl fullWidth>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={buildOption(mockjson)}
                            sx={{ width: 600 }}
                            renderInput={(params) => <TextField {...params} label="Products" />}
                            onChange={(e,v)=>{

                                const obj = mockjson.find(f=>f.name==v)
                                setRowdata(obj);
                            }}
                        />




                    </FormControl>



                </div>

            </Container>

            <Container maxWidth='md'>

                <div style={{ paddingTop: '24px', paddingLeft: '56px' }}>
                    <FormGroup row>

                        <h5>Product Name : &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <TextField id="standard-basic" label={rowdata?.name} variant="outlined" disabled={true} style={{ width: 500 }}></TextField>



                    </FormGroup>

                    <FormGroup row>

                        <h5>Short Description : &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <TextField id="standard-basic" label={rowdata?.shortDescription} variant="outlined" disabled={true} style={{ width: 500 }}></TextField>

                    </FormGroup>

                    <FormGroup row>

                        <h5>Detailed Description : &nbsp; &nbsp;</h5>
                        <TextField id="standard-basic" label={rowdata?.detailedDescription} variant="outlined" disabled={true} style={{ width: 500 }}></TextField>

                    </FormGroup>

                    <FormGroup row>

                        <h5>Category : &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <TextField id="standard-basic" label={rowdata?.category} variant="outlined" disabled={true} style={{ width: 500 }}></TextField>

                    </FormGroup>
                    <FormGroup row>

                        <h5>Starting Price : &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;</h5>
                        <TextField id="standard-basic" label={rowdata?.startingPrice} variant="outlined" disabled={true} style={{ width: 500 }}></TextField>

                    </FormGroup>
                    <FormGroup row>
                        {/* <Typography variant="h6" component="div" >Bidding End Date : </Typography> */}

                        <h5>Bidding End Date : &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <DatePicker sx={{ width: "58.5% " }} label={rowdata?.biddingEndDate}  readOnly />

                    </FormGroup>
                </div>
            </Container>
            <div style={{ paddingLeft: '125px', paddingRight: '25px', justifyContent: 'center' }}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell><h5>Bid Amount</h5></TableCell>
                                <TableCell ><h5>Name</h5></TableCell>
                                <TableCell ><h5>Email</h5></TableCell>
                                <TableCell ><h5>Mobile</h5></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowdata?.bids.map((row, index) => (
                                <TableRow>
                                    <TableCell >{row.bidAmount}</TableCell>
                                    <TableCell >{row.name}</TableCell>
                                    <TableCell >{row.email}</TableCell>
                                    <TableCell >{row.mobile}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>



        </div>)


}

export default EauctionLandingPage;