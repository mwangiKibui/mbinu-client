class Loader extends React.Component {

    state = {
        loading: true
    };
    
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000); 
    }

    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    render(){
        return (
            <div className={`preloader ${this.state.loading ? '' : 'preloader-deactivate'}`}>
                <div className="spinner"></div>
            </div>
        );
    }
}
 
export default Loader;