import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAllPosts, getAllTags } from '../lib/blog';
import { usePagination } from '../lib/pagination';
import { PostList } from '../components/PostList';
import { PaginationControls } from '../components/PaginationControls';

const POSTS_PER_PAGE = 10;

export default function BlogIndex() {
  const posts = getAllPosts();
  const allTags = getAllTags();
  
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
        <div className="flex items-baseline justify-between mb-2">
          <h1 className="text-4xl font-extrabold">Blog</h1>
        </div>
        
        {/* Stats Bar */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-8 pb-4 border-b border-border">
          <div><strong className="text-foreground">{totalItems}</strong> published posts</div>
          <div>•</div>
          <Link to="/blog/tags" className="hover:text-orange-500 transition-colors">
            <strong className="text-foreground">{allTags.length}</strong> tags
          </Link>
          <div>•</div>
          <div>Page <strong className="text-foreground">{validPage}</strong> of <strong className="text-foreground">{totalPages || 1}</strong></div>
        </div>

        <PostList posts={currentPosts} emptyMessage="No posts found." />

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
