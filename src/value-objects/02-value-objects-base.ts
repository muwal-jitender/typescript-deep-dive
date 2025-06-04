import isEqual from 'lodash.isequal';

export abstract class ValueObject<T> {
  protected readonly props: T;
  constructor(props: T) {
    this.props = Object.freeze(props);
  }
  equals = (otherObject: ValueObject<T>): boolean => {
    if (otherObject == null) return false;
    if (otherObject.constructor !== this.constructor) return false;
    return isEqual(this.props, otherObject.props);
  };
}
