import React from "react";

export default class Form extends React.Component {

    state= {
        title: '',
        text: "",
    }

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState( { 
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState( { 
                text: e.target.value,
            });
        } else {
            console.log("Nothing here...");
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {title, text} = this.state;
        console.log(title,text);
        this.setState({
            title: '',
            text: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="title" placeholder="Title here" value={this.state.title} onChange={this.handleChange} /> <br /> <br />
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} /> <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}