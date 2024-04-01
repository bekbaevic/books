import { Button } from '@mui/material'
import React, { useState } from 'react'
import { addBook } from '../Reducers/books.slice'
import { useDispatch } from 'react-redux'

const AddBookForm = ({ handleModalClose }) => {
    const [title, setTitle] = useState('')
    const [pages, setPages] = useState()
    const [author, setAuthor] = useState('')
    const [datePublication, setDatePublication] = useState()
    const dispatch = useDispatch()
    function addNewBook(e) {
        e.preventDefault()
        dispatch(addBook({
            id: Date.now(),
            title,
            pages,
            author,
            datePublication,
            date: (new Date()).getFullYear(),
            status: "New"
        }))
        setTitle('')
        setAuthor('')
        setDatePublication('')
        setPages('')
        handleModalClose()
    }
    return (
        <form className='flex flex-col gap-4'>
            <label>
                <span className='font-[600] text-[14px]' >Name:</span>
                <input onChange={e => setTitle(e.target.value)} className='border border-[#E1E1E1] focus:border-[#333] outline-none  w-full py-3 px-2 rounded-md ' type="text" />
            </label>
            <label>
                <span className='font-[600] text-[14px]' >Pages:</span>
                <input onChange={e => setPages(e.target.value)} className='border border-[#E1E1E1] focus:border-[#333] outline-none  w-full py-3 px-2 rounded-md ' type="number" />
            </label>
            <label>
                <span className='font-[600] text-[14px]' >Author</span>:
                <input onChange={e => setAuthor(e.target.value)} className='border border-[#E1E1E1] focus:border-[#333] outline-none  w-full py-3 px-2 rounded-md ' type="text" />
            </label>
            <label>
                <span className='font-[600] text-[14px]' >Date publication:</span>
                <input onChange={e => setDatePublication(e.target.value)} className='border border-[#E1E1E1] focus:border-[#333] outline-none  w-full py-3 px-2 rounded-md ' type="number" />
            </label>
            <div className='w-full flex justify-end gap-2'>
                <Button type='submit' variant="contained" onClick={(e) => addNewBook(e)}>Add</Button>
                <Button variant="contained" onClick={handleModalClose} color='error'>Cancel</Button>
            </div>
        </form>
    )
}

export default AddBookForm