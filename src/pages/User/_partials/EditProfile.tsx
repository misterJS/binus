import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material';
import { memo } from 'react'
import { Content } from '../../../components';

const EditProfileMemo = () => {
    return (
        <Content>
            <Paper
                sx={{
                    p: '24px 16px',
                    mt: 3,
                    boxShadow: 'none',
                    border: '1px solid #E0E0E0',
                    borderRadius: 1,
                }}
            >
                <Grid container sx={{ alignItems: 'center' }} spacing={1}>
                    <Grid item>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70435 1.51898C8.03402 1.51898 7.46373 1.9848 7.30365 2.61265H12.6863C12.5263 1.9848 11.956 1.51898 11.2856 1.51898H8.70435ZM14.2071 2.61264H16.1881C18.2891 2.61264 20 4.34428 20 6.47085C20 6.47085 19.94 7.3711 19.92 8.62477C19.918 8.72401 19.8699 8.82122 19.7909 8.87996C19.3097 9.2354 18.8694 9.52907 18.8294 9.54932C17.1686 10.6632 15.2386 11.447 13.1826 11.8369C13.0485 11.8632 12.9165 11.7934 12.8484 11.6739C12.2721 10.6754 11.1956 10.0253 9.995 10.0253C8.8024 10.0253 7.71586 10.6683 7.12256 11.6678C7.05353 11.7853 6.92346 11.8531 6.7904 11.8278C4.75138 11.4369 2.82141 10.6541 1.17059 9.55945L0.210105 8.89109C0.130065 8.84046 0.08004 8.74932 0.08004 8.64806C0.050025 8.13161 0 6.47085 0 6.47085C0 4.34428 1.71086 2.61264 3.81191 2.61264H5.78289C5.97299 1.1443 7.2036 0 8.70435 0H11.2856C12.7864 0 14.017 1.1443 14.2071 2.61264ZM19.6598 10.8152L19.6198 10.8355C17.5988 12.1924 15.1676 13.0937 12.6163 13.4684C12.2561 13.519 11.8959 13.2861 11.7959 12.9216C11.5758 12.0912 10.8654 11.5443 10.015 11.5443H10.005H9.98499C9.13457 11.5443 8.42421 12.0912 8.2041 12.9216C8.10405 13.2861 7.74387 13.519 7.38369 13.4684C4.83242 13.0937 2.4012 12.1924 0.38019 10.8355C0.370185 10.8254 0.270135 10.7646 0.190095 10.8152C0.10005 10.8659 0.10005 10.9874 0.10005 10.9874L0.170085 16.1519C0.170085 18.2785 1.87094 20 3.97199 20H16.018C18.1191 20 19.8199 18.2785 19.8199 16.1519L19.9 10.9874C19.9 10.9874 19.9 10.8659 19.8099 10.8152C19.7599 10.7849 19.6999 10.795 19.6598 10.8152ZM10.7454 15.0583C10.7454 15.4836 10.4152 15.8177 9.995 15.8177C9.58479 15.8177 9.24462 15.4836 9.24462 15.0583V13.7519C9.24462 13.3367 9.58479 12.9924 9.995 12.9924C10.4152 12.9924 10.7454 13.3367 10.7454 13.7519V15.0583Z" fill="#5E5873" />
                        </svg>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="div"
                            fontWeight={700}
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Edit Profile
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', width: '140px', flexDirection: 'column' }}>
                    <Box>
                        <img width="129px" src='/photos/default.png' />
                    </Box>
                    <Button variant="contained" size='small' sx={{ mt: 1 }} >Upload Photo</Button>
                    <Typography variant='body2' fontSize="12px" color={'#4F4F4F'} textAlign="center" fontWeight={500} sx={{ mt: 2 }}>
                        (Max. file size 2 Mb, only supports .jpg, .png, .jpeg)
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                                Office/University:
                            </Typography>
                            <FormControl size="small" fullWidth>
                                <TextField
                                    type="text"
                                    placeholder=''
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </>
                    </Grid>
                    <Grid item md={6}>
                        <>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                                Email:
                            </Typography>
                            <FormControl size="small" fullWidth>
                                <TextField
                                    type="text"
                                    placeholder=''
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </>
                    </Grid>
                    <Grid item md={6}>
                        <>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                                Major:
                            </Typography>
                            <FormControl size="small" fullWidth>
                                <TextField
                                    type="text"
                                    placeholder=''
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </>
                    </Grid>
                    <Grid item md={6}>
                        <>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                                Year Class:
                            </Typography>
                            <FormControl size="small" fullWidth>
                                <TextField
                                    type="text"
                                    placeholder=''
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </>
                    </Grid>
                    <Grid item md={6}>
                        <>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                                Username:
                            </Typography>
                            <FormControl size="small" fullWidth>
                                <TextField
                                    type="text"
                                    placeholder=''
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </>
                    </Grid>
                    <Grid item md={6}>
                        <>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                                NIM:
                            </Typography>
                            <FormControl size="small" fullWidth>
                                <TextField
                                    type="text"
                                    placeholder=''
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </>
                    </Grid>
                    <Grid item md={6}>
                        <>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                                Fullname:
                            </Typography>
                            <FormControl size="small" fullWidth>
                                <TextField
                                    type="text"
                                    placeholder=''
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </>
                    </Grid>
                    <Grid item md={6}>
                        <>
                            <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                                Phone Number:
                            </Typography>
                            <FormControl size="small" fullWidth>
                                <TextField
                                    type="text"
                                    placeholder=''
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </>
                    </Grid>
                </Grid>
                <>
                    <Typography variant='body2' color={'#4F4F4F'} fontWeight={500} sx={{ mt: 2 }}>
                        Bio
                    </Typography>
                    <FormControl sx={{ mt: 1, mb: 2 }} size="small" fullWidth>
                        <TextField
                            type="text"
                            placeholder='Bio'
                            size="small"
                            multiline
                            rows={6}
                            fullWidth
                        />
                    </FormControl>
                </>
                <Box sx={{ display: 'flex', justifyContent: 'right', gap: 2 }}>
                    <Button variant="contained" color='inherit'>Cancel</Button>
                    <Button variant="contained">Submit</Button>
                </Box>
            </Paper>
        </Content>
    )
}

export const EditProfile = memo(EditProfileMemo);