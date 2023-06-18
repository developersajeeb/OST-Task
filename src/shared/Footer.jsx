import logo from '../assets/logo-OST.png'

const Footer = () => {
    return (
        <footer className='bg-[#CEEBE6] text-white px-4 pt-20 pb-14 md:px-32 md:pt-32'>
            <div>
                <img className='mx-auto w-72' src={logo} alt="" />
                <p className='text-center mt-3 text-[#445045]'>Unleash Your Words, Inspire the World</p>
                <div className='mt-10 text-center'>
                    <input placeholder='Your Mail' className='text-sm bg-white py-5 px-7 w-full md:w-[400px] rounded-full text-gray-700' type="email" name="" id="" />
                    <button className='bg-[#445045] px-8 py-4 ml-3 mt-5 md:mt-0 text-white rounded-full hover:bg-[#9ED5CB] duration-300 hover:text-black font-semibold'>SUBSCRIBE</button>
                </div>
            </div>
            <section className='mt-20 grid md:grid-cols-2 lg:grid-cols-4'>
                <div className='text-center md:border-r border-neutral-600'>
                    <h3 className='text-3xl mb-4 text-gray-700'>Menu</h3>
                    <ul className='grid gap-1 text-gray-500'>
                        <li>Classes</li>
                        <li>Program</li>
                        <li>About Us</li>
                        <li>Team</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-center lg:border-r border-neutral-600 mt-8 md:mt-0'>
                    <h3 className='text-3xl mb-4 text-gray-700'>Courses</h3>
                    <ul className='grid gap-1 text-gray-500'>
                        <li>Painting</li>
                        <li>Sketch</li>
                        <li>Drawing</li>
                        <li>Sculpture</li>
                        <li>Digital</li>
                    </ul>
                </div>
                <div className='text-center md:border-r border-neutral-600 mt-8 md:mt-0'>
                    <h3 className='text-3xl mb-4 text-gray-700'>Contact</h3>
                    <ul className='grid gap-1 text-gray-500'>
                        <li>+8801743370840</li>
                        <li>info@developersajeeb.com</li>
                        <li>About Us</li>
                        <li>Chandpur Bangladesh</li>
                    </ul>
                </div>
                <div className='text-center mt-8 md:mt-0'>
                    <h3 className='text-3xl mb-4 text-gray-700'>Socials</h3>
                    <ul className='grid gap-1 text-gray-500'>
                        <li>Facebook</li>
                        <li>Dribbble</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </section>
            <p className='text-center text-gray-400 mt-20'>CrownArt © 2023. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;