import Head from 'next/head';
import styles from './Main.module.scss';
import { Logo } from '../../assets/images/Svg';
import { useRef } from 'react';
import { Navbar, Banner, Separator, Footer } from '../../components';

const Main = () => {

  const footer = useRef();

  return (
    <div>
      <Navbar reference={footer}/>
      <Banner />
      <Separator />
      <div ref={footer}>
        <Footer />
      </div>
    </div>
  )
};

export default Main;
