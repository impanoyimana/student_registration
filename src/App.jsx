
import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('Home')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')
  const [students, setStudents] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const student = {
      id: Date.now(),
      name,
      age,
      course
    }

    setStudents([...students, student])

    setName('')
    setAge('')
    setCourse('')
  }

  return (
    <div className="app">

      <nav className="navbar">
        <h2>Student Portal</h2>

        <div className="nav-links">
          <button onClick={() => setPage('Home')}>Home</button>
          <button onClick={() => setPage('About')}>About</button>
          <button onClick={() => setPage('Services')}>Services</button>
        </div>
      </nav>

      <div className="container">

        {page === 'Home' && (
          <>
            <h1>Student Registration System</h1>
            <p className="subtitle">
              Enter student information below
            </p>

            <form className="form" onSubmit={handleSubmit}>

              <label>Student Name</label>
              <input
                type="text"
                placeholder="Enter student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Student Age</label>
              <input
                type="number"
                placeholder="Enter age"
                min="1"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />

              <label>Course</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Select course</option>
                <option value="Software Development">Software Development</option>
                <option value="Networking">Networking</option>
                <option value="">ph</option>
                <option value="Business Management">Business Management</option>
              </select>

              <button type="submit" className="send-btn">
                Send
              </button>

            </form>

            <h2 className="student-title">
              Registered Students ({students.length})
            </h2>

            <div className="student-list">
              {students.map((student) => (
                <div className="student-card" key={student.id}>
                  <h3>{student.name}</h3>
                  <p>Age: {student.age}</p>
                  <p>Course: {student.course}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {page === 'About' && (
          <div className="content">
            <h1>About Us</h1>
            <p>
              This Student Registration System is developed
              using React.js to register and display student
              information.
            </p>
          </div>
        )}

        {page === 'Services' && (
          <div className="content">
            <h1>Our Services</h1>

            <div className="services">
              <div className="service-card">
                <h3>Student Registration</h3>
                <p>Register new students.</p>
              </div>

              <div className="service-card">
                <h3>Student Records</h3>
                <p>View student information.</p>
              </div>

              <div className="service-card">
                <h3>Course Management</h3>
                <p>Manage student courses.</p>
              </div>
            </div>
          </div>
        )}

      </div>

      <footer>
        Student Portal © 2026
      </footer>

    </div>
  )
}

export default App
