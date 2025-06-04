import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import API_URL from '../config/api';

function Library() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [years, setYears] = useState([]);
  const [semesters, setSemesters] = useState(['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th']);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log('Fetching books from:', `${API_URL}/api/library/`);
        const response = await axios.get(`${API_URL}/api/library/`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        console.log('API Response:', response);
        
        if (response.data) {
          setBooks(response.data);
          setFilteredBooks(response.data);
          const uniqueYears = [...new Set(response.data.map(book => book.year).filter(Boolean))].sort();
          setYears(uniqueYears);
        } else {
          setError('No data received from server');
        }
      } catch (error) {
        console.error('Error details:', {
          message: error.message,
          response: error.response,
          request: error.request
        });
        
        if (error.response) {
          // Server responded with error
          setError(`Server error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
          // Request made but no response
          setError('No response from server. Please check your connection.');
        } else {
          // Other errors
          setError(`Error: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleFilter = (year = selectedYear, semester = selectedSemester) => {
    const filtered = books.filter(book => {
      const bookTitle = book.title || '';
      const matchesTitle = bookTitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = !year || book.year === year;
      const matchesSemester = !semester || book.semester === semester;
      return matchesTitle && matchesYear && matchesSemester;
    });
    setFilteredBooks(filtered);
  };

  const handleFilterByYear = (year) => {
    setSelectedYear(year);
    handleFilter(year, selectedSemester);
  };

  const handleFilterBySemester = (semester) => {
    setSelectedSemester(semester);
    handleFilter(selectedYear, semester);
  };

  const handleSearch = () => {
    handleFilter();
  };

  const clearFilters = () => {
    setSelectedYear(null);
    setSelectedSemester(null);
    setSearchQuery('');
    setFilteredBooks(books);
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
            Library Resources
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-8 bg-white p-6 rounded-xl shadow-lg">
          {/* Search Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by book title"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                if (!e.target.value && !selectedYear && !selectedSemester) {
                  setFilteredBooks(books);
                }
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-2">
              <button
                onClick={handleSearch}
                className="px-4 py-1.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                Search
              </button>
              <button
                onClick={clearFilters}
                className="px-4 py-1.5 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Year Filter */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Filter by Year:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterByYear(null)}
                className={`px-6 py-2 rounded-full text-white transition-all duration-300 transform hover:scale-105 ${
                  selectedYear === null
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600'
                    : 'bg-gradient-to-r from-teal-500 to-blue-500 opacity-75 hover:opacity-100'
                }`}
              >
                All Years
              </button>
        {years.map(year => (
          <button
            key={year}
            onClick={() => handleFilterByYear(year)}
                  className={`px-6 py-2 rounded-full text-white transition-all duration-300 transform hover:scale-105 ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-teal-600 to-blue-600'
                      : 'bg-gradient-to-r from-teal-500 to-blue-500 opacity-75 hover:opacity-100'
            }`}
          >
            {year}
          </button>
        ))}
            </div>
      </div>

          {/* Semester Filter */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">Filter by Semester:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterBySemester(null)}
                className={`px-6 py-2 rounded-full text-white transition-all duration-300 transform hover:scale-105 ${
                  selectedSemester === null
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 hover:opacity-100'
                }`}
              >
                All Semesters
              </button>
              {semesters.map(semester => (
        <button
                  key={semester}
                  onClick={() => handleFilterBySemester(semester)}
                  className={`px-6 py-2 rounded-full text-white transition-all duration-300 transform hover:scale-105 ${
                    selectedSemester === semester
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 hover:opacity-100'
                  }`}
        >
                  {semester}
        </button>
              ))}
            </div>
      </div>

          {/* Active Filters */}
          {(selectedYear || selectedSemester || searchQuery) && (
            <div className="p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-100">
              <p className="text-sm text-gray-600">
                Active Filters: {' '}
                {selectedYear && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mr-2">
                    Year: {selectedYear}
                  </span>
                )}
                {selectedSemester && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-2">
                    Semester: {selectedSemester}
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
                    Search: "{searchQuery}"
                  </span>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500 font-light">No books found matching your criteria</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredBooks.map(book => (
              <div key={book.id} className="transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                <BookCard book={book} />
              </div>
        ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Library;
