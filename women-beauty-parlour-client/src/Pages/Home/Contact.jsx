/** @format */

import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='bg-pink-50 p-4 py-14'>
            <h1 className='text-center text-3xl font-bold pb-12'>
                Lets Us Handle Your <br />
                Projects Profationally{" "}
            </h1>{" "}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='card-body'>
                <div className='form-control grid grid-cols-2 gap-4'>
                    <input
                        type='text'
                        name='name'
                        {...register("name", { required: true })}
                        placeholder='Fast Name'
                        className='input input-bordered'
                    />
                    <input
                        placeholder='Sure name'
                        type='text'
                        {...register("sureName", {
                            required: true,
                        })}
                        className='input input-bordered'
                    />
                </div>

                <div className='form-control grid grid-cols-2 gap-4'>
                    <input
                        type='text'
                        name='name'
                        {...register("name", { required: true })}
                        placeholder='Email'
                        className='input input-bordered'
                    />
                    <input
                        placeholder='Phone Number'
                        type='text'
                        {...register("sureName", {
                            required: true,
                        })}
                        className='input input-bordered'
                    />
                </div>

                <div className='form-control'>
                    <input
                        type='email'
                        name='email'
                        {...register("Phonenumber", { required: true })}
                        placeholder='Phonenumber'
                        className='input input-bordered'
                    />
                </div>
                <div className='form-control'>
                    <input
                        type='email'
                        name='email'
                        {...register("Phonenumber", { required: true })}
                        placeholder='Phonenumber'
                        className='input input-bordered'
                    />
                </div>

                <div className='form-control m-2 text-center items-center  '>
                    <input
                        className='btn bg-[#F63E7B] max-w-xs text-center'
                        type='submit'
                        value='SignUp'
                    />
                </div>
            </form>
        </div>
    );
};

export default Contact;
