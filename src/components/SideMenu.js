import React from 'react';
import MenuItem from './MenuItem';
const menuItems = [
  {
    name: 'Wallet',
    exact: true,
    to: '',
    iconClassName: 'bi-wallet',
  },
  {
    name: 'Last Transaction',
    to: `/last-transaction`,
    iconClassName: 'bi-arrow-left-right',
  },
];

const SideMenu = (props) => {
  return (
    <>
      <div className="side-menu">
        <div className="divider"></div>
        <div className="main-menu">
          <ul>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                iconClassName={menuItem.iconClassName}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
