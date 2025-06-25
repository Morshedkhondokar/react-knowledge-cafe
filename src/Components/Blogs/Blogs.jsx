import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddBookmarks, handleMarkAsRead={handleMarkAsRead}}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h4 className="text-4xl">{blogs.length}</h4>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddBookmarks={handleAddBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;