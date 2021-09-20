import React, { FC } from 'react';
import './styles.scss';
export interface IStringEntity {
  active: boolean;
  value: string;
}

export const StringEntity: FC<IStringEntity> = ({
    active,
    value
  }) => (
  <div className="string">
      <span className={`string__value ${active && 'string__value--selected'}`}>{value}</span>
  </div>
);
