import { defineComponent, ref } from '@vue/composition-api'
import Styles from './index.module.scss'
import AutoCompleteCmp, { KeyValueProps } from '@/components/AutoComplete'
import BaseInfoCmp, { IBaseInfo } from '@/components/BaseInfo'
import { getRequestInfo, getRequestList } from './api'
export default defineComponent({
  name: 'App',
  components: { AutoCompleteCmp, BaseInfoCmp },
  setup() {
    const searchValue = ref<string>('')
    const baseInfo = ref<Partial<IBaseInfo>>({})
    // const baseInfo = ref<IBaseInfo>({} as IBaseInfo)
    const baseInfoShow = ref<boolean>(false)
    const keyValue = ref<KeyValueProps>({ key: 'login', value: 'login' })

    const onSelect = (item) => {
      const { login } = item
      onRequestDetailInfo(login)
    }
    const onRequestDetailInfo = async (userName) => {
      baseInfo.value = (await getRequestInfo(userName)) as IBaseInfo
      baseInfoShow.value = true
    }
    return { searchValue, baseInfo, baseInfoShow, keyValue, onSelect }
  },
  render() {
    return (
      <div class={Styles.container}>
        <auto-complete-cmp
          v-model={this.searchValue}
          onSelect={this.onSelect}
          class={Styles.search}
          keyValue={this.keyValue}
          fetchSuggestions={getRequestList}
          // fetchSuggestions={() => [{ login: 1 }, { login: 2 }]}
        />
        {this.baseInfoShow ? <base-info-cmp class={Styles['info-box']} dataSource={this.baseInfo} /> : null}
      </div>
    )
  }
})
