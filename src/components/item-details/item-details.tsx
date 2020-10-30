import React from 'react';

import './item-details.scss';

interface RecordProps {
  field: any, 
  label: any,
  item: any
}

export const Record = (props: RecordProps) => {
  const { item, field, label } = props;

  return (
    <li className="list-group-item list-group-item-secondary">
      <a href={item[field]} target="blank" >{label}</a>
    </li>
  );
};


interface ItemDetailsProps {
  item: any, 
  renderItem: any, 
  children: any
}

const ItemDetails = (props: ItemDetailsProps) => {
  const { item, renderItem, children } = props;
  const label = renderItem(item);

  return (
    <div className="item-details card text-center">
      <div className="card-header bg-dark text-white">
        <h3>{label}</h3>
      </div>
      <div className="card-body p-0">
        <img src={`${item.img}/portrait_uncanny.jpg`}
          alt="Character_image" className="img-fluid w-100"/>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, child => {
              return React.cloneElement(child, {item});
            })
          }
        </ul>
        <span>{item.description}</span>
      </div>
    </div>
  );
};

export default ItemDetails;