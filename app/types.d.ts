type VoidCallback = () => void;
type ValueCallback<T> = (value: T) => void;

declare module '*.svg' {
  const content: any;
  export default content;
}
