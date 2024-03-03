import Socials from "./Socials"


const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
        <Socials  containerStyle="flex gap-x-6 mx-auto xl:mx-0" iconsStyle="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer