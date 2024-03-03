import { Button } from "./ui/button"
import Link from "next/link"


const Cta = () => {
  return (
    <section className="bg-tertiary dark:bg-secondary/40 py-24">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8">
                    برای تبدیل رویاهات به واقیت آماده ای؟ من میتونم تو این مسیر راهنماییت کنم.
                </h2>
                <Link href='/contacts'>
                    <Button>ارتباط با من</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta