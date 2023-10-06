/** @format */
import img2 from "../../assets/img2.png";

const testimonial = () => {
    return (
        <div>
            <div className='hero min-h-[677px] p-8 bg-pink-50'>
                <div className='hero-content flex-col lg:flex-row'>
                    <img
                        src={img2}
                        className='max-w-[450px] max-h-[478px] rounded-lg shadow-2xl'
                    />
                    <div className='px-4'>
                        <h1 className='text-4xl font-bold'>
                            Lets Us Handle Your Sceen{" "}
                            <span className=' text-[#F63E7B]'>
                                Professionally
                            </span>
                        </h1>
                        <p className='py-6'>
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='flex justify-start mt-4 gap-8'>
                            <div className='text-start'>
                                <h1 className=' text-[#F63E7B] text-2xl py-2 font-extrabold'>
                                    500+
                                </h1>
                                <h1> Happy Customer</h1>
                            </div>
                            <div className='text-center'>
                                <h1 className=' text-[#F63E7B] text-2xl py-2  font-extrabold'>
                                    16+
                                </h1>
                                <h1>Total Service</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default testimonial;
