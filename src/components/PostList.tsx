import { Link } from 'react-router-dom';

interface PostListProps {
  posts: any[];
  emptyMessage?: string;
}

export function PostList({ posts, emptyMessage = "No posts found." }: PostListProps) {
  return (
    <div className="flex flex-col gap-6 min-h-[50vh]">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.url} className="relative group border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors flex flex-col items-start">
            <h2 className="text-2xl font-bold group-hover:text-orange-500 transition-colors mb-2">
              <Link to={post.url} className="before:absolute before:inset-0 before:z-0">
                {post.title}
              </Link>
            </h2>
            <div className="text-sm text-gray-500 mb-3 relative z-10 pointer-events-none">
              {post.dateString ? new Date(post.dateString).toLocaleDateString() : 'No date'}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {post.tags.map((t: string) => (
                  <Link key={t} to={`/blog/tags/${t}`} className="text-xs font-medium bg-muted text-muted-foreground hover:bg-orange-500/10 hover:text-orange-600 px-2 py-1 rounded-md transition-colors">
                    #{t}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-muted-foreground py-8 text-center">{emptyMessage}</div>
      )}
    </div>
  );
}
