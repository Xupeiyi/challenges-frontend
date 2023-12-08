import * as React from "react";
import ApiClient from "../services/ApiClient";


class ChallengeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a: '', 
            b: '',
            user: '',
            message: '',
            guess: 0
        };
        this.handleSubmitResult = this.handleSubmitResult.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        ApiClient.challenge().then(
            res => {
                if (res.ok) {
                    res.json().then(json => {
                        this.setState({a: json.factorA, b: json.factorB});
                    });
                } else {
                    this.updateMessage("Can't reach the server");
                }
            }
        );
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }


}