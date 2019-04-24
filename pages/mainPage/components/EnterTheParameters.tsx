import * as React from 'react';

const styles = require('./enterTheParameters.scss');

interface IEnterTheParametersProps {
  onInputChange: Function;
  feedUrl: string;
  numberOfPosts: number;
  updateInterval: number;
}

export const EnterTheParameters = (props: IEnterTheParametersProps) => {

  const { onInputChange, feedUrl, numberOfPosts, updateInterval } = props;

  return (
    <div className={ styles['inputs'] }>
      <label>Feed URL</label>
      <input type='text' value={ feedUrl } onChange={ (event) => {
        onInputChange(event, 'feedUrl')
      } }/>
      <label>Number of posts to display</label>
      <input type='number' value={ numberOfPosts } onChange={ (event) => {
        onInputChange(event, 'numberOfPosts')
      } }/>
      <label>Update interval in ms</label>
      <input type='number' value={ updateInterval } onChange={ (event) => {
        onInputChange(event, 'updateInterval')
      } }/>
    </div>
  );
};