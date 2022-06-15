import React,{useState} from 'react';
import post from '../Post/post';
import Post from "../Post/post"

const Main=(props)=>{
  // const [score,setScore]=useState(0)// Подключаем к мейну состояние
//   const addOne=()=> {
//    setScore(score+1)// setScore- меняет значение переменной(меняет состояние) Меняет состояние изначального элемента на плюс один
// }
// const dltOne=()=>{
//   setScore(score-1)
// }
// <h1>{score}</h1>
//<button onClick={()=>setScore(score+1)}>+1</button>
//<button onClick={()=>setScore(score-1)}>-1</button>
// let title1="The title of first post"
// let title2="The title of second post"
// let title3="The title of third post"
let posts=[{
  id:1,
  title:"The first title",
  descr:"The first descr"
}
let posts2 ={
  id:2,
  title:"The second title",
  descr:"The second descr"
},
let posts3={
  id:3,
  title:"The third title",
  descr:"The third descr"
}]
const objectone={
  descr:"first_description",
  title:"first_title"
}
    return(
        <main>
          {post.map(post=>{
            return <Post key={post.id} title={post.title} descr={post.descr}/>
          })}
         {/* <Post post={objectone}/> */}
         
        </main>
    );
};
export default Main;    