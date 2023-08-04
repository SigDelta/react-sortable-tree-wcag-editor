import React, { useState } from 'react'
import SortableTree from '../..'
// In your own app, you would need to use import styles once in the app
// import 'react-sortable-tree/styles.css';

const data = [
  { title: 'Chicken', id:1, expanded: true, children: [{ title: 'Egg', id: 5 }] },
  { title: 'Cow', id:2, expanded: true, children: [{ title: 'Milk', id: 6 }] },
  { title: 'Sheep', id:3, expanded: true, children: [{ title: 'Wool', id: 7 }] },
  { title: 'Pig', id:4, expanded: true, children: [{ title: 'Meet', id: 8 }] },
];

const SelectMultipleNodes: React.FC = () => {
  const [treeData, setTreeData] = useState(data);
   const getNodeKey = ({ node: { id } }: any) => id
  return (
    <div style={{ height: 600, width: 700 }}>
      <SortableTree
        treeData={treeData}
        onChange={setTreeData}
        onDragStateChanged={(params) => {

        }}
        getNodeKey={getNodeKey}
      />
    </div>
  )
}

export default SelectMultipleNodes;
