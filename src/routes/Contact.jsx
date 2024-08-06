import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        text: "+91 7404177669",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        text: "rahulharit13@gmail.com",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-portColor">Let&apos;s work together</h3>
                            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="First name" />
                                <Input type="lastname" placeholder="Last name" />
                                <Input type="email" placeholder="Email" />
                                <Input type="phone" placeholder="Phone Number" />
                            </div>
                            <Textarea className="h-[200px]" placeholder="Type your message here" />

                            <Button size="md" className="max-w-40">Send</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <div className="grid grid-cols-1 gap-6">
                            {info.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-portColor">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-lg text-white">{item.title}</h5>
                                        <p className="text-white/60">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
