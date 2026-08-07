interface PaginationControlsProps {
  validPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function PaginationControls({ validPage, totalPages, totalItems, itemsPerPage, onPageChange }: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
      <button
        onClick={() => onPageChange(validPage - 1)}
        disabled={validPage === 1}
        className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
      >
        ← Previous
      </button>
      
      <div className="text-sm text-muted-foreground hidden sm:block">
        Showing {(validPage - 1) * itemsPerPage + 1} to {Math.min(validPage * itemsPerPage, totalItems)} of {totalItems}
      </div>

      <button
        onClick={() => onPageChange(validPage + 1)}
        disabled={validPage === totalPages}
        className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
      >
        Next →
      </button>
    </div>
  );
}
