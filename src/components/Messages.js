import React from 'react';

import Message from './Message';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

const Messages = ({ match }) => (
  <div>
    {console.log(match)}
    <ul>
    {/* <Link to={`${match.url}/1`}><li key="1">Message Number - 1 </li></Link> */}
    <Link to={`/messages/1`}><li key="1">Message Number - 1 </li></Link>
    <Link to={`/messages/2`}><li key="2">Message Number - 2 </li></Link>
    <Link to={`/messages/3`}><li key="3">Message Number - 3 </li></Link>
    <Link to={`/messages/4`}><li key="4">Message Number - 4 </li></Link>
    {/* {
        [...Array(5).keys()].map(n => {
            return <li key={n}>
                    <Link to={`${match.url}/${n+1}`}>
                      Message {n+1}
                    </Link>
                  </li>;
        })
    } */}
    </ul>
    <Switch>
      {/* <Route path=`{match.url}:id` component={Message} /> */}
      <Route path="/messages/:id" component={Message} />
      <Route
        path={match.url}
        render={() => <h3>Please select a message</h3>}
      />
    </Switch>
  </div>
);

export default Messages;