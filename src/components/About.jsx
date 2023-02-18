import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-white to-blue-200 text-black"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-blue-300">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Saya adalah seorang Fullstack Web Developer yang terampil dalam Nodejs, Python, React, Tailwind, Bootstrap, Html, Javascript, Css. Awalnya, latar belakang saya tidak berhubungan dengan teknologi informasi, namun saya memutuskan untuk belajar dan menjadi seorang Fullstack Web Developer. Saya suka menyelesaikan tantangan dengan cara yang kreatif dan mengeksplorasi solusi inovatif untuk masalah yang muncul. Selain itu, saya sangat senang untuk terus belajar dan mengikuti perkembangan teknologi terbaru di industri Web Developer. Jangan ragu untuk menghubungi saya jika Anda membutuhkan bantuan dalam proyek pengembangan web Anda. Terima kasih!
                </p>

            </div>
        </div>
    );
};

export default About;