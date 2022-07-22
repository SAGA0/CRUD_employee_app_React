import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Jhon S.', salary: 800, premium: true, id: 1},
                {name: 'Alex F.', salary: 1000, premium: false, id: 2},
                {name: 'Jacob L.', salary: 1500, premium: false, id: 3}
            ]
        }
        this.maxId = this.state.data.length + 1
    }

    deleteItem = (id) => {
        this.setState(({data}) =>{
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployee = (name, salary) => {
        if(name && salary) {
            const newEmployee = {
                name,
                salary,
                premium: false,
                uplike: false,
                id: this.maxId};
            this.setState(({data}) =>{
                return{
                    data: [...data, newEmployee]
                }
            })
            this.maxId += 1
        }

    }

    render(){
        return(
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                data = {this.state.data}
                onDelete = {this.deleteItem}
                />
                <EmployeesAddForm
                onAddEmployee ={this.addEmployee}/>

            </div>
        )
    }
}

export default App