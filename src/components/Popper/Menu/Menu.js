import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItems';
import styles from './Menu.module.scss';
import Header from './Header';
const cx = classNames.bind(styles);
function Menu({ children, items = [], hideOnClick = false, onChange }) {
   const [history, setHistory] = useState([{ data: items }]);
   const currentMenu = history[history.length - 1];

   const renderItems = () => {
      return currentMenu.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     console.log(item);
                  }
               }}
            />
         );
      });
   };

   const renderResult = (attrs) => (
      <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
         <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
               <Header
                  title={currentMenu.title}
                  onBack={() => {
                     setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
               />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
         </PopperWrapper>
      </div>
   );

   const handleResetMenu = () => {
      setHistory((prev) => prev.slice(0, 1));
   };

   return (
      <div>
         <Tippy
            interactive
            delay={[0, 400]}
            offset={[16, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
         >
            {children}
         </Tippy>
      </div>
   );
}

Menu.propTypes = {
   children: PropTypes.node.isRequired,
   items: PropTypes.array,
   hideOnClick: PropTypes.bool,
   onChange: PropTypes.func,
};
export default Menu;
