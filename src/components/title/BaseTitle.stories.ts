import { eventNames } from 'process'
import BaseTitleVue from './BaseTitle.vue'

export default {
  component: BaseTitleVue,
  title: 'Components/Title',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const BaseTitle = {
  args: {
    text: '제목 입니다'
  }
}
