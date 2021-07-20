import React, { useState } from 'react';
import { ComponentProps } from '../../types/main';
import './filter-card.component.sass';

interface FilterProps extends ComponentProps {
  name: string;
}

export const FilterCard = ({ name, children }: FilterProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpansion = (_: React.MouseEvent) => {
    setExpanded(!expanded);
  };

  return (
    <div className="filter-card">
      <div className={`header d-flex align-items-center justify-content-between ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
        <>{name}</>
        <img src="/icons/arrow-right.svg" height="16px" alt="toggle-expansion" className={`${expanded ? 'expanded' : ''}`}/>
      </div>
      {children && expanded && <div className="content">{children}</div>}
    </div>
  );
};
