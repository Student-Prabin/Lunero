import { Link } from "react-router-dom"
import { assets } from "../assets/assets.js"

const Title = ({ page }) => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center mb-15"
      style={{ backgroundImage: `url(${assets.title})` }}
    >

      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center px-8 space-y-2">

        <img src={assets.m} alt="Logo" className="h-10 w-auto" />

        <h1 className="text-6xl ">{page}</h1>

        <div className=" text-m text-bold">
          <Link to={'/'}>Home</Link> <span className="mx-1 cursor-default">{'>'}</span><span className="cursor-default">{page}</span>
        </div>
      </div>
    </div>

  )
}
export default Title