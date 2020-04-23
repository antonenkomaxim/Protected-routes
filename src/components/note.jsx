// class StartFild extends React.Component {

// 	constructor() {
// 		super();
// 		this.state = { isStartGame: false };
// 	}

// 	componentDidMount() {

// 		document.addEventListener("keyup", (event) => {
// 			if (event.key === 'Enter') {
// 				this.setState({ isStartGame: true })
// 			}
// 		});
// 	}


// 	startingOrNot = () => {
// 		return (
// 			this.state.isStartGame ? <GameFild /> : <StartGame />
// 		)
// 	}

// 	render() {
// 		return (
// 			<div className="game-fild">
// 				{this.startingOrNot()}
// 			</div >

// 		);
// 	}
// };



// function deleteCookie(name) {
// 	setCookie(name, "", {
// 		'max-age': -1
// 	})
// }

// /*=================================================
// ===========================================*/

// <PrivateRoute path='/protected' component={Protected} />




// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route {...rest} render={(props) => (
// 		fakeAuth.isAuthenticated === true
// 			? <Component {...props} />
// 			: <Redirect to='/login' />
// 	)} />
// )