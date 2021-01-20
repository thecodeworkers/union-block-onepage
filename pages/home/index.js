import Head from 'next/head';
import styles from './Main.module.scss';
import { Logo } from '../../assets/images/Svg';
import { Navbar, Banner, Separator, Footer } from '../../components';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Separator />
      <Footer />
    </div>
  )
};

export default Main;
