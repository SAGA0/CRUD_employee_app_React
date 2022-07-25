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
                {name: 'Jhon S.', salary: 800, premium: false, uplike: true, id: 1},
                {name: 'Alex F.', salary: 1000, premium: true, uplike: false, id: 2},
                {name: 'Jacob L.', salary: 1500, premium: false, uplike: false, id: 3}
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
        if(name && salary && name.length > 3) {
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



    // onTogglePremium = (id) =>{
        // this.setState(({data}) =>{
        //     const index = data.findIndex(elem=> elem.id === id)
        //     const old = data[index]
        //     const newItem = {...old, premium: !old.premium}
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        //     return{
        //         data: newArr
        //     }
        // })
    //     this.setState(({data}) =>({
    //         data: data.map((item) =>{
    //             if(item.id === id){
    //                 return{...item, premium: !item.premium}

    //             }
    //             return item
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) =>{
        this.setState(({data}) =>({
            data: data.map((item) =>{
                if(item.id === id){
                    return{...item, [prop]: !item[prop]}

                }
                return item
            })
        }))
    }

    render(){
        const number = this.state.data.length
        const premium = this.state.data.filter(item => item.premium).length
        return(
            <div className="app">
                <AppInfo
                number ={number}
                premium= {premium}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                data = {this.state.data}
                onDelete = {this.deleteItem}
                onToggleProp = {this.onToggleProp}
                />
                <EmployeesAddForm
                onAddEmployee ={this.addEmployee}/>

            </div>
        )
    }
}

export default App