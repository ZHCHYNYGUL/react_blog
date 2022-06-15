import React from 'react';// rsc- быстрая комбинация тип !
const post = (props) => {//  в props  лежат тайтлы, ктр мы передали
    console.log(props)
    return (
        <div className='post'>
            <h5 className='title'>{props.title}</h5>
            <p className='descr'>{props.descr}</p>
            <p className='author'>{props.author}</p>
        </div>
    );
};

export default post;