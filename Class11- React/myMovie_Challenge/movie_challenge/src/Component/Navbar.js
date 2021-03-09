class NavBar extends Component {
    render(){
      return(
        <div className="nav">
          <Link to="/">Home</Link> | 
          <Link to="menu">Menu</Link> | 
          <Link to="about">About</Link>
        </div>
      );
    }
  }