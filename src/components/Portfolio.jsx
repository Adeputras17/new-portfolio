import React from "react";
import tebakAngka from "../assets/portfolio/tb.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/cr.png";
import reactParallax from "../assets/portfolio/nw.png";
import reactSmooth from "../assets/portfolio/fr.png";
import reactWeather from "../assets/portfolio/ef.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tebakAngka,
      href: "https://github.com/Adeputras17/javascript-game-tebak-angka",
    },
    {
      id: 2,
      src: installNode,
      href: "https://github.com/Adeputras17/Food-server",
    },
    {
      id: 3,
      src: navbar,
      href: 'https://github.com/Adeputras17/CRUD-module-system-',
    },
    {
      id: 4,
      src: reactSmooth,
      href: 'https://github.com/Adeputras17/Membuat-Form-Register-',
    },
    {
      id: 5,
      src: reactParallax,
      href: "https://github.com/Adeputras17/news-website",
    },
    {
      id: 6,
      src: reactWeather,
      href: "https://food-client-production.up.railway.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-white to-blue-200 text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-200">
            Portfolio
          </p>
          <p className="py-6">Lihatlah beberapa hasil kerja saya di sini.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-blue-200 rounded-lg">
              <img
                src={src}

                alt=""
                className="rounded-md duration-200 hover:scale-105"

              />
              <div className="flex items-center justify-center text-center">
                <a
                  href={href}
                  alt=''
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Github Repository 
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;