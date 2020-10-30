import React from 'react';

import './items-list.scss';

interface ItemsListProps {
  onItemSelected: Function, 
  renderItem: Function, 
  data: any
}

const ItemsList = (props: ItemsListProps) => {
  const { onItemSelected, renderItem, data } = props;

  const items = data.map((item: any) => {
    const label = renderItem(item);

    return (
      <li className="list-group-item list-group-item-secondary" 
        key={item.id}
        onClick={() => onItemSelected(item.id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

export default ItemsList;