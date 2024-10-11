import '../css/Box.css'
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'
import data from '../data.js'

function Box() {
    let cardItems = data.map(item => {
        return <Card key={item.id} item={item}/>
    })

    return (
        <div className="box-container box">
            <div className="box-sub box">
                <Navbar />
                <section className='cards'>
                    {cardItems}
                </section>
            </div>
        </div>
    )
}

export default Box