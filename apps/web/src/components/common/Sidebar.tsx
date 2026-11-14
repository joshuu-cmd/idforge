import logo from '/src/pages/logo.jpeg'

type SidebarProps = {
    onClose: () => void;
}

function Sidebar({ onClose }: SidebarProps) {
    return (
        <div id="sidebar-container" onClick={onClose}>
            <div className="sidebar" >
                <nav>
                    <ul>
                        <div id='sidebar-header'>
                            <img src={logo} alt="Logo" />
                            <div>
                                <h3>IDForge</h3>
                                <p>Create. Design. Manage</p>
                            </div>
                        </div>
                        <a href="/"><p>Dashboard</p></a>
                        <a><p >Members</p></a>
                        <a><p >Verify ID</p></a>
                        <a><p>Organisation</p></a>
                        <a><p >History</p></a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;