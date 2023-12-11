import './sidebar.css';

export default function SideBar({ selected }: { selected: number }) {
  const links = ['Add Patient', 'Edit Patient', 'Search', 'Select File'];
  return (
    <nav className="sidebar-main">
      <div className="sidebar-links">
        {links.map((l, i) => <span className={`${i === selected ? 'sidebar-link-selected' : 'sidebar-link'}`}>{l}</span>)}
      </div>
      <span className="sidebar-logo">Dashboard v0.5</span>
    </nav>
  );
}