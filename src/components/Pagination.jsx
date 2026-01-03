import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mb-[100px] mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-md border border-[var(--border-color)] dark:border-[#2D333B] bg-[var(--bg-tertiary)] dark:bg-[#1F2428] text-[var(--text-primary)] dark:text-[#e1e1e6] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#539BF5] hover:text-[#e1e1e6] transition-colors duration-300"
        aria-label="Previous page"
      >
        <BsChevronLeft />
      </button>
      
      {getPageNumbers().map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-2 text-[var(--text-secondary)] dark:text-[#768390]">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center w-10 h-10 rounded-md border transition-colors duration-300 ${
              currentPage === page
                ? 'bg-[#539BF5] text-[#e1e1e6] border-[#539BF5]'
                : 'border-[var(--border-color)] dark:border-[#2D333B] bg-[var(--bg-tertiary)] dark:bg-[#1F2428] text-[var(--text-primary)] dark:text-[#e1e1e6] hover:bg-[#539BF5] hover:text-[#e1e1e6]'
            }`}
          >
            {page}
          </button>
        )
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-md border border-[var(--border-color)] dark:border-[#2D333B] bg-[var(--bg-tertiary)] dark:bg-[#1F2428] text-[var(--text-primary)] dark:text-[#e1e1e6] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#539BF5] hover:text-[#e1e1e6] transition-colors duration-300"
        aria-label="Next page"
      >
        <BsChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
