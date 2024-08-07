/*
    Home component is the main component of the website. It contains the main content of the website like the name of the developer, his role, and a brief description of his work. It also contains a button to download the CV and social media links.
*/

import Photo from "../components/Photo"
import Social from "../components/Social"
import { Button } from "../components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I&apos;m <br />
                            <span className="text-portColor">Rahul Sharma</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I excel at crafting elegant digital experiences and I am
                            proficient in various programming languages and technologies
                        </p>
                        {/* socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-portColor rounded-full flex justify-center items-center text-portColor text-base hover:bg-portColor hover:text-primary hover:transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home