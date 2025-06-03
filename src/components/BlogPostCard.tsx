
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  featuredImageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  postUrl: string;
  theme?: "light" | "dark";
}

const BlogPostCard = ({
  featuredImageUrl,
  category,
  title,
  excerpt,
  date,
  author,
  postUrl,
  theme = "light",
}: BlogPostCardProps) => {
  const themeClasses = {
    light: {
      category: "text-loor-light-section-accent",
      title: "hover:text-loor-light-section-link",
      excerpt: "text-gray-600",
      meta: "text-gray-500",
    },
    dark: {
      category: "text-loor-dark-section-accent",
      title: "hover:text-loor-dark-section-link",
      excerpt: "text-loor-dark-section-subtitle",
      meta: "text-loor-dark-section-subtitle",
    }
  };

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
          <span className={`text-sm font-medium ${themeClasses[theme].category}`}>{category}</span>
          <span className={`text-sm ${themeClasses[theme].meta}`}>{date}</span>
        </div>
        <Link to={postUrl}>
          <h3 className={`font-heading font-semibold text-lg mb-2 ${themeClasses[theme].title} transition-colors`}>
            {title}
          </h3>
        </Link>
        <p className={`${themeClasses[theme].excerpt} mb-4 text-sm line-clamp-3`}>{excerpt}</p>
        <div className="flex items-center">
          <span className={`text-sm ${themeClasses[theme].meta}`}>Por {author}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
