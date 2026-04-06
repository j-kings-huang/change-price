import '../index.less';

interface Product {
  id: number;
  name: string;
  code: string;
  annualizedReturn: string;
  dailyReturn: string;
  amount: string;
  minAmount?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: '南方天天利货币B',
    code: '005827',
    annualizedReturn: '2.8523%',
    dailyReturn: '0.8523',
    amount: '10,000.00',
  },
  {
    id: 2,
    name: '南方天天利货币B',
    code: '005827',
    annualizedReturn: '1.8523%',
    dailyReturn: '0.8523',
    amount: '0.10',
    minAmount: '最低转入100元',
  },
  {
    id: 3,
    name: '南方天天利货币B',
    code: '005827',
    annualizedReturn: '1.8523%',
    dailyReturn: '0.8523',
    amount: '0.00',
  },
  {
    id: 4,
    name: '南方天天利货币文字文字文字文字文字文字',
    code: '005827',
    annualizedReturn: '1.8523%',
    dailyReturn: '0.8523',
    amount: '10,000.00',
  },
];

export default function Container() {
  return (
    <div className="change-product-page__content">
      <div className="change-product-page__content-info-card">
        <h2 className="change-product-page__content-info-card-title">
          将转入<span className="highlight">3支</span>产品
        </h2>
        <p className="change-product-page__content-info-card-desc">
          发财宝每支基金的单日快取最高为1万，发财宝组合单日快赎额度最高为30万。仅供参考，以实际转入情况为准。
        </p>
      </div>

      <div className="change-product-page__content-product-list">
        <div className="change-product-page__content-product-list-header">
          <h2 className="change-product-page__content-product-list-header-title">选择产品</h2>
          <button type="button" className="cancel-btn">
            取消修改
          </button>
        </div>

        {products.map((product) => (
          <div key={product.id} className="change-product-page__content-product-list-item">
            <div className="change-product-page__content-product-list-item-content">
              <div className="change-product-page__content-product-list-item-content-info">
                <h3 className="change-product-page__content-product-list-item-content-info-name">
                  {product.name}
                </h3>
                <div className="change-product-page__content-product-list-item-content-info-code">
                  ({product.code})
                </div>
              </div>

              <div className="change-product-page__content-product-list-item-content-details">
                <div className="metric-value metric-value--accent">{product.annualizedReturn}</div>
                <div className="metric-value">{product.dailyReturn}</div>
                <input
                  type="text"
                  value={product.amount}
                  className="change-product-page__content-product-list-item-content-input-field"
                  readOnly
                />
              </div>
              <div className="change-product-page__content-product-list-item-content-metric-labels">
                <div className="metric-label">七日年化</div>
                <div className="metric-label">万份收益</div>
                <div className="metric-label">转入金额</div>
              </div>
            </div>

            {product.minAmount && (
              <div className="change-product-page__content-product-list-item-min-amount">
                {product.minAmount}
              </div>
            )}
          </div>
        ))}

        <div className="change-product-page__content-product-list-footer">
          <p className="change-product-page__content-product-list-footer-text_highlight">
            基金销售服务由上海中正达广基金销售有限公司提供
          </p>
          <p className="change-product-page__content-product-list-footer-text">
            本页面非任何法律文件，相关数据仅供参考，不构成投资建议。
            <br />
            过往业绩不预示未来表现，市场有风险，投资需谨慎。
          </p>
        </div>
      </div>
    </div>
  );
}
