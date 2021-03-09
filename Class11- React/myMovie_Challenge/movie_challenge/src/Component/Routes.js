class Routes extends Component {
    render(){
      return(
        <Router>
          <div>
            <NavBar />
            <hr />
            <Route name="Home" exact path="/" component={Home}/>
            <Route name="Menu" path="/menu" component={Menu}/>
            <Route name="About" path="/about" component={About} />
          </div>
        </Router>
      );
    }
  }