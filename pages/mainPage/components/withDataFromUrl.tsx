import * as React from 'react';

export const withDataFromUrl = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      news: [],
    };

    timerID;

    fetchNews = (feedUrl, numberOfPosts, updateInterval) => {
      clearInterval(this.timerID);

      this.timerID = setInterval(
        () => this.pullData(feedUrl, numberOfPosts),
        updateInterval,
      );
    };

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    pullData(feedUrl, numberOfPosts) {
      fetch(feedUrl)
        .then((response) => {
           const { status } = response;

            if (status !== 200) {
              console.log(`Looks like there was a problem. Status Code: ${ status }`);
              return;
            }

            response.json().then((data) => {
              this.setState({
                news: data.slice(data.length - numberOfPosts)
              });
            });
          }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        })
    }

    render() {
      return <WrappedComponent news={ this.state.news } fetchNews={ this.fetchNews } { ...this.props } />;
    }
  };
};
