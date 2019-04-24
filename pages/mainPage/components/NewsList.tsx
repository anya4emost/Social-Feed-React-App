import * as React from 'react';

const styles = require('./newsList.scss');

interface INewsListProps {
  news: any;
}

export const NewsList=(props:INewsListProps)=> {
  const { news } = props;
  return (
    <main>
      NewsList
      { news.map(item => {
        const date = new Date(Date.parse(item.created_at));
        const time = `${ date.getDate() }/${ date.getMonth() }/${ date.getFullYear() } ${ date.getHours() }:${ date.getMinutes() }`;
        return (
          <article key={item.id}>
            <div>
              <span>{ time }</span>
              <span>{ item.user.name }</span>
            </div>
            <div>
              <div className={ styles['text'] }>{ item.text }</div>
            </div>
          </article>)
      }) }
    </main>
  );
};