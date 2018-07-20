import React, { Component } from 'react';

// Need to do `yarn add react-trello` to use the package.
import Board from 'react-trello';

// This NewCard will be replaced with AddJob
import NewCard from 'react-trello';
import './jobboard.css';

// Temporary Data
const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {
          id: 'Amazon',
          title: 'Amazon',
          description: 'Can AI make memes',
          label: '30 mins'
        },
        {
          id: 'Riot Games',
          title: 'Riot Games',
          description: 'Balance team',
          label: '5 mins',
          metadata: { sha: 'be312a1' }
        }
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
};

class JobBoard extends Component {
  render() {
    return (
      <Board
        data={data}
        cardDragClass="draggingCard"
        laneDragClass="draggingLane"
        draggable
        editable
        newCardTemplate={<NewCard />}
      />
    );
  }
}

export default JobBoard;
