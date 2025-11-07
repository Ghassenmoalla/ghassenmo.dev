"use client";

import { Blog } from "contentlayer/generated";
import { motion } from "framer-motion";
import { BlogListItem } from "./blog-list-item";

type AnimatedBlogListProps = {
  posts: Blog[];
};

export function AnimatedBlogList({ posts }: AnimatedBlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">No articles found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {posts.map((post, index) => (
        <motion.article 
          key={post._id || index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <BlogListItem blog={post} />
        </motion.article>
      ))}
    </motion.div>
  );
}