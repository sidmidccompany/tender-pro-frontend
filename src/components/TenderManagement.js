import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate

const TenderManagement = () => {
  const sampleTenders = [
    { id: 1, tenderRef: 'TDR-2025-001' },
    { id: 2, tenderRef: 'TDR-2025-002' },
    { id: 3, tenderRef: 'TDR-2025-003' },
    { id: 4, tenderRef: 'TDR-2025-004' },
    { id: 5, tenderRef: 'TDR-2025-005' },
    { id: 6, tenderRef: 'TDR-2025-006' },
    { id: 7, tenderRef: 'TDR-2025-007' },
    { id: 8, tenderRef: 'TDR-2025-008' },
    { id: 9, tenderRef: 'TDR-2025-009' },
    { id: 10, tenderRef: 'TDR-2025-010' },
    { id: 11, tenderRef: 'TDR-2025-011' },
    { id: 12, tenderRef: 'TDR-2025-012' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const totalPages = Math.ceil(sampleTenders.length / recordsPerPage);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentTenders = sampleTenders.slice(indexOfFirstRecord, indexOfLastRecord);

  const goToPage = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          style={{
            margin: '0 5px',
            padding: '6px 12px',
            backgroundColor: i === currentPage ? '#007bff' : '#f0f0f0',
            color: i === currentPage ? '#fff' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          {i}
        </button>
      );
    }

    return (
      <div style={{ marginTop: '16px', textAlign: 'left' }}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {pages}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px' }}>Tender Management List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f7f7f7', textAlign: 'left' }}>
            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd', width: '60px' }}>Sr No</th>
            <th style={{ padding: '12px 15px', borderBottom: '2px solid #ddd' }}>Tender Document</th>
          </tr>
        </thead>
        <tbody>
          {currentTenders.length === 0 ? (
            <tr>
              <td colSpan="2" style={{ padding: '15px', textAlign: 'center', color: '#666' }}>
                No tenders available.
              </td>
            </tr>
          ) : (
            currentTenders.map((tender, idx) => (
              <tr key={tender.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 15px' }}>{indexOfFirstRecord + idx + 1}</td>
                <td style={{ padding: '12px 15px' }}>
                  <Link
                    to={`/tender/${tender.id}`} // Use Link to navigate to TenderDetails page
                    style={{
                      color: '#007bff',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    {tender.tenderRef}
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {renderPagination()}
    </div>
  );
};

export default TenderManagement;
