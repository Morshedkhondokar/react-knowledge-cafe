
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {

  const [bookmarks, setbookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmarks = blog => {
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setbookmarks(newBookmarks)
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time)
    console.log(time)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
         <Blogs handleAddBookmarks={handleAddBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
