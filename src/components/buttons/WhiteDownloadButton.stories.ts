import WhiteDownloadButton from './WhiteDownloadButton.vue'

export default {
  component: WhiteDownloadButton,
  title: 'Components/Buttons',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' }
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const WhiteDownBtn = {
  args: {
    width: '120px',
    height: '40px',
    text: '다운로드',
    color: '#05153B',
    backgroundColor: '#ffffff',
    fontSize: '12px',
    fontWeight: 'normal',
    border: '1px solid #d2d2d2'
  }
}
