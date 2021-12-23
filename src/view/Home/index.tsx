import { defineComponent, ref } from '@vue/composition-api'
import Styles from './index.module.scss'
import AutoCompleteCmp from '@/components/AutoComplete'
import BaseInfoCmp, { IBaseInfo } from '@/components/BaseInfo'
import { getRequestInfo, getRequestList } from './api'
export default defineComponent({
  name: 'App',
  components: { AutoCompleteCmp, BaseInfoCmp },
  setup() {
    const searchValue = ref<string>('')
    const baseInfo = ref<IBaseInfo>({})

    const onSelect = (item) => {
      const { login } = item
      onRequestDetailInfo(login)
    }
    const onRequestDetailInfo = async (userName) => {
      baseInfo.value = (await getRequestInfo(userName)) as IBaseInfo
    }
    return { searchValue, baseInfo, onSelect }
  },
  render() {
    return (
      <div class={Styles.container}>
        <auto-complete-cmp
          v-model={this.searchValue}
          onSelect={this.onSelect}
          class={Styles.search}
          fetchSuggestions={getRequestList}
          // fetchSuggestions={() => [{ login: 1 }, { login: 2 }]}
        />
        <base-info-cmp class={Styles['info-box']} dataSource={this.baseInfo} />
      </div>
    )
  }
})
