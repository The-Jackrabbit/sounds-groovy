import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {List} from 'semantic-ui-react';

function Linklist(props) {
  const ml = props.mylinks;
  return (
    <List link>
      {ml.map(l =>
        <List.Item
          key={l.id}
          as='a'
          href={l.linkref}
        >{l.label}</List.Item>
      )}
    </List>
  );
}

Linklist.propTypes = {
  mylinks: PropTypes.array.isRequired
};

export default Linklist;
