import Container from './comopnents/container';
import Footer from './comopnents/footer';
import Header from './comopnents/header';
import './index.less';

export default function ChangeProductPage() {
  return (
    <div className="change-product-page">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}
