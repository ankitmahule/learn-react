import { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
        company: "",
        location: "",
        blog: "",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/ankitmahule`);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    this.state = null;
  }

  render() {
    return (
      <div className="container">
        <div className="">
          <h1 className="text-2xl mt-10 font-bold border-bottom py-2 my-4">
            About FoodVila
          </h1>
          <p>
            A Food Ordering App for your hunger needs. Order tastiest foods from
            the prominent restaurants at your finger tips and enjoy the comfort
            of eating food at your home
          </p>
        </div>
        <h1 className="text-2xl mt-10 font-bold py-2 my-6">Created By</h1>
        <div className="flex items-center">
          <div className="image mr-10">
            <img src={this.state.userInfo.avatar_url} alt="user image" />
          </div>
          <div className="info">
            <h1 className="text-4xl font-bold">{this.state.userInfo.name}</h1>
            <h2 className="my-2">{this.state.userInfo.bio}</h2>
            <h2 className="my-2">{this.state.userInfo.company}</h2>
            <h2 className="my-2">{this.state.userInfo.location}</h2>
            <h2 className="my-2">{this.state.userInfo.blog}</h2>
          </div>
        </div>
      </div>
    );
  }
}
