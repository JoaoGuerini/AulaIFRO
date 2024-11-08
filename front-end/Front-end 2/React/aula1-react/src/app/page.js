import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import Header from '@/components/Header'


export default function Home() {
  const name = 'Pika de galaxia'
  return(
    <div>
      <Header/>
      <h1>
        Pagina principal  
      </h1>
      <p>Parágrafo de pagina principal</p>
      <p>Autor: {name}</p>
    
      <Image 
        className={styles.image}
        src={'/img/seila.jpg'} 
        alt='seila'
        width={300} 
        height={300}/>  

    </div>
  )
}