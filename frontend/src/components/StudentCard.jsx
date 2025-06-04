// StudentCard.jsx
import { useState } from 'react';

function StudentCard({ student }) {
  const [isHovered, setIsHovered] = useState(false);

  const getDefaultImage = () => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0D9488&color=fff&size=200`;
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-teal-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="relative">
        {/* Image Section with Fallback */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-teal-100 to-blue-100">
          <img 
            src={student.image_url || getDefaultImage()} 
            alt={student.name} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
            onError={(e) => {
              e.target.src = getDefaultImage();
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Name Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 group-hover:translate-y-1 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
              {student.name}
            </h3>
            <p className="text-teal-100 text-sm font-medium">{student.department}</p>
          </div>
        </div>

        {/* Session Badge */}
        {student.session && (
          <div className="absolute top-3 right-3 transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
            <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium rounded-full shadow-lg inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse"></span>
              Session: {student.session}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        {/* Student ID Card Style Info */}
        <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100 space-y-3 transform group-hover:-translate-y-1 transition-transform duration-500">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-gray-600 font-medium">ID: {student.student_id}</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-600 font-medium break-all">{student.email}</span>
          </div>
        </div>

        {/* Graduation Info with Enhanced UI */}
        {student.is_graduated && (
          <div className="space-y-3 transform group-hover:-translate-y-1 transition-transform duration-500 delay-100">
            {student.cgpa && (
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-100/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">CGPA</span>
                  <div className="relative">
                    <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      {student.cgpa}
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            
            {student.profession && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Current Profession</p>
                    <p className="text-blue-700 font-semibold">{student.profession}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentCard;
