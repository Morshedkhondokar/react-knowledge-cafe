import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({blog, handleAddBookmarks,handleMarkAsRead} ) => {
    const {title, cover,author,author_img, posted_date,reading_time,hashtags} = blog;

    return (
        <div className="mb-20 space-y-2">
            <img className="w-full mb-8" src={cover} alt="" />

            <div className="flex justify-between mb-4">
                <div className="flex items-center ">
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() => handleAddBookmarks(blog)}
                    className="ml-2">
                        <FaRegBookmark></FaRegBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span className="mr-2"><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() =>handleMarkAsRead(reading_time)} className="text-purple-900 underline">Mark As Read</button>
        </div>
    );
};

export default Blog;