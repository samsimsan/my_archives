import ContactFormSection from './ContactFormSection'

const ContactFormPage = () => {
    return (
        <>
            <h2 className='absolute text-xl font-bold top-4 left-4 text-slate-400'>Sam.dev</h2>
            <main className='mx-4 md:mx-auto w-full pb-10'>
                <h1 className='md:text-8xl text-6xl mx-4 md:mx-auto md:w-[70vw] text-center mt-14 md:mt-24 mb-4 text-gray-900 font-black'>
                    <span className='text-gray-400'>Say Hi! </span>
                    and tell me about your idea
                </h1>
                <p className='text-center mb-4 max-md:m-4 text-gray-600 text-xl tracking-tight'>
                    Have a nice works? Reach out and let's chat.
                </p>
                <ContactFormSection />
            </main>
        </>
    )
}

export default ContactFormPage