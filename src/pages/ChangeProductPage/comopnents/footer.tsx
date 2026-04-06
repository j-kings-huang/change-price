import classNames from 'classnames';
import '../index.less';

export default function Footer() {
  return (
    <div className="change-product-page__bottom-btn">
      <p className="change-product-page__bottom-btn-warning">
        分配金额超出本次充值金额，以超出5,000元
      </p>
      <button className={classNames('change-product-page__bottom-btn-confirm', {
        'change-product-page__bottom-btn-confirm--disabled': true,
      })}>
        确认
      </button>
    </div>
  );
}
