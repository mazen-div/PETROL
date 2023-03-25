import '../productFilter/filterProduct.css'
import { Link, useNavigate } from 'react-router-dom'
const CoffeProdcut = ({ image, name, des,data,keyof }) => {
    const navigate=useNavigate();
    return (

        <div onClick={()=>navigate('/coffeeDetails',{
            state:{
                data,
                key:keyof
            }
        })} data-menu="data" className="single news-Slide-up" id="cardHover"  >
            <img src={image} alt="" className='singleCard' />
            <div className='newsCaption'>
                <h2 className='newsCaption-title'>
                    {name}
                </h2>
                <p className='newsCaption-content'>
                    {des}</p>

            </div>
        </div>
    );
}

export default CoffeProdcut;