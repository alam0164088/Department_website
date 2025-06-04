import React, { useState } from 'react';
import { api } from '../config/api';
import API_URL from '../config/api';

function BookCard({ book }) {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  const getImageUrl = () => {
    if (imageError) {
      return 'https://via.placeholder.com/150?text=No+Image';
    }

    if (book.cover_url) {
      return book.cover_url;
    }
    
    return 'https://via.placeholder.com/150?text=No+Image';
  };

  const pdfLink = book.pdf_file
    ? `${API_URL}${book.pdf_file}`
    : book.pdf_file_url || '#';

  const handleDownload = async () => {
    if (!book.pdf_file && !book.pdf_file_url) {
      setError('No PDF file available');
      return;
    }

    setDownloading(true);
    setError(null);

    try {
      const response = await api({
        method: 'GET',
        url: pdfLink,
        responseType: 'blob',
        headers: {
          'Accept': 'application/pdf'
        },
        timeout: 30000
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${book.title || 'download'}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      let errorMessage = 'PDF ডাউনলোড করতে সমস্যা হয়েছে';
      
      if (err.response) {
        errorMessage += ' (Server Error)';
      } else if (err.request) {
        errorMessage += ' (Network Error)';
      } else {
        errorMessage += ' (Error)';
      }
      
      setError(errorMessage);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-56 flex-shrink-0 overflow-hidden">
        <img
          src={getImageUrl()}
          alt={book.title || 'Book cover'}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
            <p className="text-gray-500 text-sm font-medium">No image available</p>
          </div>
        )}
        {book.semester && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium rounded-full shadow-lg">
              {book.semester} Semester
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2 mb-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 font-medium italic">By {book.author || 'Unknown Author'}</p>
        </div>

        {book.description && (
          <p className="text-sm text-gray-700 break-words line-clamp-3 bg-gray-50 p-3 rounded-lg">
            {book.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {book.year && (
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
              Year: {book.year}
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={handleDownload}
            disabled={downloading || (!book.pdf_file && !book.pdf_file_url)}
            className={`w-full px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform ${
              downloading || (!book.pdf_file && !book.pdf_file_url)
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl active:scale-95'
            }`}
          >
            {downloading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Downloading...</span>
              </div>
            ) : (
              'Download Book'
            )}
          </button>

          {error && (
            <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-xl">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
