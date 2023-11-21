import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData= [
  {
    title: 'Improving end distrusts instantly',
    text: 'GPT-4 builds trust by giving clear, accurate, and empathetic responses. It supports user education, encourages feedback, and adapts to preferences. With regular updates and responsive support, it contributes to a strategy fostering user trust in the chat application.',
  },
  {
    title: 'Getting Real Data in Real Time',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },

];

const Features = () => (
    <div className='gpt4__features section__padding' id='features'>
      <div className='gpt4__features-heading'>
        <h1 className='gradient__text'>The Future is Now</h1>
        <span className='gradient__text'>Join the rest of us</span>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt4__features-container'>
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )


export default Features