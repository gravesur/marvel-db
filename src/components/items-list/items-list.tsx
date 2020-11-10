import React from 'react';

import { Item } from '../../types';

import './items-list.scss';

interface ItemsListProps {
  onItemSelected: Function;
  renderItem: Function;
  data: Item[];
}

const ItemsList = (props: ItemsListProps) => {
  const { onItemSelected, renderItem, data } = props;

  const items = data.map((item: Item) => {
    const label = renderItem(item);

    return (
      <li
        className="list-group-item list-group-item-secondary"
        key={item.id}
        onClick={() => onItemSelected(item.id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemsList;
