import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./config";

class QueryField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawYara: props.rawYara
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {}

    componentWillReceiveProps(newProps) {
        this.setState({
            rawYara: newProps.rawYara,
            isLocked: newProps.isLocked
        });
    }

    handleQuery(event, method, priority) {
        axios
            .create()
            .post(API_URL + "/query/" + priority, {
                raw_yara: this.state.rawYara,
                method: method
            })
            .then(response => {
                if (method === "query") {
                    this.props.updateQhash(
                        response.data.query_hash,
                        this.state.rawYara
                    );
                } else if (method === "parse") {
                    this.props.updateQueryPlan(
                        response.data,
                        this.state.rawYara
                    );
                }
            })
            .catch(error => {
                let err = error.toString();

                if (error.response) {
                    err = error.response.data.error;
                }

                this.props.updateQueryError(err, this.state.rawYara);
            });

        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleEdit(event) {
        this.props.updateQhash(null);
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div>
                    <h2>
                        <i className="fa fa-spinner fa-spin spin-big" />{" "}
                        Loading...
                    </h2>
                </div>
            );
        }

        return (
            <div>
                <div class="btn-group mb-1" role="group">
                    <button
                        type="button"
                        class="btn btn-success btn-lg"
                        onClick={event =>
                            this.handleQuery(event, "query", "medium")
                        }
                    >
                        Query
                    </button>
                    <div class="btn-group" role="group">
                        <button
                            type="button"
                            class="btn btn-success dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        ></button>
                        <div class="dropdown-menu">
                            <a
                                class="dropdown-item"
                                href="#"
                                onClick={event =>
                                    this.handleQuery(event, "query", "low")
                                }
                            >
                                Low Priority Query
                            </a>
                            <a
                                class="dropdown-item"
                                href="#"
                                onClick={event =>
                                    this.handleQuery(event, "query", "medium")
                                }
                            >
                                Standard Priority Query
                            </a>
                            <a
                                class="dropdown-item"
                                href="#"
                                onClick={event =>
                                    this.handleQuery(event, "query", "high")
                                }
                            >
                                High Priority Query
                            </a>
                        </div>
                    </div>
                    {this.state.isLocked ? (
                        <button
                            className="btn btn-secondary btn-lg"
                            name="clone"
                            type="submit"
                            onClick={this.handleEdit}
                        >
                            <span className="fa fa-clone" /> Edit
                        </button>
                    ) : (
                        <button
                            className="btn btn-secondary btn-lg"
                            name="parse"
                            type="submit"
                            onClick={event => this.handleQuery(event, "parse")}
                        >
                            <span className="fa fa-code" /> Parse
                        </button>
                    )}
                </div>
                <div className="form-group">
                    <textarea
                        name="rawYara"
                        className="form-control mquery-yara-input"
                        onChange={this.handleInputChange}
                        readOnly={this.state.isLocked}
                        value={this.state.rawYara}
                    />
                </div>
            </div>
        );
    }
}

export default QueryField;
