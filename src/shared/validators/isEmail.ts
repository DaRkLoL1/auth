export function makeEmail<T>(errorMsg: T) {
  return (value: string) => (!value.includes('@') ? errorMsg : undefined);
}
