import React from 'react'

const PriceCart = ({ele, isChecked}) => {
    console.log("isChecked",isChecked);
    return (
        <div className={`cart_container ${ele.class}`}>
            <div><span className='h3'>{ele.type}</span></div>
            <div className='border-bottom'><span className='h3 font'>$</span><span className='h1'>{isChecked?ele.price_month:ele.price_year}</span></div>
            <div className='border-bottom'><span className='text '>{ele.storage} Storage</span></div>
            <div className='border-bottom'><span className='text'>{ele.User} Users Allowed</span></div>
            <div className='border-bottom'><span className='text'>Send up to {ele.sent_up_to}</span></div>
            <div className='button_div'><button className={`button-${ele.class}`}>Learn more</button></div>
        </div>
    )
}

export default PriceCart