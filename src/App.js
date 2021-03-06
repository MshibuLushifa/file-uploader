import { Component } from 'react';
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedFile: null,
            fileUrl: null,
            fileName: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
            fileUrl: URL.createObjectURL(event.target.files[0]),
            fileName: this.state.selectedFile !== null ? this.state.selectedFile.name : ''
        })
    }

    render() {

        console.log('File: ', this.state.selectedFile);
        console.log('File url: ', this.state.fileUrl);
        this.state.selectedFile !== null
            ?
            console.log('File name: ', this.state.selectedFile.name)
            :
            console.log('File name: ', '');

        return (
            <div className="App">
                <div>
                    {
                        this.state.fileUrl === null
                            ?
                            <svg className="image-container"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            :
                            <img className="image-container" src={this.state.fileUrl} alt="Uploading file" />
                    }
                </div>
                <div>
                    {/* <button onClick = { ()=> this.handleChange() }>
                        Upload file
                    </button> */}
                    {/* <input type="file" onChange={this.handleChange} /> */}
                    <label htmlFor="file-upload" className="custom-file-upload">
                        Custom Upload
                    </label>
                    <input id="file-upload" type="file" onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}
