import './App.css';
import { useRef } from "react";
import { ExternalLink } from "lucide-react"; // using lucide-react for icon

function App() {
  const newsData = [
    {
      img: "https://www.shutterstock.com/image-photo/mississauga-on-canada-june-13-260nw-1990369544.jpg",
      title: "HCLTech appoints Amitabh Kant as Independent Director",
      date: "September 8, 2025",
      link: "#"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-KABM1-t6EVXBqHhb9lDJnbZTzXqJuXEqA&s",
      title: "HCLTech partners with Pearson, MeitY to launch a national student entrepreneurship drive across India",
      date: "August 28, 2025",
      link: "#"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFocEZdg_1qizr1ugjAK8QlNjP4mP3jyAzRA&s",
      title: "HCLTech uses AI to enhance jobs, not cut them: Chairperson Roshni Nadar",
      date: "August 27, 2025",
      link: "#"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnT6kHbtCbh7eSp1HYpXKYWTqk1SEReLEMA&s",
      title: "HCLTech partners with Thought Machine to modernise banks with AI and cloud technology for better scalability",
      date: "August 26, 2025",
      link: "#"
    },
    {
      img: "https://hcltech.imgix.net/sites/default/files/inline-images/amitabh-kant.webp",
      title: "HCLTech partners with Thought Machine to modernise banks with AI and cloud technology for better scalability",
      date: "August 26, 2025",
      link: "#"
    },
    {
      img: "https://hcltech.imgix.net/sites/default/files/inline-images/enterprise-imperative.webp",
      title: "Unlike traditional AI that simply responds to queries, Agentic AI",
      date: "August 26, 2025",
      link: "#"
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center text-white bg-blue-700 h-12 px-6">
        <span className="font-bold text-lg">HCLTech</span>
        <ul className="flex gap-4 text-sm sm:text-base">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 p-4">Latest News</h2>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="overflow-x-hidden scroll-smooth whitespace-nowrap px-4 sm:px-6 pb-6 flex gap-4 sm:gap-6"
      >
        {newsData.map((news, index) => (
          <div
            key={index}
            className="group inline-block w-64 sm:w-72 md:w-80 bg-white shadow-md rounded-lg 
                       hover:bg-gray-100 hover:shadow-xl transition duration-300 flex-shrink-0 overflow-hidden text-wrap"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <p className="text-xs sm:text-sm text-gray-500">{news.date}</p>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-snug break-words">
                  {news.title}
                </h3>



<a
  href={news.link}
  className="mt-4 inline-flex text-pink-700 text-sm sm:text-base font-medium group relative overflow-hidden w-full"
>
  <div className="flex items-center relative">

 {/* Text - fades & follows the icon */}
    <span
      className="ml-2 mr-3 opacity-0 -translate-x-4 transition-all duration-700 ease-in-out delay-300 
                 group-hover:opacity-100 group-hover:translate-x-0"
    >
      Learn more
    </span>

    {/* Icon - starts left, slides into place */}
    <ExternalLink
      size={18}
      className=" transform-translate-x-7 transition-transform duration-1000 ease-in-out group-hover:translate-x-0"
    />

  </div>
</a>





              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Scroll buttons */}
      <div className='flex gap-2 p-4'>
        <button
          onClick={scrollLeft}
          className='bg-gray-200 text-gray-700 p-2 rounded-full shadow hover:bg-gray-300'
        >
<i class="fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={scrollRight}
          className='bg-gray-200 text-gray-700 p-2 rounded-full shadow hover:bg-gray-300'
        >
<i class="fa-solid fa-arrow-right"></i>

        </button>
      </div>
    </div>
  );
}

export default App;
