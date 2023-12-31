/** @format */
import Ellipse90 from "../../assets/Ellipse90.png";
import Ellipse91 from "../../assets/Ellipse91.png";
import Ellipse92 from "../../assets/Ellipse92.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Reviews = () => {
    const ratting = (
        <>
            <div className='rating'>
                <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-orange-400'
                />
                <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-orange-400'
                    checked
                />
                <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-orange-400'
                />
                <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-orange-400'
                />
                <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-orange-400'
                />
            </div>
        </>
    );
    return (
        <div className='mb-12'>
            <Tabs>
                <TabPanel>
                    <div
                        id='slide1'
                        className='carousel-item relative w-full  '>
                        <div className='flex flex-col lg:flex-row-reverse items-center gap-4 py-12 px-8'>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse91}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse91}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse91}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div
                        id='slide2'
                        className='carousel-item relative w-full'>
                        <div className='flex flex-col lg:flex-row-reverse items-center gap-4 py-12 px-8'>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse90}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse90}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse90}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div
                        id='slide3'
                        className='carousel-item relative w-full  '>
                        <div className='flex flex-col lg:flex-row-reverse items-center gap-4 py-12 px-8'>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse92}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse92}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                            <div className='card w-1/3 bg-base-100 shadow-xl p-8 '>
                                <img
                                    src={Ellipse92}
                                    alt='Shoes'
                                    className='rounded-xl w-[20%] py-4 text-start'
                                />
                                <p className='  items-center text-start'>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className=' text-center'>{ratting}</div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabList className='text-center '>
                    <Tab>1</Tab>
                    <Tab> 2</Tab>
                    <Tab>3</Tab>
                </TabList>
            </Tabs>
        </div>
    );
};

export default Reviews;
