import GroupTable from './GroupTable.vue'
import type { commonTableHeaders, level } from '@/types/index'

export default {
  title: 'Components/Table',
  component: GroupTable,
  tags: ['autodocs'],
  argTypes: {
    headers: {
      control: 'object',
      description: '헤더 정보'
    },
    data: {
      control: 'object',
      description: '테이블 정보'
    },
    isScrollable: {
      control: 'boolean',
      description: '스크롤 여부'
    }
  }
}

export const groupTable = {
  args: {
    headers: [
      { title: 'LV1', key: 'lv1' },
      { title: 'LV2', key: 'lv2' },
      { title: 'LV3', key: 'lv3' },
      { title: 'LV4', key: 'lv4' },
      { title: 'LV5', key: 'lv5' }
    ] as Array<commonTableHeaders>,
    data: [
      { lv1: 'Group A', lv2: 'Team 1', lv3: 'Member 1', lv4: '', lv5: '' },
      { lv1: 'Group A', lv2: 'Team 1', lv3: 'Member 2', lv4: '', lv5: '' },
      { lv1: 'Group A', lv2: 'Team 2', lv3: 'Member 3', lv4: '', lv5: '' },
      { lv1: 'Group B', lv2: 'Team 3', lv3: 'Member 4', lv4: '', lv5: '' },
      { lv1: 'Group B', lv2: 'Team 4', lv3: 'Member 5', lv4: '', lv5: '' }
    ] as Array<level>,
    isScrollable: false
  }
}
