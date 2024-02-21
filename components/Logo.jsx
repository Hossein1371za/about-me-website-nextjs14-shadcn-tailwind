import Link from "next/link"
import Image from "next/image"
const Logo = () => {
  return (
    <Link href="/">
      <Image className="bg-primary p-2" src='/next.svg' width={80} height={54} priority alt=""/>
    </Link>
  )
}

export default Logo