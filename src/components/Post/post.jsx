import React from 'react';// rsc- быстрая комбинация тип !
const post = (props) => {//  в props  лежат тайтлы, ктр мы передали
    console.log(props)
    return (
        <div className='post'>
            <h5 className='title'>{props.post.title}</h5>
            <p className='descr'>{props.post.descr}</p>
        </div>
    );
};

export default post;