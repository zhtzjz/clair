export default {
  install (Vue) {
    if (typeof window !== 'undefined') {
      const vm = new Vue()
      const notify = () => {
        vm.$notify({
          title: '️⚠️️️️️ 重要提醒',
          type: 'error',
          duration: 0,
          dangerouslySetInnerHTML: true,
          message: `
            <div>
              <div>
                1. 强烈建议使用 <a href="https://clair.lap.360.cn/">新版 Clair 组件库</a>。
              </div>
              <div>
                2. 请使用 <em>vue@2.5.x</em> 或者 <em>vue@2.6.7+</em>。
              </div>
              <div>
                3. 千万<b>不要</b>使用 <em>vue@2.6.0 - 2.6.6</em>。
              </div>

              相关链接：<a href="https://github.com/vuejs/vue/issues/9553">vue/issues/9553</a>
            </div>
          `
        })
      }

      window.addEventListener('load', () => {
        vm.$warning({
          title: '重要更新',
          msg: '新版 Clair 已经发布啦，要不要尝尝鲜？'
        })
          .then(_ => {
            location.href = 'https://clair.lap.360.cn/'
          })
          .catch(_ => {
            notify()
          })
      })
    }
  }
}
