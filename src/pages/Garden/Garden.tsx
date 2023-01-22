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
    TextField,
    Typography
} from '@mui/material';
import { useEffect } from 'react';
import { Content } from '../../components/content';
import { Controller, useForm } from "react-hook-form";
import SearchIcon from '@mui/icons-material/Search';
import TransgenderIcon from '@mui/icons-material/Transgender';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useNavigate } from 'react-router-dom';
import { useGardenSetup } from './Garden.utils';

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
    const { getProjectsList, garden } = useGardenSetup()
    const navigate = useNavigate()

    useEffect(() => {
        if (garden.projects.length === 0) {
            getProjectsList()
        }
    }, [garden.projects])

    const handleChange = (data: any) => {
        console.log(data);
    }

    const { handleSubmit, getValues, trigger, setValue, control, formState: { errors } } = useForm()

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
                        <form onSubmit={handleSubmit(handleChange)}>
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
                                Point:
                            </Typography>
                            <Box sx={{ mt: 2, mb: 2 }}>
                                <Controller
                                    name='minPoint'
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            sx={{ marginBottom: 2 }}
                                            placeholder='Min. Point'
                                            type="text"
                                            size="small"
                                            fullWidth
                                        />
                                    )}
                                />
                                <Controller
                                    name='maxPoint'
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            placeholder='Max. Point'
                                            type="text"
                                            size="small"
                                            fullWidth
                                        />
                                    )}
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
                                    <MenuItem value={10}>Relevance</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                color="primary"
                                variant="contained"
                                fullWidth
                            >
                                <Typography fontWeight={600} sx={{ textTransform: 'capitalize' }} variant='body1' color={'#fff'}>
                                    Filter
                                </Typography>
                            </Button>
                            <div style={{ marginBottom: 10 }}></div>
                            <Button
                                color="primary"
                                variant="outlined"
                                fullWidth
                            >
                                <Typography fontWeight={600} sx={{ textTransform: 'none' }} variant='body1'>
                                    Post a Job
                                </Typography>
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item md={8}>
                    <Grid container spacing={2}>
                        {garden.projects?.returnValue?.map((project: any) =>
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
                                                    {project.pointReward}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Chip sx={{ backgroundColor: '#F9CE30', color: '#fff' }} label={project.status} />
                                        </Grid>
                                    </Grid>
                                    <Typography
                                        variant='body2'
                                        color="#497FB8"
                                    >
                                        3 day left
                                    </Typography>
                                    <Typography variant='body1' color={'#5E5873'} fontWeight={700}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant='subtitle2' color={'#5E5873'}>
                                        {project.description}
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
                                                    {project.gender}
                                                </Typography>
                                            </Box>
                                            <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                                <PersonOutlineOutlinedIcon />
                                                <Typography
                                                    sx={{ textTransform: 'none' }}
                                                    variant='body2'
                                                >
                                                    {project.projectAgesName}
                                                </Typography>
                                            </Box>
                                            <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                                <PlaceOutlinedIcon />
                                                <Typography
                                                    sx={{ textTransform: 'none' }}
                                                    variant='body2'
                                                >
                                                    {project.locationName}
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
                                                    {project.educationLevel}
                                                </Typography>
                                            </Box>
                                            <Box display="flex" sx={{ mb: 0.5 }} gap={1}>
                                                <WorkOutlineOutlinedIcon />
                                                <Typography
                                                    sx={{ textTransform: 'none' }}
                                                    variant='body2'
                                                >
                                                    {project.projectCategoryName}
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
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    );
}

export default Garden;
