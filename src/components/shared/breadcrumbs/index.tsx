import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
      {pathnames.map((part, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const capitalizedPart = part.charAt(0).toUpperCase() + part.slice(1);
        return isLast ? (
          <span key={part}>{capitalizedPart}</span>
        ) : (
          <Link to={routeTo} key={part}>
            {capitalizedPart}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
