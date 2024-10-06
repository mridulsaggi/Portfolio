import React, { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
const Contact = () => {

    const formref = useRef(null)
    const [form, setform] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [loading, setloading] = useState(false)

    const changehandler = ({ target: { name, value } }) => {
        setform({ ...form, [name]: value })
    }

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init('wA4guHNOXvGf2ZI_w');
    }, []);

    const submithandler = async (e) => {
        e.preventDefault();
        setloading(true);

        try {
            await emailjs.send(
                'service_41trgmd', // service ID
                'template_x3alq7r', // template ID
                {
                    from_name: form.name,
                    to_name: 'Mridul Saggi',
                    from_email: form.email,
                    to_email: "mridulsaggi@gmail.com",
                    message: form.message
                }
            )
            setloading(false)
            console.log('message sent')
            setform({
                name: "",
                email: "",
                message: ""
            });
            alert("Message sent successfully :)")
        } catch (error) {
            setloading(false)
            console.log(error)
            alert("Internal Server Error")
        }

        setloading(false)
    }

    return (
        <section className='relative text-white flex flex-col justify-center items-center min-h-screen p-8 m-8'>
            <img src="/assets/terminal.png" className='absolute inset-0 h-full' alt="" />
            <div className='contact-container my-5'>
                <h1 className='font-semibold head-text'>Lets Talk !</h1>
                <p className='mt-3 text-lg'>Whether you are looking to build a new website, enhance existing platofrm or bring a new idea to the world, I am here to help !</p>
            </div>
            <form className=' z-[5] mt-12 w-full text-white flex space-y-7 flex-col items-center' ref={formref} action="" onSubmit={submithandler}>
                <label className='field-label w-[100%] sm:w-[50%] space-y-3'>
                    <span className='field-label'>Name</span>
                    <input type="text" className='field-input' placeholder='Your Name'
                        required
                        onChange={changehandler}
                        name="name"
                        value={form.name}
                    />
                </label>
                <label className='field-label w-[100%] sm:w-[50%] space-y-3'>
                    <span className='field-label'>Email Id</span>
                    <input type="email" className='field-input' placeholder='Your Email Id'
                        required
                        rows={5}
                        onChange={changehandler}
                        name="email"
                        value={form.email}
                    />
                </label>
                <label className='field-label w-[100%] sm:w-[50%] space-y-3'>
                    <span className='field-label'>Message</span>
                    <textarea type="text" className='field-input' placeholder='I wanna hire you...'
                        required
                        rows={5}
                        onChange={changehandler}
                        name="message"
                        value={form.message}
                    />
                </label>
                <button disabled={loading} className='field-btn'>
                    {loading ? "Sending.." : "Send"}
                    <img src="assets/arrow-up.png" className='h-[1rem]' alt="" />
                </button>
            </form>
        </section>
    )
}

export default Contact
