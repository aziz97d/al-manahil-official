import React from 'react';
import Sidebar from '../Sidebar/Sidebar.js';

const Admin = () => {
    return (
        <div style={{display:'grid', gridTemplateColumns:"1fr 5fr"}}>
            <Sidebar />
            <div>
                Layout here
            </div>
        </div>
    );
};

export default Admin;