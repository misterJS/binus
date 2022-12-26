import React, { memo } from "react"
import {
    Container,
    Paper,
    Typography,
    FormControl,
    Box,
    TextField
} from "@mui/material";
import { Button } from "../../../components/button";

const RegistrationMemo = () => {
    return (
        <Container maxWidth="xs" sx={{ py: 20 }}>
            <Paper sx={{
                p: '24px 16px',
                backgroundColor: '#F2F2F2',
                boxShadow: 'none',
                border: '1px solid #E0E0E0',
            }}>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1, my: 2 }}>
                    <Typography variant="h5" sx={{ textAlign: "center", my: 2, fontWeight: 700, color: "#028ED5" }}>
                        Registration
                    </Typography>
                </Box>

                <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Email:
                </Typography>
                <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                    <TextField
                        id="email"
                        placeholder='Email'
                        size="small"
                        fullWidth
                    />
                </FormControl>

                <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Username:
                </Typography>
                <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                    <TextField
                        id="username"
                        placeholder='User Name'
                        size="small"
                        fullWidth
                    />
                </FormControl>

                <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Phone No:
                </Typography>
                <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                    <TextField
                        id="phone"
                        placeholder='Phone'
                        size="small"
                        fullWidth
                    />
                </FormControl>

                <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Full Name:
                </Typography>
                <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                    <TextField
                        id="fullname"
                        placeholder='Full Name'
                        size="small"
                        fullWidth
                    />
                </FormControl>


                <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Company or University Name:
                </Typography>
                <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                    <TextField
                        id="institution"
                        placeholder='Institution'
                        size="small"
                        fullWidth
                    />
                </FormControl>

                <img src='/photos/captca.png' alt="logo" />
                <Typography sx={{ mt: 2 }} variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Type the text
                </Typography>
                <FormControl sx={{ mt: 1, mb: 3 }} size="small" fullWidth>
                    <TextField
                        id="captcha"
                        size="small"
                        fullWidth
                    />
                </FormControl>

                <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Password:
                </Typography>
                <FormControl sx={{ mt: 1, mb: 3 }} size="small" fullWidth>
                    <TextField
                        id="password"
                        placeholder='Password'
                        type="password"
                        size="small"
                        fullWidth
                    />
                </FormControl>

                <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Confirm Password:
                </Typography>
                <FormControl sx={{ mt: 1, mb: 3 }} size="small" fullWidth>
                    <TextField
                        id="confirm-password"
                        placeholder='Password'
                        type="password"
                        size="small"
                        fullWidth
                    />
                </FormControl>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Button color="primary" variant="contained" fullwidth>
                        <Typography
                            sx={{ textTransform: 'none', fontWeight: 700 }}
                            variant='body2'
                        >
                            Submit
                        </Typography>
                    </Button>
                    <Button color="primary" variant="contained" fullwidth>
                        <Typography
                            sx={{ textTransform: 'none', fontWeight: 700 }}
                            variant='body2'
                        >
                            Back to Login
                        </Typography>
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export const Registration = memo(RegistrationMemo);