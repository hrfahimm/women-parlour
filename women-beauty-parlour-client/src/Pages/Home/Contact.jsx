/** @format */

import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            {" "}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input />
                <input
                    {...register("firstName")}
                    type='text'
                    placeholder='Type here'
                    className='input input-bordered w-full max-w-xs'
                />
                <input {...register("lastName")} />
                <input type='submit' />
            </form>
        </div>
    );
};

export default Contact;
