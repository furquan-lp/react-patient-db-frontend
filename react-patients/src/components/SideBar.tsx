import './sidebar.css';

export default function SideBar() {
  return (
    <nav className="sidebar-main">
      <span className="sidebar-link">Add Patient</span>
      <span className="sidebar-link">Edit Patient</span>
      <span className="sidebar-link">Search</span>
      <span className="sidebar-link">Select File</span>
    </nav>
  );
}