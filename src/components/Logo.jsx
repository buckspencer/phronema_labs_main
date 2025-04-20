export default Logo

import Image from 'next/image'
import logo from '../images/logo-1.svg'
import logoDark from '../images/logo-1-dark.svg'

export function Logo({ isDark = false }) {
  return <Image src={isDark ? logoDark : logo} alt="Logo" width={200} className="sm:w-[392px] w-[200px]" />
}
