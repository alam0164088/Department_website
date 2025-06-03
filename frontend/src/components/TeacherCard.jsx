import { useState } from 'react';
import { Link } from 'react-router-dom';

function TeacherCard({ teacher }) {
  const [imageError, setImageError] = useState(false);

  const getImageUrl = () => {
    if (imageError) {
      return 'https://via.placeholder.com/150?text=No+Image';
    }
    return teacher.photo_url || 'https://via.placeholder.com/150?text=No+Image';
  };

  return (
    <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
      <div className="relative bg-gradient-to-br from-teal-500 via-blue-500 to-purple-600 p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="bg-white rounded-lg p-4">
          <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
            <img
              src={getImageUrl()}
              alt={teacher.name}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              onError={(e) => {
                console.log('Image failed to load:', teacher.name);
                setImageError(true);
              }}
            />
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                <p className="text-gray-500 text-sm">No image available</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {teacher.name}
            </h3>
            <p className="text-gray-600 font-medium">{teacher.designation}</p>
            <p className="text-gray-500">{teacher.department}</p>

            <Link
              to={`/teachers/${teacher.id}`}
              className="mt-4 block text-white text-center py-2 px-4 rounded-lg bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:via-blue-500 hover:to-teal-500 transform transition-all duration-300 hover:shadow-lg"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;