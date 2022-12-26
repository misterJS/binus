import {
    Box,
    Button,
    Checkbox,
    Chip,
    FormControl,
    Grid,
    IconButton,
    InputBase,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Slider,
    Typography
} from '@mui/material';
import { Content } from '../components/content';
import SearchIcon from '@mui/icons-material/Search';
import TransgenderIcon from '@mui/icons-material/Transgender';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useNavigate } from 'react-router-dom';

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 100,
        label: '10000',
    },
];

function valuetext(value: number) {
    return `${value}`;
}

function Garden() {
    const navigate = useNavigate()

    return (
        <Content>
            <Box marginBottom={3}>
                <Paper
                    component="form"
                    elevation={0}
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #E0E0E0',
                        borderRadius: 5
                    }}
                >
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'Search...' }}
                    />
                </Paper>
            </Box>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <Paper
                        sx={{
                            p: '24px 16px',
                            borderRadius: 1,
                        }}
                    >
                        <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                            Job Category
                        </Typography>
                        <Box marginLeft={'-10px'} marginBottom={2}>
                            {['Questionnare', 'Paraphrasing', 'Translation', 'Proofread/Editing'].map((item) =>
                                <Box key={item} display={'flex'} gap={0.1} alignItems={'center'}>
                                    <Checkbox />
                                    <Typography variant='body2'>
                                        {item}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                        <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                            Minimum Point:
                        </Typography>
                        <Box sx={{ width: 250, marginBottom: 2 }}>
                            <Slider
                                color="secondary"
                                aria-label="Always visible"
                                defaultValue={80}
                                getAriaValueText={valuetext}
                                step={10}
                                marks={marks}
                                valueLabelDisplay="on"
                            />
                        </Box>
                        <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                            Sort By:
                        </Typography>
                        <FormControl sx={{ mt: 2, mb: 10 }} size="small" fullWidth>
                            <InputLabel id="relevance-label">Relevance</InputLabel>
                            <Select
                                labelId="relevance-label"
                                placeholder='Relevance'
                                fullWidth
                                label="Relevance"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Twenty</MenuItem>
                                <MenuItem value={21}>Twenty one</MenuItem>
                                <MenuItem value={22}>Twenty one and a half</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            <Typography fontWeight={600} sx={{ textTransform: 'capitalize' }} variant='body1' color={'#fff'}>
                                Filter
                            </Typography>
                        </Button>
                        <div style={{ marginBottom: 10 }}></div>
                        <Button
                            color="primary"
                            variant="outlined"
                        >
                            <Typography fontWeight={600} sx={{ textTransform: 'none' }} variant='body1'>
                                Post a Job
                            </Typography>
                        </Button>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Paper
                                sx={{
                                    p: '24px 16px',
                                    borderRadius: 1,
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ marginBottom: 2 }}
                                >
                                    <Grid item>
                                        <Box display="flex" gap={1}>
                                            <img src='/icons/star.svg' alt="star" />
                                            <Typography
                                                fontWeight={600}
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                10.000
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Chip sx={{ backgroundColor: '#0C54A0BF', color: '#fff' }} label="Promoted" />
                                    </Grid>
                                </Grid>
                                <Typography
                                    variant='body2'
                                    color="#497FB8"
                                >
                                    3 day left
                                </Typography>
                                <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                    Penelitian Psikologi Terhadap Masyarakat
                                </Typography>
                                <Typography variant='subtitle2' color={'#5E5873'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    sx={{ marginBottom: 3, marginTop: 2 }}
                                >
                                    <Grid item>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <TransgenderIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                All Gender
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <PersonOutlineOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                All Ages
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <PlaceOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Jakarta
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <ArticleOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                S1 Undergraduate
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <WorkOutlineOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Paraphrasing
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    onClick={() => navigate("job-detail")}
                                >
                                    <Typography fontWeight={600} sx={{ textTransform: 'capitalize' }} variant='body1' color={'#fff'}>
                                        Open Project
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item md={6}>
                            <Paper
                                sx={{
                                    p: '24px 16px',
                                    borderRadius: 1,
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ marginBottom: 2 }}
                                >
                                    <Grid item>
                                        <Box display="flex" gap={1}>
                                            <img src='/icons/star.svg' alt="star" />
                                            <Typography
                                                fontWeight={600}
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                10.000
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Chip sx={{ backgroundColor: '#0C54A0BF', color: '#fff' }} label="Promoted" />
                                    </Grid>
                                </Grid>
                                <Typography
                                    variant='body2'
                                    color="#497FB8"
                                >
                                    3 day left
                                </Typography>
                                <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                    Penelitian Psikologi Terhadap Masyarakat
                                </Typography>
                                <Typography variant='subtitle2' color={'#5E5873'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    sx={{ marginBottom: 3, marginTop: 2 }}
                                >
                                    <Grid item>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <TransgenderIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                All Gender
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <PersonOutlineOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                All Ages
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <PlaceOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Jakarta
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <ArticleOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                S1 Undergraduate
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <WorkOutlineOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Paraphrasing
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    onClick={() => navigate("job-detail")}
                                >
                                    <Typography fontWeight={600} sx={{ textTransform: 'capitalize' }} variant='body1' color={'#fff'}>
                                        Open Project
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item md={6}>
                            <Paper
                                sx={{
                                    p: '24px 16px',
                                    borderRadius: 1,
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ marginBottom: 2 }}
                                >
                                    <Grid item>
                                        <Box display="flex" gap={1}>
                                            <img src='/icons/star.svg' alt="star" />
                                            <Typography
                                                fontWeight={600}
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                10.000
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Chip sx={{ backgroundColor: '#0C54A0BF', color: '#fff' }} label="Promoted" />
                                    </Grid>
                                </Grid>
                                <Typography
                                    variant='body2'
                                    color="#497FB8"
                                >
                                    3 day left
                                </Typography>
                                <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                    Penelitian Psikologi Terhadap Masyarakat
                                </Typography>
                                <Typography variant='subtitle2' color={'#5E5873'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    sx={{ marginBottom: 3, marginTop: 2 }}
                                >
                                    <Grid item>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <TransgenderIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                All Gender
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <PersonOutlineOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                All Ages
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <PlaceOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Jakarta
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <ArticleOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                S1 Undergraduate
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <WorkOutlineOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Paraphrasing
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    onClick={() => navigate("job-detail")}
                                >
                                    <Typography fontWeight={600} sx={{ textTransform: 'capitalize' }} variant='body1' color={'#fff'}>
                                        Open Project
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item md={6}>
                            <Paper
                                sx={{
                                    p: '24px 16px',
                                    borderRadius: 1,
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ marginBottom: 2 }}
                                >
                                    <Grid item>
                                        <Box display="flex" gap={1}>
                                            <img src='/icons/star.svg' alt="star" />
                                            <Typography
                                                fontWeight={600}
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                10.000
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Chip sx={{ backgroundColor: '#0C54A0BF', color: '#fff' }} label="Promoted" />
                                    </Grid>
                                </Grid>
                                <Typography
                                    variant='body2'
                                    color="#497FB8"
                                >
                                    3 day left
                                </Typography>
                                <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                    Penelitian Psikologi Terhadap Masyarakat
                                </Typography>
                                <Typography variant='subtitle2' color={'#5E5873'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    sx={{ marginBottom: 3, marginTop: 2 }}
                                >
                                    <Grid item>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <TransgenderIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                All Gender
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <PersonOutlineOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                All Ages
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <PlaceOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Jakarta
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <ArticleOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                S1 Undergraduate
                                            </Typography>
                                        </Box>
                                        <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                            <WorkOutlineOutlinedIcon />
                                            <Typography
                                                sx={{ textTransform: 'none' }}
                                                variant='body2'
                                            >
                                                Paraphrasing
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    onClick={() => navigate("job-detail")}
                                >
                                    <Typography fontWeight={600} sx={{ textTransform: 'capitalize' }} variant='body1' color={'#fff'}>
                                        Open Project
                                    </Typography>
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    );
}

export default Garden;
