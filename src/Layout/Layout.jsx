import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Layout = () => {
    const { user } = useSelector(state => state.user)
    
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Layout