import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { Segment,Button } from 'semantic-ui-react'

const App = () => {

  const [showChatbot, setShowChatbot] = useState(false);
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please type your name?',
      trigger: 'GetName'
    },
    {
      id: 'GetName',
      user: true,
      trigger: 'ShowName'
    },
    {
      id: 'ShowName',
      message: 'Hi {previousValue}, please select an option',
      trigger: 'ShowOptions'
    },
    {
      id: 'ShowOptions',
      options: [
        { value: 'Book an appointment', label: 'Book an appointment', trigger: 'Book' },
        { value: 'Cancel an appointment', label: 'Cancel an appointment', trigger: 'Cancel' }
      ]
    },
    {
      id: 'Book',
      message: 'Please select the doctor',
      end: true
    },
    {
      id: 'Cancel',
      message: 'Please select the doctor',
      end: true
    }
  ]

  return (
    <Segment floated="right">
    {showChatbot ? (
      <ChatBot steps={steps} />
    ) : (
      <Button onClick={toggleChatbot}>Open Chatbot</Button>
    )}
  </Segment>
  )
}

export default App
