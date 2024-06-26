import { GiHobbitDwelling, GiSoccerKick } from 'react-icons/gi';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { RxHobbyKnife } from 'react-icons/rx';
import { Header } from './ui/container-scroll-animation';
import { SiCodingninjas, SiYoutubegaming } from 'react-icons/si';

const AboutUsMobile = () => {
  return (
    <div>
      <div>
        <div className="py-10">
          <Header />
        </div>
        <div>
          <div className="w-ful grid place-items-center py-6">
            <div className="w-11/12 grid lg:grid-cols-2  gap-4 ">
              <div className="w-full flex flex-col gap-6 border-2 p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                <div>
                  <h2 className="font-semibold text-2xl text-[#171b5a] pb-4 capitalize">
                    <RxHobbyKnife className="w-10 h-10  inline-block text-[#e8d741]" />
                    Developing with passion while Exploring the world
                  </h2>
                  <div className="w-20 h-1 bg-purple-700"></div>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Name:</span> Abdul Mateen
                    Kofi Yeboah
                  </p>
                  <p>
                    <span className="font-semibold">Age:</span> 23
                  </p>
                  <p>
                    <span className="font-semibold">Index Number:</span>{' '}
                    5211040236
                  </p>
                  <p>
                    <span className="font-semibold">Class:</span> ITE 300C
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> Accra,
                    Ghana
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    mateenabdullopato@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> 054 398 3427
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span> Accra, Ghana
                  </p>

                  <p>
                    <span className="font-semibold">Experience:</span> 2 years
                  </p>
                  <p>
                    <span className="font-semibold">Education:</span> BSc.
                    Computer Science
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span> HTML, CSS,
                    JavaScript, React, Node.js, Express, MongoDB, Tailwindcss,
                    Bootstrap, Figma, Adobe XD
                  </p>
                  <p>
                    <span className="font-semibold">Work:</span> Freelance
                  </p>
                  <p>
                    <span className="font-semibold">Availability:</span>{' '}
                    Full-time Freelance
                  </p>
                </div>

                <div className="flex gap-4">
                  <button className="py-3 px-6 rounded bg-[#8b1e11] text-white">
                    Contact Me
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col gap-6 border-2 p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                <div>
                  <h2 className="font-semibold text-2xl text-[#171b5a] pb-4 capitalize">
                    <GiHobbitDwelling className="w-10 h-10  inline-block text-[#e8d741]" />
                    Developing with passion while Exploring the world
                  </h2>
                  <div className="w-20 h-1 bg-purple-700"></div>
                </div>
                <div>
                  <h1 className="font-semibold text-2xl">Hobbies</h1>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col shadow-lg p-4 group">
                      <SiCodingninjas className="w-24 h-24  inline-block text-[#179217] group-hover:rotate-180 transition-all duration-200" />
                      <span className="py-2 font-semibold ">Programming</span>
                    </div>
                    <div className="flex flex-col shadow-lg p-4 group">
                      <SiYoutubegaming className="w-24 h-24  inline-block text-[#ecda36] group-hover:rotate-180 transition-all duration-200" />
                      <span className="py-2 font-semibold ">Gaming</span>
                    </div>
                    <div className="flex flex-col shadow-lg p-4 group">
                      <GiSoccerKick className="w-24 h-24  inline-block text-[#1c91b4] group-hover:rotate-180 transition-all duration-200" />
                      <span className="py-2 font-semibold ">Football</span>
                    </div>
                    <div className="flex flex-col shadow-lg p-4 group">
                      <MdOutlineLocalMovies className="w-24 h-24  inline-block text-[#b11cb1] group-hover:rotate-180 transition-all duration-200" />
                      <span className="py-2 font-semibold ">Movies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMobile;
