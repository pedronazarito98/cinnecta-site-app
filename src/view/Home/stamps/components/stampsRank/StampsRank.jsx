import React from 'react';
import { WrapperRank } from './styledStampsRank';

export function StampsRank({rank, description,fontType}){
    return (
      <WrapperRank fontType={fontType}>
        <h1>{rank} </h1>
        <p>{description} </p>
      </WrapperRank>
    );
}