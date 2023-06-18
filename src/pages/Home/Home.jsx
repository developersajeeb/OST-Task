import banner from '../../assets/banner/hero-banner.jpg'
import TwoBlog from '../../components/TwoBlog';
import { useEffect, useState } from 'react';
import ListBlog from '../../components/ListBlog';
import BlogSegment from '../../components/BlogSegment';
import Event from '../../components/Event';
import Jobs from '../../components/Jobs';

const Home = () => {
    const [blogData, SetBlogData] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => SetBlogData(data))
    }, [])

    const forTwo = blogData.slice(0, 2);
    const forFour = blogData.slice(3, 10);

    return (
        <>
            <header style={{ backgroundImage: `url(${banner})` }} className='bg-cover bg-center bg-no-repeat md:py-28 md:px-36 grid md:grid-cols-2 items-center py-20 px-4'>
                <div>
                    <h1 className='text-5xl font-bold text-gray-700'>Explore the World of Engaging Blogs</h1>
                    <p className='font-light my-6 leading-7'>Welcome to our blog website, where you will find captivating articles spanning three segments: Business, Technology, and Lifestyle. Dive into thought-provoking discussions, expert analyses, and practical tips curated by our passionate writers. Explore our diverse collection of engaging blogs and embark on an inspiring journey today!</p>
                    <div>
                        <button className='bg-[#445045] px-8 py-4 rounded-md text-white text-lg font-semibold mr-4 md:mr-4 mb-4 md:mb-0'>Get Stated</button>
                        <button className='bg-[#445045] px-8 py-4 rounded-md text-white text-lg font-semibold'>Upcoming Event</button>
                    </div>
                </div>
            </header>
            <main className='md:my-28 md:mx-36 mx-4 my-20'>
                <section className='grid md:grid-cols-3 gap-10'>
                    <BlogSegment></BlogSegment>
                    <div className='md:col-span-2'>
                        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-l-8 border-[#445045] pl-2'>News Feeds</h2>
                        <div className='grid md:grid-cols-2 gap-4'>
                            {
                                forTwo.map(singleData => {
                                    return <TwoBlog key={singleData.id} singleData={singleData}></TwoBlog>
                                })
                            }
                        </div>
                        <div className='grid gap-8 mt-10'>
                            {
                                forFour.map(singleData => {
                                    return <ListBlog key={singleData.id} singleData={singleData}></ListBlog>
                                })
                            }
                        </div>
                        <div className='text-center mt-16'>
                            <button className='bg-[#445045] px-6 py-3 rounded-md text-white text-lg font-semibold'>Load More</button>
                        </div>
                    </div>
                </section>
                <section className='mt-24'>
                    <Event></Event>
                </section>
                <section className='mt-24'>
                    <Jobs></Jobs>
                </section>
            </main>
        </>
    );
};

export default Home;