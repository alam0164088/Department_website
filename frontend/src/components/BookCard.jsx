import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

function BookCard({ book }) {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  // Image fallback logic
  const getImageUrl = () => {
    if (imageError) {
      return 'https://via.placeholder.com/150?text=No+Image';
    }

    if (book.cover_url) {
      return book.cover_url;
    }
    
    return 'https://via.placeholder.com/150?text=No+Image';
  };

  // PDF fallback logic
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
      const response = await axios({
        method: 'GET',
        url: pdfLink,
        responseType: 'blob',
        headers: {
          'Accept': 'application/pdf'
        },
        timeout: 30000 // 30 seconds timeout
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers['content-type'];
      if (!contentType || !contentType.includes('application/pdf')) {
        console.warn('Warning: Response may not be a PDF. Content-Type:', contentType);
      }

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
      console.error('Error downloading PDF:', err);
      let errorMessage = 'PDF ডাউনলোড করতে সমস্যা হয়েছে';
      
      if (err.response) {
        console.error('Server error:', err.response.status);
        errorMessage += ' (Server Error)';
      } else if (err.request) {
        console.error('Network error:', err.request);
        errorMessage += ' (Network Error)';
      } else {
        console.error('Request setup error:', err.message);
        errorMessage += ' (Error)';
      }
      
      setError(errorMessage);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={getImageUrl()}
          alt={book.title || 'Book cover'}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log('Image failed to load:', book.title);
            setImageError(true);
          }}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-sm">No image available</p>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 break-words">{book.title}</h3>
        <p className="text-sm text-gray-600">By {book.author}</p>
        {book.description && (
          <p className="text-sm text-gray-700 mt-2 break-words">{book.description}</p>
        )}
        {book.semester && (
          <p className="text-sm text-teal-600 mt-1">Semester: {book.semester}</p>
        )}
        {book.year && (
          <p className="text-sm text-teal-600">Year: {book.year}</p>
        )}

        <div className="mt-3">
          <button
            onClick={handleDownload}
            disabled={downloading || (!book.pdf_file && !book.pdf_file_url)}
            className={`w-full px-4 py-2 rounded font-medium transition-colors ${
              downloading || (!book.pdf_file && !book.pdf_file_url)
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-teal-600 hover:bg-teal-700 text-white'
            }`}
          >
            {downloading ? 'Downloading...' : 'Download Book'}
          </button>

          {error && (
            <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
