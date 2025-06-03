// StudentCard.jsx
function StudentCard({ student }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      {student.image_url && (
        <img src={student.image_url} alt={student.name} className="w-full h-48 object-cover rounded-xl mb-4" />
      )}
      <h3 className="text-xl font-bold text-teal-600">{student.name}</h3>
      <p className="text-gray-700">ID: {student.student_id}</p>
      <p className="text-gray-700">Department: {student.department}</p>
      <p className="text-gray-600">Email: {student.email}</p>

      {student.session && <p className="text-gray-700">Session: {student.session}</p>}

      {student.is_graduated && (
        <>
          {student.cgpa && <p className="text-green-700 font-medium">CGPA: {student.cgpa}</p>}
          {student.profession && <p className="text-blue-700">Profession: {student.profession}</p>}
        </>
      )}
    </div>
  );
}

export default StudentCard;
