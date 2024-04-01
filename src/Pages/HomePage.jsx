import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import AddIcon from '@mui/icons-material/Add';
import CardItem from '../Components/CardItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Modal, Typography } from '@mui/material';
import { style } from '../styles/modal.style';
import AddBookForm from '../Components/addBookForm';
const HomePage = () => {
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()
    const { books, filteredBooks } = useSelector(state => state.books)
    useEffect(() => { user.length === 0 && navigate("/register") }, [user])
    const [openModal, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <div className='max-h-screen overflow-y-hidden'>
            <Header />
            <div className='flex justify-between mt-5 items-center'>
                <h1 className='text-[#FEFEFE] text-[36px] font-[700]'>{books.length === 0 ? `You've not books` : books.length === 1 ? `You've got 1 book` : `You've got ${books.length} books`}</h1>
                <button onClick={handleModalOpen} className='bg-[#6200EE] py-[10px] px-[24px] rounded-[4px] text-[#FEFEFE] font-[500] flex items-center gap-2 transition duration-300 active:scale-[98%] hover:shadow-lg'><AddIcon sx={{ fontSize: "16px" }} />Create a book</button>
            </div>
            <p className='text-[#FEFEFE] font-[300] text-[20px] mt-2 mb-5'>Your books today</p>
            <div className='grid grid-cols-3 gap-10 max-h-[525px] overflow-y-auto py-5 border-t scrollbar-none'>
                {
                    books.map(item => (
                        <CardItem key={item.id} item={item} />
                    ))
                }
            </div>
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: "600" }}>
                        Create a book
                    </Typography>
                    <AddBookForm handleModalClose={handleModalClose} />
                </Box>
            </Modal>
        </div>
    )
}

export default HomePage