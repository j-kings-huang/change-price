import '../index.less';

export default function Header() {
  return (
    <header className="change-product-page__header">
      <div className="change-product-page__header-content">
        <button type="button" className="back-btn" aria-label="返回">
          <span>‹</span>
        </button>
        <h1 className="title">更换产品</h1>
        <button type="button" className="more-btn" aria-label="更多">
          <span>•••</span>
        </button>
      </div>
    </header>
  );
}
