"use client"; // ต้องใส่ use client ด้านบน

import * as React from 'react';
import { useSession } from "next-auth/react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

const pages = ['สินค้า', 'ค่าบริการ', 'ติดต่อ'];
const settings = ['โปรไฟล์', 'ข้อมูลบัญชี', 'รายงาน', 'ออกจากระบบ'];

function Navbar() {
    const { data: session } = useSession();
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'red' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    </Toolbar>
                </Container>
            </AppBar>
            <AppBar position="static" sx={{ backgroundColor: '#fff59d', color: 'black' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item xs={4}>
                                <Link href="/profile" passHref>
                                    <Typography className='font-bold'>
                                        <PersonIcon />
                                        {session?.user?.name}
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Box
                                    margin="10px"
                                    display="flex"
                                    justifyContent="center"
                                    bgcolor="white"
                                    borderRadius="30px"
                                    p={2}
                                >
                                    <Typography variant="body1" className='mr-2'>
                                        ยอดเงินคงเหลือ : 0.00 บาท
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box display="flex" justifyContent="center">
                                    <IconButton aria-label="NotificationsActiveIcon" sx={{ color: 'black' }} size="large">
                                        <NotificationsActiveIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <AppBar position="static" sx={{ backgroundColor: 'red', height: 65 }}>
                    <Toolbar className='rounder-md font-bold'>
                        <marquee><h5>เว็บหวยที่จ่ายเยอะที่สุด 3ตัว1000 2ตัว100 ระบบออโต้ ฝาก-ถอนไวที่สุด มั่นคง ปลอดภัย การันตีการเงิน100%</h5></marquee>
                    </Toolbar>
            </AppBar>
        </>
    );
}
export default Navbar;