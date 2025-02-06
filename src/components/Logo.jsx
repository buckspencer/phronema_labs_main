export default Logo

import Image from 'next/image'
import logo from '../images/logo-1.png'

export function Logo({}) {
  return <Image src={logo} alt="Logo" width={150} />
}
