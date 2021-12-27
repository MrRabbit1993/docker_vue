import { defineComponent, ref, PropType } from '@vue/composition-api'
import Styles from './index.module.scss'
import InputCmp from '@/components/Input'
import { IGitHubUser, IHttpRequestUser, KeyValueProps } from './type'
export default defineComponent({
  name: 'AutoCompleteCmp',
  components: { InputCmp },
  props: {
    value: {
      type: String,
      default: ''
    },
    keyValue: {
      type: Object as PropType<KeyValueProps>,
      default: () => ({ key: 'key', value: 'value' })
    },
    fetchSuggestions: {
      type: Function as PropType<(param: ObjRecord<any>) => Promise<IHttpRequestUser> | Array<IGitHubUser>>
    }
  },
  setup(props, { emit }) {
    const defaultValue = ref<string>(props.value) //输入值
    const highLightIndex = ref<number>(-1) // 高亮小标
    const suggestions = ref<Array<IGitHubUser>>([]) // 匹配列
    const suggestionsInstance = ref<HTMLUListElement>(null)

    const onChangeInput = () => {
      getRequestInfo(defaultValue.value)
    }

    // 下拉菜单选中事件
    const onHandleSelect = (item: IGitHubUser) => {
      defaultValue.value = item[props.keyValue.key]
      suggestions.value = []
      suggestions.value.splice(0, 0)
      emit('select', item)
    }
    // 获取匹配信息
    const getRequestInfo = async (searchKey: string) => {
      const results = props?.fetchSuggestions({ q: searchKey })
      if (results instanceof Promise) {
        const data = await results
        suggestions.value = data.items
      } else {
        suggestions.value = results || []
      }
    }

    //设置高亮下标
    const onSetHighLight = (index: number) => {
      if (index < 0) index = 0
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1
      }
      highLightIndex.value = index

      //联动滚动
      const suggestion = suggestionsInstance.value
      const suggestionList = suggestion.querySelectorAll('li')
      const highlightItem = suggestionList[index]
      const scrollTop = suggestion.scrollTop
      const offsetTop = highlightItem.offsetTop
      if (offsetTop + highlightItem.scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += highlightItem.scrollHeight
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= highlightItem.scrollHeight
      }
    }

    //  键盘事件
    const onHandleKeyDown = (e: KeyboardEvent) => {
      switch (e.keyCode) {
        case 13:
          if (suggestions.value[highLightIndex.value]) {
            onHandleSelect(suggestions.value[highLightIndex.value])
          }
          break
        case 38:
          onSetHighLight(highLightIndex.value - 1)
          break
        case 40:
          onSetHighLight(highLightIndex.value + 1)
          break
        case 27:
          suggestions.value = []
          break
        default:
          break
      }
    }

    const renderDropdown = () => {
      return (
        <ul class={Styles.suggestion} ref="suggestionsInstance">
          {suggestions.value.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => onHandleSelect(item)}
                class={`${Styles['suggestion-item']} ${index === highLightIndex.value ? Styles['is-active'] : null}`}>
                {item[props.keyValue.key]}
              </li>
            )
          })}
        </ul>
      )
    }
    return { defaultValue, suggestions, onChangeInput, onHandleKeyDown, renderDropdown }
  },
  render() {
    return (
      <div class={Styles['auto-complete']}>
        <input-cmp v-model={this.defaultValue} onChange={this.onChangeInput} onKeyDown={this.onHandleKeyDown} />
        {this.suggestions.length > 0 ? this.renderDropdown() : null}
      </div>
    )
  }
})
