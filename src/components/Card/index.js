import "./Card.css"
/*
function Card(props) {
    return  (
        <div className="Card">
        <h3>{props.title}</h3>
        <p>{props.par}</p>
        <button>Devamı</button>
        </div>
    )
}

export default Card;
*/
/*
function Card({title, par}) {
    return  (
        <div className="Card">
        <h3>{title}</h3>
        <p>{par}</p>
        <button>Devamı</button>
        </div>
    )
}
*/
//arrow function
const Card = ({keys, title, par, lesson}) => { 
    return  (
        <div className="Card">
        <h3>{title}</h3>
        <p>{par}</p>
        <p>id:{keys}</p>
        {lesson > 20 && keys === 1 && <div>Advanced Level</div>}
        <button>Devamı</button>
        </div>
    )
}

export default Card;