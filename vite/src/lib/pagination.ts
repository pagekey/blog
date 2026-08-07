import { useSearchParams } from 'react-router-dom';

export function usePagination<T>(items: T[], itemsPerPage: number = 10) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const validPage = Math.max(1, Math.min(currentPage, Math.max(totalPages, 1)));
  
  const currentItems = items.slice(
    (validPage - 1) * itemsPerPage,
    validPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    currentItems,
    validPage,
    totalPages,
    totalItems,
    handlePageChange,
    itemsPerPage
  };
}
