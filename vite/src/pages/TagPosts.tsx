import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/blog';
import { usePagination } from '../lib/pagination';
import { PostList } from '../components/PostList';
import { PaginationControls } from '../components/PaginationControls';

const POSTS_PER_PAGE = 10;

export default function TagPosts() {
  const { tag } = useParams();
  const posts = getAllPosts().filter(p => p.tags && p.tags.includes(tag || ''));

  const {
    currentItems: currentPosts,
    validPage,
    totalPages,
    totalItems,
    handlePageChange
  } = usePagination(posts, POSTS_PER_PAGE);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 border-b border-border pb-4 flex flex-wrap gap-4 items-end justify-between">
          <div>
            <div className="text-sm text-muted-foreground mb-1">
              {totalItems} {totalItems === 1 ? 'post' : 'posts'} tagged with
            </div>
            <h1 className="text-4xl font-extrabold text-orange-500">#{tag}</h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Link to="/blog/tags" className="text-sm font-medium hover:text-orange-500 transition-colors mb-1">
              ← All Tags
            </Link>
            <div className="text-sm text-muted-foreground">
              Page <strong className="text-foreground">{validPage}</strong> of <strong className="text-foreground">{totalPages || 1}</strong>
            </div>
          </div>
        </div>

        <PostList posts={currentPosts} emptyMessage="No posts found with this tag." />

        <PaginationControls 
          validPage={validPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={POSTS_PER_PAGE}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
}
