import Header from "./components/Hader"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

//author: { Avatar_url: "", name: "", role: ""}
//publishedAt: Date
//Content: Sring

const posts = [
  {
    id: 1,
    author: {
      AvatarUrl: 'https://github.com/italomuniz16.png',
      name: 'Italo Muniz',
      role:'Web Desing'
    },
    content: [
      {type: 'paragraph' as 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph' as 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link' as 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2022-09-27 16:56:00')
  },
  {
    id: 2,
    author: {
      AvatarUrl: 'https://github.com/douglasmardegan.png',
      name: 'Douglas',
      role:'Web Desing'
    },
    content: [
      {type: 'paragraph' as 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph' as 'paragraph', content: 'Acabdi de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link' as 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2022-09-27 20:00:00')
  },
];



export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}

