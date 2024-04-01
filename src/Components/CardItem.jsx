import { Box, Button, Card, IconButton, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { style } from '../styles/modal.style';
import { useDispatch } from 'react-redux';
import { deleteBook, setStatus } from '../Reducers/books.slice';
import AddBookForm from './addBookForm';


const CardItem = ({ item }) => {
    const dispatch = useDispatch()
    const [hoverCard, setHoverCard] = useState(false)
    const [openModal, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);


    return (
        <Card onDoubleClick={() => dispatch(setStatus(item))} onMouseEnter={() => setHoverCard(true)} onMouseLeave={() => setHoverCard(false)} sx={{ borderRadius: "12px", padding: "24px", cursor: "pointer", position: "relative", }} >
            <div>
                <h1 className='font-[600] text-[#151515] mb-1'>{item.title}</h1>
                <p className='text-[14px] text-[#333] font-[400]'>Pages: {item.pages}</p>
                <p className='text-[14px] text-[#333] font-[400]'>Published: {item.date}</p>
            </div>
            <div className='flex justify-between items-center gap-2 mt-7'>
                <p className='text-[14px] text-[#333] font-[400]'>{item.author} / {item.datePublication}</p>
                <div style={item.status === "New" ? { backgroundColor: "red" } : item.status === "Reading" ? { backgroundColor: "#e6b400" } : { backgroundColor: "green" }} className='py-[2px] px-[12px] bg-[#ff0000] rounded-[6px] transition-all duration-300'>
                    <p className='text-[14px] text-white'>{item.status}</p>
                </div>
            </div>
            <div style={hoverCard ? { display: "flex" } : { display: "none" }} className='flex-col items-end absolute right-[8px] top-[16px]'>
                <IconButton sx={{ width: "36px", height: "36px" }} onClick={handleModalOpen} color='error' >
                    <MdDeleteOutline />
                </IconButton>
            </div>
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Do you really want to delete it?
                    </Typography>
                    <div className='w-full flex justify-end'>
                        <Button onClick={() => dispatch(deleteBook(item))} color='error'>Delete</Button>
                        <Button onClick={handleModalClose}>Cancel</Button>
                    </div>
                </Box>
            </Modal>

        </Card>
    )
}

export default CardItem