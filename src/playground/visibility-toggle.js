class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);

        this.state = {
            visibility: false
        };
    }

    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.handleVisibilityToggle}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div><p>Hey, here are some details you can now see!</p></div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*let visibility = false;

const onVisibilityToggle = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const jsx = (
        <div>
            <h1>Visibility App</h1>
            <button onClick={onVisibilityToggle}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div><p>Hey, here are some details you can now see!</p></div>
            )}        
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

renderApp();
*/