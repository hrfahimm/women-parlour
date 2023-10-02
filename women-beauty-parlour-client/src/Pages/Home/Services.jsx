/** @format */
import img1 from "../../assets/icons/img1.png";
import img2 from "../../assets/icons/img2.png";
import img3 from "../../assets/icons/img3.png";
const Services = () => {
    return (
        <div className=' text-center'>
            <h1 className='font-bold text-4xl mt-[80px] mb-[40px]'>
                Our Awesome <span className='text-[#F63E7B] '>Services</span>
            </h1>

            <div className='flex flex-col lg:flex-row-reverse items-center gap-4 py-12 px-8'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <figure className='px-10 pt-10'>
                        <img
                            src={img1}
                            alt='Shoes'
                            className='rounded-xl w-[30%]'
                        />
                    </figure>
                    <div className='card-body items-center text-center'>
                        <h2 className='card-title'>
                            Anties Age Face Transform!
                        </h2>
                        <p className='card-title text-[#F63E7B]'>$36</p>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <figure className='px-10 pt-10'>
                        <img
                            src={img2}
                            alt='Shoes'
                            className='rounded-xl w-[30%]'
                        />
                    </figure>
                    <div className='card-body items-center text-center'>
                        <h2 className='card-title'>
                            Anties Age Face Transform!
                        </h2>
                        <p className='card-title text-[#F63E7B]'>$36</p>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <figure className='px-10 pt-10'>
                        <img
                            src={img3}
                            alt='Shoes'
                            className='rounded-xl w-[30%]'
                        />
                    </figure>
                    <div className='card-body items-center text-center'>
                        <h2 className='card-title'>
                            Anties Age Face Transform!
                        </h2>
                        <p className='card-title text-[#F63E7B]'>$36</p>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
            <button className='btn w-[250px] my-8  bg-[#F63E7B] text-white'>
                Explore More
            </button>
        </div>
    );
};

export default Services;
