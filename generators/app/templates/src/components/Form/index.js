export { default as Input } from './Input';
export { default as Textarea } from './Textarea';

export function randomId() {
  return Math.random()
    .toString(36)
    .substring(7);
}
