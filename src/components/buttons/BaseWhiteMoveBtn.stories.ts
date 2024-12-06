import BaseWhiteMoveBtn from './BaseWhiteMoveBtn.vue'

export default {
  component: BaseWhiteMoveBtn,
  title: 'Components/Buttons',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const BaseWhiteMoveButton = {
  args: {
    width: '100px',
    height: '40px',
    text: '문구',
    color: '#000',
    backgroundColor: '#ffffff',
    fontSize: '12px',
    fontWeight: 'normal',
    border: '1px solid #d2d2d2'
  }
}
