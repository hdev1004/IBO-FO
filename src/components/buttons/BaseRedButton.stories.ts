import BaseRedButton from './BaseRedButton.vue'

export default {
  component: BaseRedButton,
  title: 'Components/Buttons',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const BaseRedBtn = {
  args: {
    width: '100px',
    height: '40px',
    text: '반려',
    color: '#FFF',
    backgroundColor: '#F33E3E',
    fontSize: '12px',
    fontWeight: 'normal',
    border: '1px solid #F33E3E'
  }
}
