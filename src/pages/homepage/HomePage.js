import {cards} from './Data';
import React from 'react';
import ALink from './ALink';
import AnAnchor from './AnAnchor';

const HomePage = () => {
  return (
    <div align='center'>
      {cards.map(c => {
        if(c.isalink)
          return (
            <ALink
              key={c.id}
              descr={c.description}
              hdr={c.header}
              src={c.image_src}
              tolink={c.tolink}
              postleft={c.postleft}
            />
          );
        return (
          <AnAnchor
            key={c.id}
            descr={c.description}
            hdr={c.header}
            myhref={c.myhref}
            src={c.image_src}
            postleft={c.postleft}
          />
        );
      })}
    </div>
  );
};

export default HomePage;

/*
 style={{padding: '10px'}}

 */