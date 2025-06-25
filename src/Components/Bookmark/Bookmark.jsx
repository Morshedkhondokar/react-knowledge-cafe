import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white p-2 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;