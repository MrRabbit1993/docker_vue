import { defineComponent, ref } from '@vue/composition-api'
import Styles from './index.module.scss'
import AutoCompleteCmp from './components/AutoComplete'
export default defineComponent({
  name: 'App',
  components: { AutoCompleteCmp },
  setup() {
    const searchValue = ref<string>('')

    const onSelect = (item) => {
      console.log(item)
    }
    return { searchValue, onSelect }
  },
  render() {
    console.log(this.onSelect)
    return (
      <div class={Styles.container}>
        {/* <search-box-cmp></search-box-cmp> */}
        <auto-complete-cmp v-model={this.searchValue} onSelect={this.onSelect} />
      </div>
    )
  }
})
