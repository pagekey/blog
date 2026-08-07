import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAllTags } from '../lib/blog';

export default function TagsIndex() {
  const tags = getAllTags();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 border-b border-border pb-4 flex flex-wrap gap-4 items-center justify-between">
          <h1 className="text-4xl font-extrabold">Tags</h1>
          <Link to="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
            ← Back to Blog
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 min-h-[50vh]">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              to={`/blog/tags/${tag.name}`}
              className="group flex items-center gap-2 border border-border rounded-full pl-4 pr-1 py-1 hover:bg-muted/50 hover:border-orange-500/50 transition-colors"
            >
              <span className="font-medium group-hover:text-orange-500 transition-colors">#{tag.name}</span>
              <span className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full group-hover:bg-orange-500/10 group-hover:text-orange-600 transition-colors">
                {tag.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
