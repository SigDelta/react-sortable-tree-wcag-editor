import React, { useState } from 'react'
import {
  ReactSortableTreeProps,
  SortableTreeWithoutDndContext,
} from '../react-sortable-tree'

import { StoryFn } from '@storybook/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default {
  title: 'StructureTree',
  component: SortableTreeWithoutDndContext,
  parameters: {
    layout: 'centered',
  },
}
const data = [
  {
    title: 'Chicken',
    id: 1,
    expanded: true,
    children: [{ title: 'Egg', id: 5 }],
  },
  { title: 'Cow', id: 2, expanded: true, children: [{ title: 'Milk', id: 6 }] },
  {
    title: 'Sheep',
    id: 3,
    expanded: true,
    children: [{ title: 'Wool', id: 7 }],
  },
  { title: 'Pig', id: 4, expanded: true, children: [{ title: 'Meet', id: 8 }] },
  {
    title: 'Chicken 2',
    id: 9,
    expanded: true,
    children: [{ title: 'Egg 2', id: 13 }],
  },
  {
    title: 'Cow 2',
    id: 10,
    expanded: true,
    children: [{ title: 'Milk 2', id: 14 }],
  },
  {
    title: 'Sheep 2',
    id: 11,
    expanded: true,
    children: [{ title: 'Wool 2', id: 15 }],
  },
  {
    title: 'Pig 2',
    id: 12,
    expanded: true,
    children: [{ title: 'Meet 2', id: 16 }],
  },
]

const Template: StoryFn<ReactSortableTreeProps> = (args) => {
  const [treeData, setTreeData] = useState(data)
  return (
    <DndProvider backend={HTML5Backend}>
      <SortableTreeWithoutDndContext
        treeData={treeData}
        onChange={setTreeData}
      />
    </DndProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
