import LineTabVue from './LineTab.vue'

export default {
  component: LineTabVue,
  title: 'Components/Tab',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const LineTab = {
  args: {
    tabs: ['Test1', 'Test2', 'Test3']
  }
}
