interface IPerson {
  fristName: string
  lastName: string
}

function gree(person: IPerson) {
  return `lello ${person.fristName} ${person.lastName}`
}
const name2 = {
  fristName: 'ou',
  lastName: 'j'
}
const user = gree(name2)
console.log(user)

let ArrayAbc: number[] = [1, 2, 3, 4]
const roa: ReadonlyArray<number> = ArrayAbc //泛型只读数组
roa[0] = 1 //报错
roa.push(2) //报错
ArrayAbc = roa //报错
const roa1: readonly number[] = ArrayAbc

// 可索引的类型

interface StringArr {
  readonly [index: number]: string //下标 数字类型 ，下标对应的值 string类型 只读
}
const array: StringArr = ['hello', 'world']
const a1: string = array[0]

//可选类型
interface Squuer {
  color: string
  area: number
}
interface Rect {
  color?: string
  width?: number
}
function _initSquer(config: Rect): Squuer {
  const defaultRes = { color: 'red', area: 100 }
  if (config.color) {
    defaultRes.color = config.color
  }
  if (config.width) {
    defaultRes.area = config.width * config.width
  }
  return defaultRes
}

//接口继承
interface Shape {
  color: string
}
interface PenStroke {
  width: number
}
//继承两个接口
interface Squer extends Shape, PenStroke {
  area: number
}

const are = {} as Squer
are.color = 'red'
are.width = 10
are.area = 100
