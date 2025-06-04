import { ValueObject } from './02-value-objects-base';

type Currency = 'USD' | 'EUR' | 'INR';
type MoneyProps = { amount: number; currency: Currency };

export class Money extends ValueObject<MoneyProps> {
  constructor(props: MoneyProps) {
    super(props);
  }

  add = (otherMoney: Money): Money => {
    const otherMoneyProps = otherMoney.props;
    if (otherMoneyProps.currency !== this.props.currency) throw new Error('Currency mismatch');
    return new Money({
      amount: otherMoneyProps.amount + this.props.amount,
      currency: otherMoneyProps.currency,
    });
  };

  toString() {
    return `${this.props.amount} ${this.props.currency}`;
  }
}
