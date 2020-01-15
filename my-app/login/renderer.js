import react from "react";
import reactDom from "react-dom";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return <div> Hello World</div>
    }

}

ReactDOM.render(<App />, document.getElementById("root"));