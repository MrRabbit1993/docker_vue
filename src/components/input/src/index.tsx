import { defineComponent, ref, watch } from '@vue/composition-api'
import Styles from './index.module.scss'
import { Debounce } from '@/utils'
export interface InputCmpProps {
  value: string
}

export default defineComponent<InputCmpProps>({
  name: 'InputCmp',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const defaultValue = ref<string>(props.value)

    const onChangeInput = Debounce(() => {
      emit('input', defaultValue.value)
      emit('change', defaultValue.value)
    }, 300)

    const onHandleKeyDown = (event: KeyboardEvent) => {
      emit('keyDown', event)
    }
    watch(
      () => props.value,
      (currentValue: string) => {
        defaultValue.value = currentValue
      }
    )
    return { defaultValue, onChangeInput, onHandleKeyDown }
  },
  render() {
    return (
      <input
        class={Styles.input}
        v-model={this.defaultValue}
        on-input={this.onChangeInput}
        on-keydown={this.onHandleKeyDown}
      />
    )
  }
})
