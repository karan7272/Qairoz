// src/components/Blog.js
import React from 'react';
import './Blog.css'; // Import the CSS file for styling

const Blog = () => {
    return (
        <div className="blog">
            <section className="blog-overview">
                <h2>Insights & Articles</h2>
                <div className="blog-posts">
                    {[
                        { title: "The Future of AI in Business", excerpt: "Exploring the impact of AI on various industries.", author: "Author A", date: "Jan 1, 2023" },
                        { title: "How to Choose the Right IT Solutions for Your Company", excerpt: "Tips for selecting the best IT solutions.", author: "Author B", date: "Feb 15, 2023" },
                    ].map((post, index) => (
                        <div className="blog-post" key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <p>By {post.author} on {post.date}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;