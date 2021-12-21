import { defineComponent } from '@vue/composition-api'
import Styles from './index.module.scss'
import MenuCmp from '@/components/menu'
import { constantRouterMap } from '@/router'
export default defineComponent({
  name: 'App',
  components: { MenuCmp },
  render() {
    return (
      <div class={Styles.container}>
        <menu-cmp class={Styles['menu-box']} dataSource={constantRouterMap} />
        <router-view class={Styles['view-box']} />
      </div>
    )
  }
})
