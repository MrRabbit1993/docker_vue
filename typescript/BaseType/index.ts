// string类型

let hello: string = 'bol' // eslint-disable-line
hello = 'Bob'

const say = 'haha'

const sentence = `hhhh ${hello} ${say}`
console.log('string类型:', sentence)

// number类型
let decliteral:number = 20 // eslint-disable-line
//16进制
let hexliteral:number = 0x14 // eslint-disable-line
//二进制
let binaryLiteral:number = 0b10100  // eslint-disable-line
console.log('number类型：', decliteral, hexliteral, binaryLiteral)

//数组类型
const arrayList: number[] = [1, 2, 3, 4]
const arrayListOther: Array<number> = [1, 2, 3, 4] //泛型
console.log('数组类型', arrayList, arrayListOther)

//null 和 undefined (是所有的子类型)
const u: null = undefined
const n = undefined
const nu: undefined = null
const un = null

//any 跳过类型检查
let notSure: any = 4
notSure = '1 3 4 5'
notSure = false
const list: any[] = [1, '1', true]

//void (表示没有任何类型，在某种针对上与any相反)

function sayVoid(): void {
  console.log(1)
}

// void 类型只能赋值undefined 或者null
const a: void = undefined
const b: void = null

//never (是任何类型的子类型) any 都不能赋值给他
function error(msg: string): never {
  throw new Error(msg)
}

function abc(): never {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('true')
  }
}
