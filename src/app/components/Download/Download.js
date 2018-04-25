import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";



class Download extends Component {
    constructor (props) {
        super(props);
        this.state = {
            fireDone: false,
            fireButton: true,
        };
        this.handleClick=this.handleClick.bind(this);
        }
    handleClick(){
        //"http://localhost:3001/download/file1"
        //'https://demoautodoc.herokuapp.com/download/file1'
        axios({url: 'https://demoautodoc.herokuapp.com/download/file1', method: 'GET',
            responseType: 'blob'}).then((response) => {
            const url = window.URL.createObjectURL(
                new Blob([response.data],
                {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"}));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'application.docx');
            document.body.appendChild(link);
            link.click();
        });
        //"http://localhost:3001/download/file2"
        //'https://demoautodoc.herokuapp.com/download/file2'
        axios({url: 'https://demoautodoc.herokuapp.com/download/file2', method: 'GET',
            responseType: 'blob'}).then((response) => {
            const url = window.URL.createObjectURL(
                new Blob([response.data],
                {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"}));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'application2.docx');
            document.body.appendChild(link);
            link.click();
        });
        //"http://localhost:3001/download/file3"
        //'https://demoautodoc.herokuapp.com/download/file3'
        axios({url: 'https://demoautodoc.herokuapp.com/download/file3', method: 'GET',
            responseType: 'blob'}).then((response) => {
            const url = window.URL.createObjectURL(
                new Blob([response.data], 
                {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"}));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'application3.docx');
            document.body.appendChild(link);
            link.click();
        });
        
        this.setState({ fireDone: true, fireButton: false })
    }
    render () {
        return (
            <div className="dwn-section">
                {this.state.fireButton && (
                    <div className="fireButton-section">
                        <h1 className="dwn-h1">Ваш документ готов к скачиванию.</h1>
                        <button className="dwn-button" onClick={this.handleClick}>Скачать</button>
                    </div>
                )}
                {this.state.fireDone && (
                    <div className="response-section">
                    <h1 className="dwn-h1">Спасибо за использование нашего сервиса.</h1>
                        <h3 className="dwn-h3">Наша компания предоставляет услуги по созданию Вашего личного сервиса генерации документов.</h3>
                        <h3 className="dwn-h3">Чтобы воспользоваться нашими услугами, пишите по адресу underwoodkats@gmail.com</h3>

                    </div>
                )}
            </div>
        )
    }
}
export default Download;
