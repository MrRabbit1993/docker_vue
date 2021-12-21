import { defineComponent, PropType } from '@vue/composition-api'
import Styles from './index.module.scss'
import { RouteCustom } from '@/types/router'
interface IMenu {
  dataSource: RouteCustom[]
}
interface IMenuInstance {
  onToggleMenu(item: RouteCustom): void
}

export default defineComponent<IMenu, IMenuInstance>({
  name: 'MenuCmp',
  props: {
    dataSource: {
      type: Array as PropType<ReadonlyArray<RouteCustom>>
    }
  },
  setup(props, { root }) {
    const onToggleMenu = (item: RouteCustom) => {
      root.$router.push({ path: item.path })
    }
    return { onToggleMenu }
  },
  render() {
    return (
      <div class={Styles.container}>
        {this.dataSource?.map((item) => (
          <div class={Styles.item} onClick={() => this.onToggleMenu(item)}>
            {item.title}
          </div>
        ))}
      </div>
    )
  }
})
