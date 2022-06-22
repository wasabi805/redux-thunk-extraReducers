import { useSelector } from 'react-redux'

interface Istate {
  landing: {
    inputField: string
  }
}

export const inputField = useSelector((state: Istate) => state?.landing?.inputField)
