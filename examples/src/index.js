import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Tabs, { Tab } from '../../src/index';
import './styles.css';

const App = (props) => {
  return(
    <div className="app">
        <Tabs>
            <Tab tabName="Tab 1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda autem cum ducimus ea enim eos et, eveniet ex expedita, explicabo fugit impedit ipsa mollitia nostrum officia, quasi quo repudiandae!
            </Tab>
            <Tab tabName="Tab 2">
                Dolore, nobis ut. Beatae debitis distinctio enim eos illo libero officiis quaerat suscipit!
                Accusantium asperiores at dignissimos esse facere molestias quisquam ullam? Ad distinctio eius
                possimus voluptatem? Debitis, ipsam, sunt?
            </Tab>
            <Tab tabName="Tab 3">
                Animi enim, est eum iure nisi rem sequi vitae? Architecto beatae commodi culpa dolore eaque earum
                ex expedita fugiat illo ipsa iure, odit pariatur praesentium saepe sapiente sed tempore vitae!
            </Tab>
        </Tabs>
    </div>
  );
};

render(<App/>, document.getElementById('root'));
