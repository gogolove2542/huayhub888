"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';


export default function Profile() {
    const { data: session } = useSession();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <CssBaseline /> {/* ใส่ CssBaseline เพื่อรับสไตล์พื้นฐานของ Material-UI */}
            <Container maxWidth="" sx={{ bgcolor: '#fff59d', height: '100vh' }} className="font-bold">
                <Box display="flex" justifyContent="center">
                    <Card className="shadow-xl mt-3 p-6 w-3/6">
                        <Link href="/dashboard">
                            <IconButton aria-label="delete" size="large">
                                <ArrowBackIcon fontSize="inherit" />
                            </IconButton> กลับหน้าแรก
                        </Link>
                        <div class="mt-3 text-center">
                            <Typography variant="h6" className="mt-3 ">
                                ชื่อ-นามสกุล: {session?.user?.name}
                            </Typography>
                            <Typography variant="h6" className="mt-3 ">
                                เบอร์โทร: {session?.user?.name}
                            </Typography>
                            <Typography variant="h6" className="mt-3 ">
                                ธนาคาร: {session?.user?.name}
                            </Typography>
                            <Typography variant="h6" className="mt-3 ">
                                หมายเลขบัญชี: {session?.user?.name}
                            </Typography>
                            <Typography variant="h6" className="mt-3 ">
                                วันที่สมัคร: {session?.user?.name}
                            </Typography>
                        </div>
                        <div className="mt-3 flex justify-center">
                            <Button onClick={() => signOut()} variant="outlined" color="error">
                                ออกจากระบบ
                            </Button>
                        </div>
                        <hr class="mt-3 mb-3"></hr>
                        <Typography variant="h6" className="mt-3 ">
                            เปลี่ยนรหัสผ่าน / Change Your Password
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="รหัสผ่านปัจจุบัน"
                                type="password"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="รหัสผ่านที่ต้องการเปลี่ยน"
                                type="password"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="ระบุรหัสผ่านอีกครั้ง"
                                type="password"
                                fullWidth
                                margin="normal"
                            />
                            <div className="flex justify-center">
                                <Button variant="outlined" color="secondary">
                                    เปลี่ยนรหัสผ่าน
                                </Button>
                            </div>
                        </form>
                    </Card>
                </Box>
            </Container>
        </>
    );
}
