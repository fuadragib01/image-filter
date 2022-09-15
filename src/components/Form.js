import React from "react";

export default class Form extends React.Component {

    state= {
        title: '',
        text: "",
        library: '',
        isAwesome: ''
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
        } else if (e.target.type === 'select-one') {
            this.setState( { 
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState( { 
                isAwesome: e.target.checked,
            });
        } else {
            console.log("Nothing here...");
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {title, text, library, isAwesome} = this.state;
        console.log(title,text, library, isAwesome);
        this.setState({
            title: '',
            text: '',
            library: '',
            isAwesome: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="title" placeholder="Title here" value={this.state.title} onChange={this.handleChange} /> <br /> <br />
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} /> <br /> <br />
                    <select value={this.state.library} onChange={this.handleChange} >
                        <option value="">None</option>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br /> <br />
                    <input id="is" type="checkbox" checked={this.state.isAwesome} onChange={this.handleChange} value="Awesome" /><label htmlFor="is">Awesome</label><br /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}