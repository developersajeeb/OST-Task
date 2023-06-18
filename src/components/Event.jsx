import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Event = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-8">Upcoming Events</h1>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="grid md:grid-flow-row">
                    <SwiperSlide>
                        <div className="bg-[#CEEBE6] p-8 rounded-lg hover:bg-[#92b6b0] duration-300">
                            <h2 className="text-3xl font-semibold">08 <p className="text-lg font-normal">June</p></h2>
                            <h3 className="my-4 text-xl font-semibold">CodeCon Conference</h3>
                            <p>9:00 AM - 5:00 PM</p>
                            <p className="text-sm">@City Convention Center, New York</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#CEEBE6] p-8 rounded-lg hover:bg-[#92b6b0] duration-300">
                            <h2 className="text-3xl font-semibold">12 <p className="text-lg font-normal">July</p></h2>
                            <h3 className="my-4 text-xl font-semibold">Web Development</h3>
                            <p>6:30 PM - 8:30 PM</p>
                            <p className="text-sm">@TechHub Co-working Space, San Francisco</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#CEEBE6] p-8 rounded-lg hover:bg-[#92b6b0] duration-300">
                            <h2 className="text-3xl font-semibold">05 <p className="text-lg font-normal">August</p></h2>
                            <h3 className="my-4 text-xl font-semibold">Hackathon: Building AI Solutions</h3>
                            <p>10:00 AM - 7:00 PM</p>
                            <p className="text-sm">@Innovation Hub, London</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#CEEBE6] p-8 rounded-lg hover:bg-[#92b6b0] duration-300">
                            <h2 className="text-3xl font-semibold">18 <p className="text-lg font-normal">September</p></h2>
                            <h3 className="my-4 text-xl font-semibold">Frontend Development Workshop</h3>
                            <p>1:00 PM - 5:00 PM</p>
                            <p className="text-sm">@Coding Academy, Berlin</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#CEEBE6] p-8 rounded-lg hover:bg-[#92b6b0] duration-300">
                            <h2 className="text-3xl font-semibold">09 <p className="text-lg font-normal">October</p></h2>
                            <h3 className="my-4 text-xl font-semibold">Future of Programming Languages</h3>
                            <p>7:00 PM - 9:00 PM</p>
                            <p className="text-sm">@TechSpace Auditorium, Tokyo</p>
                        </div>
                    </SwiperSlide> 
                    </div>
                </Swiper>
            </>
        </div>
    );
};

export default Event;