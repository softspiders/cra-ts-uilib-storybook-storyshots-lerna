import React from 'react';

type Props = {
  name: String;
};

export const Hello = ({ name }: Props) => {
  return (
    <>
      <div>
        HELLO, {name} !!!
      </div>
    </>
  );
};
