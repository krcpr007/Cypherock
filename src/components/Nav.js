import React from 'react'
import '../styles/Nav.css'
function Nav() {
    return (
        <>
            <nav>
                <div className='nav_div'>
                    <h1 className='nav_heading'>cySync</h1>
                    <p className='sync_btn'>Synced<i className="bi bi-arrow-repeat"></i>
                    </p>
                </div>
                <hr />
            </nav>
        </>
    )
}

export default Nav