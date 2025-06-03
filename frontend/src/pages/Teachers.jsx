import axios from 'axios';
import { useEffect, useState } from 'react';
import TeacherCard from '../components/TeacherCard';

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/teachers/')
      .then(response => {
        setTeachers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching teachers:', error);
        setError('Failed to load teachers. Please try again.');
        setLoading(false);
      });
  }, []);

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
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Teachers
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Teachers Grid */}
        {teachers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500 font-light">No teachers found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teachers.map(teacher => (
              <div key={teacher.id} className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                <TeacherCard teacher={teacher} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Teachers;