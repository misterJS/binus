import React, { memo } from "react"
import {
    Container,
    Paper,
    Typography,
    FormControl,
    Box,
    TextField
} from "@mui/material";
import { Button } from "../../components/button";

const ForgotPasswordMemo = () => {
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
                        Forgot Password
                    </Typography>
                </Box>

                <Typography sx={{ textAlign: "center", my: 2 }}>
                    Input your registered email and check your email for resetting account
                </Typography>

                <Typography variant='body2' color={'#4F4F4F'} fontWeight={500}>
                    Email
                </Typography>
                <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                    <TextField
                        id="email"
                        placeholder='Email'
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

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Button color="primary" variant="contained" fullwidth>
                        <Typography
                            sx={{ textTransform: 'none', fontWeight: 700 }}
                            variant='body2'
                        >
                            Submit
                        </Typography>
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export const ForgotPassword = memo(ForgotPasswordMemo);