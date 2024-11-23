import DayOffBlueButton from './DayOffBlueButton.vue'

export default {
  component: DayOffBlueButton,
  title: 'Components/Buttons',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const DayOffBlueBtn = {
  args: {
    width: '100px',
    height: '40px',
    text: '연차 - 종일',
    color: '#4099FC',
    backgroundColor: '#E4F1FF',
    fontSize: '12px',
    fontWeight: 'bold',
    border: '1px solid #E4F1FF'
  }
}
