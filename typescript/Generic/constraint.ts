interface IHasLength {
  length: number
}
//使用 extends 继承接口来约束T的类型
function logIdeA<T extends IHasLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

logIdeA(1) //报错
logIdeA('1')
logIdeA({ length: 1 })

//用T类型的key 来约束K(obj的key属性) 这样Key 一定在obj的属性中
function getVal<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
const obj = { a: 1, b: 2, c: 3 }
getVal(obj, 'a')
getVal(obj, 'd') //这里就会报错
