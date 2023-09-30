import React, { Component } from 'react';
import { Provider, create, Store, } from 'mini-store';
import classNames from 'classnames';
import MenuItem, { MenuItemProps } from './menuItem';
import SubMenu, { SubMenuProps } from './subMenu';

export type MenuMode = 'horizontal' | 'vertical' | 'inline';

export type MenuSelectEventHandler = (selectedKey: string) => void
export type MenuOpenEventHandler = (openedKey: string) => void


interface MenuProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick' | 'onSelect'> {
 mode?: MenuMode;
 defaultSelectedKey?: string;
 selectedKey?: string;
 defaultOpenKey?: string;
 openKey?: string;
 className?: string;
 style?: React.CSSProperties;
 onSelect?: MenuSelectEventHandler;
}



export interface MenuStore {
 onSelect?: MenuSelectEventHandler;
 selectedKey?: string;
 onOpen?: MenuOpenEventHandler;
 openedKey?: string;
 mode?: MenuMode,
}

class Menu extends Component<MenuProps> {

 static Item = MenuItem;
 static SubMenu = SubMenu;

 constructor(props: MenuProps) {
  super(props);
  this.onSelect = this.onSelect.bind(this);
  this.store = create({
   mode: props.mode || 'horizontal',
   selectedKey: props.selectedKey || props.defaultSelectedKey || '',
   onSelect: this.onSelect,
   onOpen: this.onOpen,
   openedKey: props.openKey || props.defaultOpenKey || '',
  })
 }

 store: Store<MenuStore>;

 onSelect(key: string) {
  const { props } = this;
  let { selectedKey } = this.store.getState();
  selectedKey = key;
  this.store.setState({
   selectedKey,
  });
  props.onSelect && props.onSelect(selectedKey);
 }

 onOpen(key: string) {

 }

 renderChildren() {
  const { children } = this.props;
  return React.Children.map(children, item => {
   const reactElement = item as React.FunctionComponentElement<MenuItemProps | SubMenuProps>;
   return React.cloneElement(reactElement, {
    eventKey: reactElement.key + "",
   })
  })
 }

 render() {
  const { className, mode, style } = this.props;
  const classes = classNames('ez-menu', className, {
   [`ez-menu-${mode}`]: true,
  });
  return (
   <Provider store={this.store}>
    <ul className={classes} style={style}>
     {this.renderChildren()}
    </ul>
   </Provider>
  );
 }
}


export default Menu;