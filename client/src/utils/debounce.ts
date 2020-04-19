export default function (func: () => any, time: number) {
  let timeout: any;
  return function (this: any, ...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = undefined;
      func.apply(this, args);
    }, time);
  };
}
