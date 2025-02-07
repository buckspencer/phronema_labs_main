export default Logo

import Image from 'next/image'
import logo from '../images/logo-1.png'
import logoDark from '../images/logo-1-dark.png'

export function Logo({ isDark = false }) {
  return <Image src={isDark ? logoDark : logo} alt="Logo" width={150} />
}
