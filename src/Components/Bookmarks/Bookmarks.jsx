import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 bg-[#f3f3f3] ml-4 mt-2 p-4 rounded-xl'>
            <div className="text-center bg-[#efedfd] border border-[#6047ec] py-5 rounded-xl mb-3">
                <h2 className="text-2xl">Spent time on read : {readingTime} min</h2>
            </div>
            <h1 className="text-3xl text-center font-bold ">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;