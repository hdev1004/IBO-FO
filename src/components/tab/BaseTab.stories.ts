import BaseTabVue from './BaseTab.vue'

export default {
  component: BaseTabVue,
  title: 'Components/Tab',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const BaseTab = {
  args: {
    tabs: ['Test1', 'Test2', 'Test3']
  }
}
