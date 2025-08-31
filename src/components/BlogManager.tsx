import { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  status: "published" | "draft" | "scheduled";
  views: number;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 5 Cloud Computing Trends in Kenya (2025)",
    excerpt: "Discover the latest cloud computing trends shaping businesses across Kenya and how to leverage them for competitive advantage.",
    author: "John Mbaru",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Cloud Computing",
    status: "published",
    views: 1247
  },
  {
    id: "2",
    title: "How to Secure Your Business IT Infrastructure Against Cyber Threats",
    excerpt: "Essential cybersecurity strategies every Kenyan business should implement to protect against evolving digital threats.",
    author: "Sarah Tech",
    date: "January 10, 2025",
    readTime: "7 min read",
    category: "Cybersecurity",
    status: "published",
    views: 892
  },
  {
    id: "3",
    title: "Why E-Commerce Websites Fail in Nairobi and How to Succeed",
    excerpt: "Learn from common e-commerce mistakes and discover proven strategies for building successful online stores in the Kenyan market.",
    author: "Mike Developer",
    date: "January 5, 2025",
    readTime: "6 min read",
    category: "Web Development",
    status: "published",
    views: 654
  },
  {
    id: "4",
    title: "AI Integration in Kenyan Businesses: A Practical Guide",
    excerpt: "How to implement AI solutions in your business operations without breaking the bank.",
    author: "Dr. AI Expert",
    date: "January 20, 2025",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    status: "draft",
    views: 0
  }
];

export const BlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [filter, setFilter] = useState<"all" | "published" | "draft" | "scheduled">("all");
  const { toast } = useToast();

  const filteredPosts = posts.filter(post => 
    filter === "all" ? true : post.status === filter
  );

  const handleDelete = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Post Deleted",
      description: "Blog post has been successfully deleted.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "scheduled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Blog Management</h2>
          <p className="text-muted-foreground mt-1">Manage your blog posts and content strategy</p>
        </div>
        <Button variant="cta" className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {["all", "published", "draft", "scheduled"].map((filterOption) => (
          <Button
            key={filterOption}
            variant={filter === filterOption ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(filterOption as typeof filter)}
            className="capitalize"
          >
            {filterOption}
            <Badge variant="secondary" className="ml-2">
              {filterOption === "all" 
                ? posts.length 
                : posts.filter(p => p.status === filterOption).length
              }
            </Badge>
          </Button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge className={getStatusColor(post.status)}>
                      {post.status}
                    </Badge>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(post.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
                <div className="flex flex-wrap items-center gap-4">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                {post.status === "published" && (
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views.toLocaleString()} views</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};