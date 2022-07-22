import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {
constructor(props){
    super(props);
    this.state = {
        premium: false,
        uplike: false
    }
}

onPremium = () =>{
    this.setState(({premium}) =>({
        premium: !premium
    }))
}

onLike = () =>{
    this.setState(({uplike}) =>({
        uplike: !uplike
    }))
}


render() {
    const {name, salary, onDelete} = this.props;
    const {premium, uplike} = this.state;


    let classNames = "list-group-item d-flex justify-content-between";
    if (premium){
        classNames += ' increase';
    }
    if(uplike){
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span onClick={this.onLike} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.onPremium}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                        type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
}

export default EmployeesListItem