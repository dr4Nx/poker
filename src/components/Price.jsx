import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Price = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
            Buy-In Sizing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8">{option.title}
                            {option.title === "Regular" && <span className="bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(P@B Favorite)</span>}
                        </p>
                        <p className="mb-8"><span className="text-5xl mt-6 mr-2">{option.price}</span><span className="text-neutral-400 tracking-tight">Per Buy-In</span></p>
                        <ul>
                            {option.features.map((feature, index) => (<li key={index} className="mt-8 flex items-center">
                                <CheckCircle2 />
                                <span className="ml-2">{feature}</span>
                            </li>))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Price