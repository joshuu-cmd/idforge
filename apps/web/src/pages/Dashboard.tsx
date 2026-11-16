import logo from './logo.jpeg'
import profile from './profile1.jpeg'
import Sidebar from '../components/common/Sidebar';
import { useState } from 'react';

type DashboardProps = {
    name: string;
    onLogout: () => void;
}


function Dashboard({name, onLogout }: DashboardProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isprofileOpen, setIsProfileOpen] = useState(false);
    return (
        <div id="dashboard">
            {isSidebarOpen && (<Sidebar onClose={() => setIsSidebarOpen(!isSidebarOpen)} />
            )}
            
            {isprofileOpen && (
                    <div id="profile-container" onClick={() => setIsProfileOpen(!isprofileOpen)} >
                        <div>
                            <a onClick={() => setIsProfileOpen(!isprofileOpen)} >
                                <p>⬅Back</p>
                            </a>
                            <a href=''>
                                <p>My Profile</p>
                            </a>
                            <a href="">
                                <p>Settings</p>
                            </a>
                            <a href="">
                                <p>Notifications</p>
                            </a>
                        <a onClick={() => {
                            if (window.confirm("Logout?")) {
                                onLogout();
                            }
                            }}>
                                <img id="logout" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPCaSml-iF5vidLnLzMP039G83MnrcQASaf6u8YPuIQ&s=10"/>
                                <p>Logout</p>
                            </a>  
                        </div>
                    </div>
                )
            }
            <div id="header">
                <img id="lines" onClick={() => setIsSidebarOpen(!isSidebarOpen)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV8rIIJywR-CxAobGsJ87jKeKuFoAuGoAygkM2SIO8HMJOoKrfRGgKnM&s=10" />
                <img  id="logo" src={logo} alt="Logo" />
                <h1 >Dashboard</h1>
                <img  id="profile" onClick={() => setIsProfileOpen(!isprofileOpen)} src={profile} alt="Profile" />
            </div>
            <p>Welcome <span>{name}</span></p>
            <p>Welcome to IDForge, your number one Designer</p>
            <div id="content">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYOgkh9F4l61iBnVYSCyAp30h4TTUSwX2VaNYkUBPDw&s=10" />
                    <p>Generate ID</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5cSZL54UDBy6NSRTHi7KL0xo23kSsE9thcv00ej6jw&s=10" />
                    <p>Add Members</p>
                </div>
                <div> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wt--Nc5jCFK-BG_d_91T7f0wEs0TTvSy6gjYSSsfAA&s=10"/>
                    <p>View Members</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJlNKKrzFnqnf823onbJwsAtgb5XM5XgCEt3wLwAwMg&s=10" />
                    <p>Verify ID</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSj6a9QCtUJkm1IVaPwljdPPFtxOcCOgvxn-M2oBaFTw&s=10" />
                    <p>Add organisation</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/967495780/vector/history-list-button-icon-design-set-illustration-glyph-style-design.jpg?s=612x612&w=0&k=20&c=u88V8Oion9VomdgL5dKK6hgZle7HRSLIE8zpWeBCnZA=" />
                    <p>History</p>
                </div>
            </div>

        </div>
    )
}
export default Dashboard;

