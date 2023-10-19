import './sidebar.css';

export default function SideBar({ selected }: { selected: number }) {
  const links = ['Add Patient', 'Edit Patient', 'Search', 'Select File'];
  return (
    <nav className="sidebar-main">
      <span className="sidebar-logo">Dashboard v0.5</span>
      {links.map((l, i) => <span className={`${i === selected ? 'sidebar-link-selected' : 'sidebar-link'}`}>{l}</span>)}
    </nav>
  );
}