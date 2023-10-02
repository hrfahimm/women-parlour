/** @format */
import img from "../../assets/img1.png";
const Hero = () => {
    return (
        <div>
            <div className='hero min-h-[677px] bg-[#FFF8F5]'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <img
                        src={img}
                        className='max-w-[484px] max-h-[478px] rounded-lg shadow-2xl'
                    />
                    <div className='max-w-[500px] p-8'>
                        <h1 className='text-5xl text-[#111430] font-bold'>
                            Beauty Salon For Every Women
                        </h1>
                        <p className='py-6'>
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className='btn   text-white  bg-[#F63E7B]'>
                            Get an Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
