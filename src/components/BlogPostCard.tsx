
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  featuredImageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  postUrl: string;
}

const BlogPostCard = ({
  featuredImageUrl,
  category,
  title,
  excerpt,
  date,
  author,
  postUrl,
}: BlogPostCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={postUrl} className="block">
        <img
          src={featuredImageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-loor-green">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <Link to={postUrl}>
          <h3 className="font-heading font-semibold text-lg mb-2 hover:text-loor-green transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{excerpt}</p>
        <div className="flex items-center">
          <span className="text-sm text-gray-500">Por {author}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
