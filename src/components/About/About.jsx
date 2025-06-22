import React from "react";
import Image1 from '../../assets/pic2.png'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={Image1}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React development is carried out by passionate developers, as noted in the context provided.
                            The React community is vibrant and active, with a large number of developers contributing to its growth and maintenance. The React team is continuously researching ways to improve the library, and there is a strong emphasis on community involvement and collaboration.

                        </p>
                        <p className="mt-4 text-gray-600">
                             This passion and dedication from the developer community contribute to the ongoing success and evolution of React.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}