import { ValueObject } from './02-value-objects-base';

type EmailProps = {
  value: string;
};
export class EmailAddress extends ValueObject<EmailProps> {
  constructor(props: EmailProps) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.value)) {
      throw new Error('Invalid email format');
    }

    super(props);
  }
  getValue = (): string => {
    return this.props.value;
  };

  toString = (): string => {
    return this.props.value;
  };
}
