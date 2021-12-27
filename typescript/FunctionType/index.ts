function add(x: number, y: number): number {
  return x + y
}

//推断类型 (这里是将右边推断给左边)
const addFn = function (x: number, y: number): number {
  return x + y
}

//完整写法
const addFun: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}
//简写模式
const addFun1: (x: number, y: number) => number = function (x, y) {
  return x + y
}

//ES6
//完整写法
const addFunES6: (x: number, y: number) => number = (x: number, y: number): number => x + y

//简写模式
const addFunES61: (x: number, y: number) => number = (x, y) => x + y

//接口模式 调用签名
interface IAddFunC {
  (x: number, y: number): number
}

const addFunIn: IAddFunC = (x, y) => x + y

addFunIn(1, 2)

//可选参数     第二个是可选参数，可选参数跟在必要参数后面
function UseName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName}  ${lastName}`
  } else {
    return firstName
  }
}
const ret = UseName('ou')
const ret1 = UseName('ou', 'fish')
// let ret2 = UseName('ou', 'xiao', 'fish') //报错 ，传递了三个参数

//默认参数    可选参数与末尾的默认参数共享参数类型
function UseName1(firstName: string, lastName = 'hello'): string {
  return `${firstName}  ${lastName}`
}
const ret2 = UseName('ou')
const ret21 = UseName('ou', 'fish')
// let ret2 = UseName('ou','xiao','fish') //报错 ，传递了三个参数

// 明确指定默认参数
function UseName2(firstName = 'hello', lastName: string): string {
  return `${firstName}  ${lastName}`
}

UseName2(undefined, '2') // 需要明确的传递
