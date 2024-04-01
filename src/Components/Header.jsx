import React, { useState } from 'react'
import logo from "/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Box, Button, IconButton, Input, InputAdornment, InputBase, Menu, MenuItem, Modal, TextField, Typography } from '@mui/material';
import { deleteUser } from '../Reducers/users.slice';
import { useDispatch } from 'react-redux';
import { style } from '../styles/modal.style';
import { filterBooks } from '../Reducers/books.slice';
const Header = ({ }) => {
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openModal, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <div className='flex justify-between items-center py-[12px]'>
            <div className='flex items-center gap-8'>
                <img src={logo} alt="" />
                <Input
                    sx={{ color: "white", padding: "4px 10px", borderRadius: '6px' }}
                    placeholder='Search for any training you want'
                    startAdornment={
                        <InputAdornment sx={{ color: "white" }} position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </div>
            <div className='flex items-center gap-1'>
                <div>
                    <IconButton onClick={handleClick}>
                        <img src="https://picsum.photos/400" className='rounded-full w-[40px] h-[40px] border-[3px] border-red-600 cursor-pointer' />
                    </IconButton>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={() => { handleModalOpen(), handleClose() }}>Logout</MenuItem>
                    </Menu>
                    <Modal
                        open={openModal}
                        onClose={handleModalClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Do you really want to go out?
                            </Typography>
                            <div className='w-full flex justify-end'>
                                <Button onClick={() => dispatch(deleteUser())} color='error'>Logout</Button>
                                <Button onClick={handleModalClose}>Cancel</Button>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div >
    )
}

export default Header