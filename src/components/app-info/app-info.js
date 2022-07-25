import './app-info.css'

const AppInfo = (props) =>{
    const {number, premium} = props
    return (
        <div className="app-info">
            <h1>Сотрудники компании N</h1>
            <h2>Общее число сотрудников: {number} </h2>
            <h2>Премию получают: {premium}</h2>
        </div>
    )
}

export default AppInfo;