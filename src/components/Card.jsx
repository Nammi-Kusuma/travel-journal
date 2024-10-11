import '../css/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    // console.log(props)
    return (
        <div className="card">
            <img src={`../src/assets/${props.item.img}`} alt="" className="card-image"/>
            <div className="description">
                <div className='card-location'>
                    <div className='country'>
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#da1010",}} className='sub-loc'/>
                        <h6 className='sub-loc'>{props.item.location}</h6>
                    </div>
                    <a href={`${props.item.googleMapsUrl}`} className='sub-loc'>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className='bold'>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card