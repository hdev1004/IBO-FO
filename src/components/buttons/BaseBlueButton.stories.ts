import BaseBlueButton from './BaseBlueButton.vue'

export default {
  component: BaseBlueButton,
  title: 'Components/Buttons',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const BaseBlueBtn = {
  args: {
    width: '100px',
    height: '40px',
    text: '확인',
    color: '#FFF',
    backgroundColor: '#05153B',
    fontSize: '12px',
    fontWeight: 'normal'
  }
}
