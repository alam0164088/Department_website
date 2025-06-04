// Updated Students.jsx with session filter buttons and search by ID
import axios from 'axios';
import { useEffect, useState } from 'react';
import StudentCard from '../components/StudentCard';
import API_URL from '../config/api';

function Students() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/api/students/`)
      .then(response => {
        const data = response.data;
        setStudents(data);
        setFilteredStudents(data);
        setLoading(false);

        const uniqueSessions = [...new Set(data.map(s => s.session).filter(Boolean))].sort();
        setSessions(uniqueSessions);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setError('Failed to load students. Please try again.');
        setLoading(false);
      });
  }, []);

  const handleFilterBySession = (session) => {
    const filtered = students.filter(student => student.session === session);
    setFilteredStudents(filtered);
  };

  const handleSearch = () => {
    const found = students.filter(student => student.student_id.includes(searchId));
    setFilteredStudents(found);
  };

  const handleShowAll = () => {
    setFilteredStudents(students);
    setSearchId('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-teal-200 rounded-full animate-ping"></div>
          <div className="absolute inset-0 border-4 border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 border-4 border-purple-600 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <p className="text-2xl text-red-500 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Students
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by Student ID"
                  value={searchId}
                  onChange={e => setSearchId(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </div>
            <button
              onClick={handleShowAll}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg hover:from-teal-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              Show All
            </button>
          </div>

          {/* Session Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {sessions.map(session => (
              <button
                key={session}
                onClick={() => handleFilterBySession(session)}
                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {session}
              </button>
            ))}
          </div>
        </div>

        {/* Students Grid */}
        {filteredStudents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500 font-light">No students found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredStudents.map(student => (
              <div key={student.id} className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                <StudentCard student={student} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Students;
