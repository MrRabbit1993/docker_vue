function ide(arg: number): number {
  return arg
}

function ide1<T>(arg: T): T {
  return arg
}

const ouput = ide1<string>('myString') //这里明确T为string类型
const ouput1 = ide1('myString') //这里使用类型推论 推论T为string类型

const myIde: <T>(arg: T) => T = ide1 //泛型函数类型
const myIde1: <U>(arg: U) => U = ide1 //T 和 U 虽随意
const myIde2: { <U>(arg: U): U } = ide1 //  对象字面量

// 接口
interface Ger {
  <T>(arg: T): T
}
const myIde3: Ger = ide1

//类型外移
interface Ger1<T> {
  (arg: T): T
}
const myIde4: Ger1<number> = ide1

class GenNum<T> {
  zeroNum: T
  add: (x: T, y: T) => T
}
const _instance = new GenNum<number>()
_instance.zeroNum = 1
_instance.add = (x, y) => x + y
const __instance = new GenNum<string>()
__instance.zeroNum = '1'
__instance.add = (x, y) => `${x}-${y}`
