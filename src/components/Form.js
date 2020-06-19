import React from 'react';

class Form extends React.Component {

    state = {
        categoria: ''
    };

    handleChange = (e) => {
        this.setState({
            categoria: e.target.value
        });
    };

    handleSubmit = () => {
        this.props.requestNews(this.state.categoria);
    };

render() {
    return (
        <div className="buscador row">
            <div className="col s12 m8 offset-m2">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="text-center font-weight-bolder">Categories</h2>

                    <div className="input-field col s12 m8">
                        <select className="prueba" onChange={this.handleChange}>
                            <option value="general" defaultValue>General</option>
                            <option value="entertaiment" >Entertaiment</option>
                            <option value="sports" >Sports</option>
                            <option value="science" >Science</option>
                            <option value="health" >Health</option>
                            <option value="technology" >Technology</option>
                        </select>

                        <button type="submit" className="btn mt-1 pt-1">Search</button>

                    </div>
                    
                </form>
                
            </div>

        </div>
    );
    }
}

export default Form;