import React from 'react';
import { iconLinks } from './data';
import IconLink from './IconLink';

function IconLinks({ parentClass, itemClass }) {
    return (
        <ul className={parentClass}>
            {iconLinks.map((link) => {
                return <IconLink key={link.id} link={link} itemClass={itemClass} />;
            })}
            {/* <li>
                <a href={iconLinks[0].href} className={itemClass}>
                <i className={iconLinks[0].icon}></i>
                </a>
            </li>
            <li>
                <a href={iconLinks[1].href} className={itemClass}>
                <i className={iconLinks[1].icon}></i>
                </a>
            </li>
            <li>
                <a href={iconLinks[2].href} className={itemClass}>
                <i className={iconLinks[2].icon}></i>
                </a>
            </li> */}
        </ul>
    );
}

export default IconLinks
