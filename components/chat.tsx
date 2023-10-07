'use client'

import { FC } from 'react'
import ChatInput from './chat-input'
// import ChatMessages from './ChatMessages'
import ChatHeader from './chat-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const Chat: FC = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='relative bg-secondary-content z-40 shadow'>
      <AccordionItem value='item-1'>
        <div className='fixed right-0 md:right-8 w-full md:w-80 bottom-8 bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 bg-primary-content rounded-2xl overflow-hidden'>
          <div className='w-full h-full flex flex-col'>
            <AccordionTrigger className='px-6 border-b h-full w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
'>
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col h-80'>
                <ChatInput className='' />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default Chat