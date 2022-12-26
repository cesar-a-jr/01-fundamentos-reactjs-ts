
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostProps } from './components/Post'

import styles from './App.module.css'
import './global.css'

interface Post extends PostProps {
  id:number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/OtavioEscalnte.png',
      name: 'Otávio Escalante',
      role: 'CTO @DevCode'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
       {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},   
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lucianosilveira42.png',
      name: 'Luciano Silveira',
      role: 'Aluno @DevCode'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
       {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},   
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
]

export function App() {
  return (
  <div>
    <Header/>
      
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
          {posts.map(post => {
            return <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          })}
            
            
      
      </main>
      </div>
  </div>
  )
}

