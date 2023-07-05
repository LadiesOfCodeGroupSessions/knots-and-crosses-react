import classes from './Style.module.css'
// click event needs to be added to this


const Cell = (props) => {
    const cellDisplay = {
        
    }
   
    return (
        <div className={classes.cell}>{props.id}</div>
    )
}

export default Cell;