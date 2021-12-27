const someValue: any = 'a b c'
//方案一
const strLength: number = (<string>someValue).length
//方案二
const stringLength2: number = (someValue as string).length

// 建议使用as 语法 ,jsx里面只能使用as
