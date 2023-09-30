import React, { useState, CSSProperties } from 'react';
import classnames from 'classnames';
import { connect, StoreProp } from 'mini-store';
import { MenuMode, MenuStore } from './menu';
import { MenuItemProps } from './menuItem';

interface BaseSubMenuProps {
 className?: string,
 style?: CSSProperties,
 eventKey?: React.Key,
 title: React.ReactNode,
 mode?: MenuMode
}

export type SubMenuProps = BaseSubMenuProps & MenuStore & StoreProp

const SubMenu: React.FC<SubMenuProps> = (props) => {
 const { className, style, mode, title, children,
  onOpen,
  openedKey,
  onSelect,
  selectedKey,
  eventKey, } = props;
 const classes = classnames('ez-submenu', className, {
  'ez-submenu-horizontal': mode !== 'vertical',
  'ez-submenu-vertical': mode === 'vertical',
  'ez-submenu-opend': eventKey === openedKey,
  'ez-submenu-selected': eventKey === selectedKey,
 });

 const [open, setOpen] = useState(false);

 const onMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.preventDefault();
  setOpen(true);
 }

 const onMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.preventDefault();
  setOpen(false);
 }

 // 点击子菜单时，选中父菜单
 const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.preventDefault();
  onSelect && onSelect(eventKey + "");
  if (!open) {
   onOpen && onOpen(eventKey + "");
  }
  setOpen(!open);
 }

 const onMouseClickHandler = mode === 'vertical' ? {
  onClick
 } : {};

 const onMouseHoverHandler = mode === 'horizontal' ? {
  onMouseEnter,
  onMouseLeave,
 } : {}

 const renderChildren = () => {
  const classes = classnames('ez-menu-sub', className, {
   'ez-menu-sub-open': open,
  });
  const childrenComponent = React.Children.map(children, (item, index) => {
   const childElement = item as React.FunctionComponentElement<MenuItemProps>;
   return React.cloneElement(childElement, {
    eventKey: childElement.key + "",
   });
  })
  return (
   <ul className={classes}>
    {childrenComponent}
   </ul>
  )
 }

 return (
  <li className={classes} style={style} {...onMouseClickHandler} {...onMouseHoverHandler}>
   <div className="ez-submenu-title">
    <span>{title}</span>
    <i className="ez-menu-submenu-arrow"></i>
   </div>
   {
    renderChildren()
   }
  </li>
 )
}

SubMenu.displayName = "SubMenu";
function mapStateToProps(state: MenuStore) {
 return {
  openedKey: state.openedKey,
  onOpen: state.onOpen,
  selectedKey: state.selectedKey,
  onSelect: state.onSelect,
  mode: state.mode,
 }
}
export default connect(mapStateToProps)(SubMenu);