declare module "*.vue" {
  import Vue from "vue";
  //这里引入了type 和value
  // type 是Vue的interface
  // value 是Vue构造器 类型为VueConstructor
  export default Vue;
}
