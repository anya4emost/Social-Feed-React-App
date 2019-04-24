import * as React from 'react';
import { NewsList } from "./NewsList";
import { EnterTheParameters } from "./EnterTheParameters";
import { withDataFromUrl } from "./withDataFromUrl";
interface INews{
  feedUrl: string;
  numberOfPosts: number;
  updateInterval: number;
}
interface IMainComponentProps {
  fetchNews(feedUrl: string, numberOfPosts: number, updateInterval: number): void;
  news: INews;
}

interface IMainComponentState {
  feedUrl: string;
  numberOfPosts: number;
  updateInterval: number;
}

class MainComponentContainer extends React.PureComponent
  <IMainComponentProps, IMainComponentState> {

  state = {
    feedUrl: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
    numberOfPosts: 10,
    updateInterval: 1000,
  };

  startRequest = () => {
    const { fetchNews } = this.props;
    const { feedUrl, numberOfPosts, updateInterval } = this.state;
    fetchNews(feedUrl, numberOfPosts, updateInterval);
  };


  render() {
    const { news } = this.props;
    const { feedUrl, numberOfPosts, updateInterval } = this.state;
    return (
      <div>
        <EnterTheParameters onInputChange={ this.onInputChange }
                            feedUrl={ feedUrl }
                            numberOfPosts={ numberOfPosts }
                            updateInterval={ updateInterval }
        />
        <NewsList news={ news }/>
      </div>
    );
  }

  componentDidMount() {
    this.startRequest();
  }

  componentDidUpdate() {
    this.startRequest();
  }

  onInputChange = (event, feed) => {

    switch (feed) {
      case 'feedUrl':
        this.setState({ feedUrl: event.target.value });
        break;

      case 'numberOfPosts':
        this.setState({ numberOfPosts: event.target.value });
        break;

      default:
        this.setState({ updateInterval: event.target.value });
        break;
    }

  }
}

export const MainComponent = withDataFromUrl(MainComponentContainer);
