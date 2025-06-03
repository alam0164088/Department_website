import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function TeacherDetail() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/teachers/${id}/`)
      .then(res => {
        setTeacher(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching teacher:', error);
        setLoading(false);
      });
  }, [id]);

  const getImageUrl = () => {
    if (imageError || !teacher) {
      return 'https://via.placeholder.com/400?text=No+Image';
    }
    return teacher.photo_url || 'https://via.placeholder.com/400?text=No+Image';
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gradient-to-r from-teal-500 to-purple-600"></div>
    </div>
  );

  if (!teacher) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-2xl text-red-500 font-semibold">Teacher not found</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
          <div className="relative h-64 sm:h-80 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={getImageUrl()}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('Image failed to load:', teacher.name);
                    setImageError(true);
                  }}
                />
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-teal-100 to-blue-100">
                    <p className="text-gray-500 text-sm">No image available</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                {teacher.name}
              </h1>
              <p className="mt-2 text-xl text-gray-600">{teacher.designation}</p>
              <p className="text-lg text-gray-500">{teacher.department}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 transform transition-all duration-300 hover:shadow-md">
                  <h2 className="text-xl font-semibold text-teal-700 mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <p className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Email:</span>
                      <span className="text-gray-600">{teacher.email}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Phone:</span>
                      <span className="text-gray-600">{teacher.phone || 'Not Available'}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Blood Group:</span>
                      <span className="text-gray-600">{teacher.blood_group || 'Not Available'}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Address:</span>
                      <span className="text-gray-600">{teacher.address || 'Not Available'}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 transform transition-all duration-300 hover:shadow-md">
                  <h2 className="text-xl font-semibold text-blue-700 mb-4">Research & Biography</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-medium text-gray-700">Current Research:</h3>
                      <p className="mt-1 text-gray-600">{teacher.research_topic || 'Not Available'}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700">Biography:</h3>
                      <p className="mt-1 text-gray-600">{teacher.bio || 'Not Available'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
