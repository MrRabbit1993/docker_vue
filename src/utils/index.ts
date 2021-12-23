/** * 装饰器的防抖 debounce * @param delay */
export function Debounce(fn: Function, delay: number): Function {
  var timer:number = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  }
}