import { ReactNode } from "react"
import SocMed from "./SocMed"

interface Props {
  children: ReactNode
}
const Footer = () => {
  return (
    <footer className="h-[32rem] bg-gray-900">
      <p>Follow Us</p>
      <SocMed />
    </footer>
  )
}

export default Footer
