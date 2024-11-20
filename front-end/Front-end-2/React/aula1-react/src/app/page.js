import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import Header from '@/components/Header';

export default function Home() {
  const name = 'Pika de galaxia';
  return (
    <div>
      <Header />
      <h1>Hello, World!</h1>
      <h1>Página Principal</h1>
      <p>Parágrafo da página principal</p>
      <p>Autor: {name}</p>
      <Image
        className={styles.image}
        src={'/img/seila.jpg'}
        alt='seila'
        width={300}
        height={300}
      />
    </div>
  );
}