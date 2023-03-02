import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import { memo, useState } from "react";
import { ActivityBold } from "../../../assets/icon-apps";
import { Content } from "../../../components";
import { useTransactionManagement } from "./TransactionManagement.utils";
import { ListRanking } from "./_partials";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TransactionManagementMemo = () => {
    const [{ }, { set }] = useTransactionManagement();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (newValue === 0) {
            set("tab", "approval")
        } else if (newValue === 1) {
            set("tab", "active")
        } else {
            set("tab", "closed")
        }
    };
    return (
        <>
            <Content>
                <Paper
                    sx={{
                        p: '24px 16px',
                        borderRadius: 1,
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}  >
                        <ActivityBold />
                        <Typography variant='h5' color={'#5E5873'} fontWeight={700}>
                            Transaction Management
                        </Typography>
                    </Box>
                    <Box marginTop={3}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab
                                label={
                                    <Typography
                                        sx={{ textTransform: 'none', fontWeight: 700 }}
                                        variant='body2'
                                    >
                                        Approval
                                    </Typography>
                                }
                                {...a11yProps(0)}
                            />
                            <Tab
                                label={
                                    <Typography
                                        sx={{ textTransform: 'none', fontWeight: 500 }}
                                        variant='body2'
                                    >
                                        Active
                                    </Typography>
                                }
                                {...a11yProps(1)}
                            />
                            <Tab
                                label={
                                    <Typography
                                        sx={{ textTransform: 'none', fontWeight: 500 }}
                                        variant='body2'
                                    >
                                        Closed
                                    </Typography>
                                }
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </Box>
                    <ListRanking />
                </Paper>
            </Content>
        </>
    )
}

export const TransactionManagement = memo(TransactionManagementMemo)