import React, { } from 'react';
import { connect, StoreProp } from 'mini-store';
import classNames from 'classnames';

import { MenuStore } from './menu';

interface BaseMenuItemProps {
 eventKey?: React.Key;
 className?: string;
}

export type MenuItemProps = BaseMenuItemProps & MenuStore & StoreProp


class MenuItem extends React.Component<MenuItemProps> {
 static displayName = "MenuItem";

 constructor(props: MenuItemProps) {
  super(props);
  this.onItemClick = this.onItemClick.bind(this);
 }

 onItemClick() {
  const { eventKey, onSelect } = this.props;
  onSelect && onSelect(eventKey + "");
 }
 render() {
  const { className, children, eventKey, selectedKey, } = this.props;
  const classes = classNames('ez-menu-item', className, {
   'ez-menu-item-selected': eventKey === selectedKey
  });
  return (
   <li className={classes} onClick={this.onItemClick}>
    {children}
   </li>
  );
 }
}

MenuItem.displayName = "MenuItem";

export default connect<MenuStore>((state: MenuStore) => {
 return {
  selectedKey: state.selectedKey,
  onSelect: state.onSelect,
 }
}
)(MenuItem);