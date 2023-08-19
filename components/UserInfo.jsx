"use client";

import { useSession } from "next-auth/react";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";

export default function SimpleContainer() {
  const { data: session } = useSession();
  return (
    <>
      <CssBaseline /> {/* ใส่ CssBaseline เพื่อรับสไตล์พื้นฐานของ Material-UI */}
      <Container maxWidth="" sx={{ bgcolor: '#fff59d', height: '100vh' }}>
        <Box display="flex" justifyContent="center" height="100vh">
          <Card className="shadow-xl mt-3 p-6 w-3/6">
            <Typography>
              ยินดีต้อนรับเข้าสู่ Huay Hub 888 
            </Typography>
          </Card>
        </Box>
      </Container>

    </>
  );
}
