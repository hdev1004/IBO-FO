import BaseWhiteButton from './BaseWhiteButton.vue'

export default {
  component: BaseWhiteButton,
  title: 'Components/Buttons',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const BaseWhiteBtn = {
  args: {
    width: '100px',
    height: '40px',
    text: '취소',
    color: '#000',
    backgroundColor: '#ffffff',
    fontSize: '12px',
    fontWeight: 'normal'
  }
}
