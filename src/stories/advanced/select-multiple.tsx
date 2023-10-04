import React, { useRef, useState } from 'react'
import SortableTree from '../..'

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

const getNodeKey = ({ node: { id } }: any) => `test-${id}`

function SelectMultipleNodes() {
  const [treeData, setTreeData] = useState(data)
  const updateInnerStateRef = useRef({ updateInnerState: () => {} })

  const updateChildState = (updateInnerState) => {
    updateInnerStateRef.current.updateInnerState = updateInnerState
  }

  return (
    <div style={{ height: 600, width: 700 }}>
      <SortableTree
        treeData={treeData}
        onChange={setTreeData}
        onDragStateChanged={(params) => {}}
        getNodeKey={getNodeKey}
        setSelectedNodes={updateChildState}
      />
      <br />
      <br />
      <button
        type="button"
        onClick={() =>
          updateInnerStateRef.current.updateInnerState((prevState) => ({
            selectedNodesList: [
              ...prevState,
              { path: [getNodeKey({ node: data[0] })], ...data[0] },
            ],
          }))
        }>
        Add the chicken to selection
      </button>
      <button
        type="button"
        onClick={() =>
          updateInnerStateRef.current.updateInnerState(() => ({
            selectedNodesList: [],
          }))
        }>
        Clear selection
      </button>
    </div>
  )
}

export default SelectMultipleNodes
