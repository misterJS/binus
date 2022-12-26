import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { FC, memo, ReactNode, useState } from "react"
import { AddUserBold, LogoutBold, PasswordBold } from "../../assets/icon-apps";

interface PopupUserProps {
    children: ReactNode
}

const PopupUserMemo: FC<PopupUserProps> = (props) => {
    const { children } = props
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <span onClick={handleClick}>
                {children}
            </span>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem sx={{ display: 'flex', gap: 1, flexDirection: 'row'}}>
                    <AddUserBold /> Profile
                </MenuItem>
                <MenuItem sx={{ display: 'flex', gap: 1, flexDirection: 'row'}}>
                    <PasswordBold /> Change Password
                </MenuItem>
                <MenuItem sx={{ display: 'flex', gap: 1, flexDirection: 'row'}}>
                    <LogoutBold /> Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export const PopupUser = memo(PopupUserMemo)