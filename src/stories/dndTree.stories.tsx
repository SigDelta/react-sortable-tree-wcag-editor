import React, { useState } from 'react'
import { ReactSortableTreeProps, SortableTree } from '../react-sortable-tree'

import { StoryFn } from '@storybook/react'
import { TreeNodeId } from '../utils/default-handlers'

export default {
  title: 'StructureTree',
  component: SortableTree,
  parameters: {
    layout: 'centered',
  },
}
const data = [
  {
    title: 'Chicken',
    nodeId: 1,
    expanded: true,
    children: [{ title: 'Egg', nodeId: 5 }],
  },
  {
    title: 'Cow',
    nodeId: 2,
    expanded: true,
    children: [{ title: 'Milk', nodeId: 6 }],
  },
  {
    title: 'Sheep',
    nodeId: 3,
    expanded: true,
    children: [{ title: 'Wool', nodeId: 7 }],
  },
  {
    title: 'Pig',
    nodeId: 4,
    expanded: true,
    children: [{ title: 'Meet', nodeId: 8 }],
  },
  {
    title: 'Chicken 2',
    nodeId: 9,
    expanded: true,
    children: [{ title: 'Egg 2', nodeId: 13 }],
  },
  {
    title: 'Cow 2',
    nodeId: 10,
    expanded: true,
    children: [{ title: 'Milk 2', nodeId: 14 }],
  },
  {
    title: 'Sheep 2',
    nodeId: 11,
    expanded: true,
    children: [{ title: 'Wool 2', nodeId: 15 }],
  },
  {
    title: 'Pig 2',
    nodeId: 12,
    expanded: true,
    children: [{ title: 'Meet 2', nodeId: 16 }],
  },
]

const Template: StoryFn<ReactSortableTreeProps> = (args) => {
  const [treeData, setTreeData] = useState(data)
  const [selectedNodes, setSelectedNodes] = useState<TreeNodeId[]>([])
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div style={{ height: 800, width: 400 }}>
        <button
          onClick={() =>
            setSelectedNodes((prevNodes) => {
              if (!prevNodes.includes(1)) {
                return [...prevNodes, 1]
              }
              return prevNodes
            })
          }>
          Add tag id 1
        </button>
        <SortableTree
          treeData={treeData}
          onChange={setTreeData}
          setSelectedNodes={setSelectedNodes}
          selectedNodes={selectedNodes}
        />
      </div>
      <div style={{ height: 800, width: 200 }}>
        <h3>Selected Elements:</h3>
        <ul>
          {selectedNodes.map((elementId, index) => (
            <li key={index}>{elementId}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
