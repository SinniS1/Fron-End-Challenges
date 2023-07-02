import { createContext, useState } from 'react'

const defaultValue: EmailContextType = {
  emailInput: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setEmailInput: () => {}
}

interface EmailContextType {
  emailInput: string
  setEmailInput: (value: string) => void
}
const EmailContext = createContext<EmailContextType>(defaultValue)

interface EmailProviderType {
  children: React.ReactNode
}
const EmailProvider: React.FC<EmailProviderType> = ({ children }) => {
  const [emailInput, setEmailInput] = useState('')

  const setEmailValue = (value: string) => {
    setEmailInput(value)
  }

  return (
    <EmailContext.Provider value={{ emailInput, setEmailInput: setEmailValue }}>
      {children}
    </EmailContext.Provider>
  )
}

export { EmailContext, EmailProvider }
