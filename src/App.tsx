import { defineComponent } from '@vue/composition-api'
import Styles from './index.module.scss'
export default defineComponent({
  name: 'App',
  render() {
    return (
      <div id={Styles.app}>
        <img alt="Vue logo" src={require('./assets/logo.png')} />
        <div class={Styles['title-info']}>3232</div>
        <div class={Styles.titleInfo}>3232</div>
      </div>
    )
  }
})
