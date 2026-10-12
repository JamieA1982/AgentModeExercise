import { NavLink, Route, Routes } from 'react-router-dom'

const sections = [
  { label: 'Dashboard', path: '/' },
  { label: 'Activities', path: '/activities' },
  { label: 'Teams', path: '/teams' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Workouts', path: '/workouts' },
  { label: 'Profile', path: '/profile' },
]

function Page({ title }: { title: string }) {
  return (
    <main className="container py-4">
      <h1 className="h3 mb-4">{title}</h1>
    </main>
  )
}

function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            src="/octofitapp-small.png"
            alt="OctoFit Tracker mascot"
            width="64"
            height="60"
          />
          <h1 className="h3 mb-0">OctoFit Tracker</h1>
        </div>
        <nav className="nav nav-pills flex-wrap gap-1" aria-label="Main navigation">
          {sections.map((section) => (
            <NavLink
              key={section.path}
              to={section.path}
              end={section.path === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {section.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Routes>
        {sections.map((section) => (
          <Route
            key={section.path}
            path={section.path}
            element={<Page title={section.label} />}
          />
        ))}
        <Route path="*" element={<Page title="Page not found" />} />
      </Routes>
    </div>
  )
}

export default App
