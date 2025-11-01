import { LuCalendar, LuClock } from "react-icons/lu"
import { Link } from "react-router-dom"

const BlogCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-[60%]">
        <img
          src={image}
          alt="Post 1"
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[40%] text-center">
        <h3 className="text-xl mb-2">{title}</h3>
        <Link to="/" className="text-black font-medium underline hover:text-gray-700 self-center mb-3">
          Read More
        </Link>
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
          <div className="flex items-center gap-1">
            <LuClock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
          <div className="flex items-center gap-1">
            <LuCalendar className="w-4 h-4" />
            <span>Oct 30, 2025</span>
          </div>
        </div>


      </div>
    </div>
  )
}
export default BlogCard