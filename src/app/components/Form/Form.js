import React, { Component } from 'react';
import axios from "axios";
import { createBrowserHistory } from 'history';
import { Redirect } from "react-router-dom";
import "./styles.css"

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            department: '',
            groupNumber: '',
            passportSeries: '',
            passportNumber: '',
            nameOfIssuingPlace: '',
            dateOfIssue: '',
            expirationDate: '',
            address: '',
            phoneNumber: '',
            data: [],
            fireNotEveryFieldDone: false,
            fireRedirect: false,
            fireOnFocusDateOfIssue: false,
            fireOnFocusExpirationDate: false,

        };


        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleGroupNumberChange = this.handleGroupNumberChange.bind(this);
        this.handlePassportSeriesChange = this.handlePassportSeriesChange.bind(this);
        this.handlePassportNumberChange = this.handlePassportNumberChange.bind(this);
        this.handleNameOfIssuingPlaceChange = this.handleNameOfIssuingPlaceChange.bind(this);
        this.handleDateOfIssueChange = this.handleDateOfIssueChange.bind(this);
        this.handleExpirationDateChange = this.handleExpirationDateChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.onFocusDateOfIssue = this.onFocusDateOfIssue.bind(this);
        this.onFocusExpirationDate = this.onFocusExpirationDate.bind(this);


    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }
    handleDepartmentChange(e) {
        this.setState({ department: e.target.value });
    }
    handleGroupNumberChange(e) {
        this.setState({ groupNumber: e.target.value });
    }
    handlePassportSeriesChange(e) {
        this.setState({ passportSeries: e.target.value });
    }
    handlePassportNumberChange(e) {
        this.setState({ passportNumber: e.target.value });
    }
    handleNameOfIssuingPlaceChange(e) {
        this.setState({ nameOfIssuingPlace: e.target.value });
    }
    handleDateOfIssueChange(e) {
        this.setState({ dateOfIssue: e.target.value });
    }
    handleExpirationDateChange(e) {
        this.setState({ expirationDate: e.target.value });
    }
    handleAddressChange(e) {
        this.setState({ address: e.target.value });
    }
    handlePhoneNumberChange(e) {
        this.setState({ phoneNumber: e.target.value });
    }
    onFocusDateOfIssue(){
            this.setState({ fireOnFocusDateOfIssue: true });
        }
    onFocusExpirationDate(){
        this.setState({ fireOnFocusExpirationDate: true });
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.state.name.trim();
        let department = this.state.department.trim();
        let groupNumber = this.state.groupNumber.trim();
        let passportSeries = this.state.passportSeries.trim();
        let passportNumber = this.state.passportNumber.trim();
        let nameOfIssuingPlace = this.state.nameOfIssuingPlace.trim();
        let dateOfIssue = this.state.dateOfIssue.trim();
        let expirationDate = this.state.expirationDate.trim();
        let address = this.state.address.trim();
        let phoneNumber = this.state.phoneNumber.trim();

        this.setState({
            fireNotEveryFieldDone: false,
        });
        if (!name || !department || !groupNumber || !passportSeries || !passportNumber || !nameOfIssuingPlace ||
            !dateOfIssue || !expirationDate || !address || !phoneNumber) {
            this.setState({
                fireNotEveryFieldDone: true,
            });
            return
        }

        this.handleFormSubmit({
                name: name,
                department: department,
                groupNumber: groupNumber,
                passportSeries: passportSeries,
                passportNumber: passportNumber,
                nameOfIssuingPlace: nameOfIssuingPlace,
                dateOfIssue: dateOfIssue,
                expirationDate: expirationDate,
                address: address,
                phoneNumber: phoneNumber
            });

            this.setState({
                fireRedirect: true,
            });

    }
    handleFormSubmit(comment) {
        let comments = this.state.data;
        comment.id = Date.now();
        axios.post(this.props.url, comment)
            .catch(err => {
                console.error(err);
                this.setState({ data: comments });
            });
    }

    render () {
        return (

        <form className="FormSection" onSubmit={ this.handleSubmit }>
            {!this.state.fireNotEveryFieldDone && (
                <div >
                    <h1>Введите данные.</h1>
                </div>
            )}
            {this.state.fireNotEveryFieldDone && (
               <div >
                   <h1>Введены не все данные. Будьте внимательны.</h1>
                   {alert("input all data")}
               </div>
            )}
            
            <div className ="FormGroup">
            
            <input className="FormControl"
                type='text'

                placeholder='ФИО'
                value={ this.state.name }
                onChange={ this.handleNameChange } />

            <input className="FormControl"
                type='text'

                placeholder='Факультет'
                value={ this.state.department }
                onChange={ this.handleDepartmentChange } />

            <input className="FormControl"
                type='text'

                placeholder='Номер группы'
                value={ this.state.groupNumber }
                onChange={ this.handleGroupNumberChange } />

            <input className="FormControl"
                type='text'

                placeholder='Серия паспорта'
                value={ this.state.passportSeries }
                onChange={ this.handlePassportSeriesChange } />

            <input className="FormControl"
                type='text'

                placeholder='Номер паспорта'
                value={ this.state.passportNumber }
                onChange={ this.handlePassportNumberChange } />

            <input className="FormControl"
                type='text'


                placeholder='Место выдачи паспорта'
                value={ this.state.nameOfIssuingPlace }
                onChange={ this.handleNameOfIssuingPlaceChange } />

                {!this.state.fireOnFocusDateOfIssue && (
                    <input className="FormControl" type='text'

                        onFocus={this.onFocusDateOfIssue}
                        placeholder='Дата выдачи паспорта'
                        value={ this.state.dateOfIssue }/>
                )}
                {this.state.fireOnFocusDateOfIssue && (
                    <input className="FormControl" type='date'

                        placeholder='Дата выдачи паспорта'
                        value={ this.state.dateOfIssue }
                        onChange={ this.handleDateOfIssueChange }/>
                )}
                {!this.state.fireOnFocusExpirationDate && (
                    <input className="FormControl" type='text'

                        onFocus={this.onFocusExpirationDate}
                        placeholder='Срок действия паспорта'
                        value={this.state.expirationDate } />
                )}
                    {this.state.fireOnFocusExpirationDate && (
                        <input className="FormControl" type='date'

                            placeholder='Срок действия паспорта'
                            value={ this.state.expirationDate }
                            onChange={this.handleExpirationDateChange}/>
                    )}

            <input className="FormControl"
                type='text'
                placeholder='Прописка'
                value={ this.state.address }
                onChange={ this.handleAddressChange } />

            <input className="FormControl"
                type='text'
                placeholder='Номер телефона'
                value={ this.state.phoneNumber }
                onChange={ this.handlePhoneNumberChange } />

            </div>
            
            <input className="FormButton"
                type='submit'
                
                value='Генерировать'/>
            {this.state.fireRedirect && <Redirect to="/last_page"/>}
    </form>
    )}
}
export default Form;
