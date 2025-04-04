import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import './Value.css'
import data from '../../utilis/accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const Value = () => {
  return (
    <section className="v-wrapper">
         <div className="paddings innerWidth flexCenter v-container">
            {/** left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="image" />
                </div>
            </div>

            {/* right side  */}
            <div className="v-right flexColStart">
            <span className='orangeText'>Our Values</span>
            <span className='primaryText'>Value We Give To you</span>
            <span className='secondaryText'>
                We always ready to help by providing the best services for you.
                <br/>
                We believe a good place to live can make your life better.
            </span>

            <Accordion 
              className='accordion'
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
                {data.map((item, i) => {
                    return (
                        <AccordionItem key={i} uuid={i} className="accordionItem">
                            <AccordionItemState>
                                {({ expanded }) => (
                                    <div className={`accordionItem ${expanded ? "expanded" : "collapsed"}`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='accordionButton flexCenter'>
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className='secondaryText'>{item.detail}</p>
                                        </AccordionItemPanel>
                                    </div>
                                )}
                            </AccordionItemState>
                        </AccordionItem>
                    )
                })}
            </Accordion>
            </div>
         </div>
    </section>
  )
}

export default Value
