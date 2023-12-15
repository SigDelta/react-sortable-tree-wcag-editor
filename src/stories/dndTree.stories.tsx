import React, { useState } from 'react'
import { ReactSortableTreeProps, SortableTree } from '../react-sortable-tree'

import { StoryFn } from '@storybook/react'
import { TreeItem, TreeNodeId } from '../utils/default-handlers'

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
const getNodeKey = (nodeId: TreeNodeId) => `test-${nodeId}`

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
          getNodeKey={getNodeKey}
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
