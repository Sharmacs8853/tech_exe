import React, { useState } from 'react'
import PriceCart from '../components/PriceCart'
import ReactSwitch from 'react-switch';

const HomePage = () => {
  var priceData = [
    {
      id:1,
      type:"Basic",
      price_month:19.99,
      price_year:35.89,
      storage: "500 GB",
      User: 2,
      sent_up_to: "3 gb",
      class:"white"
    },
    {
      id:2,
      type:"Professional",
      price_month:24.99,
      price_year:60.90,
      storage: "1TB",
      User: 5,
      sent_up_to: "10 gb",
      class:"blue"
    },
    {
      id:3,
      type:"Master",
      price_month:39.09,
      price_year:90.97,
      storage: "2TB",
      User: 10,
      sent_up_to: "20 gb",
      class:"white"
    }
  ]

  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)

  }
  return (
    <div className='home_container'>
      <div className='heading_container'>
        <div><h1>Our Pricing</h1></div>
        <div className='toggle_container'>
          <div><h2>Annuvally</h2></div>
          <div>
            <ReactSwitch
              checked={checked}
              onChange={handleChange}
            />
            {/* <ToggleSwitch/> */}
          </div>
          <div><h2>Monthly</h2></div>
        </div>
      </div>
      <div className='component-container'>

        {
          priceData?.map((ele)=>{
            return  <PriceCart ele={ele} isChecked={checked} />
          })
        }
       
        
      </div>
    </div>
  )
}

export default HomePage