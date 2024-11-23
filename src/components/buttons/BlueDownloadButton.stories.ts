import BlueDownloadButton from './BlueDownloadButton.vue'
import Download from '@/assets/share/group.svg'

export default {
  component: BlueDownloadButton,
  title: 'Components/Buttons',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' }
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const BlueDownBtn = {
  args: {
    width: '120px',
    height: '40px',
    text: '다운로드',
    color: '#FFF',
    backgroundColor: '#05153B',
    fontSize: '12px',
    fontWeight: 'normal',
    border: '1px solid #05153B'
  }
}
