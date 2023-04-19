import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropagateLoader from 'react-spinners/PropagateLoader';
import Axios from 'axios';

import Image from './Image';

const Component = () => {
  const [URL, setURL] = useState('');
  const [text, setText] = useState('');
  const schema = yup.object().shape({
    prompt: yup.string().required(),
    size: yup.string().required()
  });

  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const { prompt, size } = data;
    setText(prompt);
    try {
      const { data } = await Axios.post("https://oaiig-backend.onrender.com/api/v1/generateImage", { prompt, size });
      data.status === true && setURL(data.data);
    } catch (err) {
      console.log(err)
    };
  };

  return (
    <>
      <section className="bg-gray-500 body-font py-8 my-1 px-1 sm:px-0">
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center flex-wrap max-w-xl mx-auto">
          <div className='flex-[1_1_20rem]'>
            <div className='my-4 text-center'>
              <p className='text-xl sm:text-2xl font-bold tracking-wide underline uppercase'>Enter Image Details</p>
            </div>
            <div className="my-1">
              <input type="text" id="prompt" name="prompt" placeholder='Describe your image' {...register("prompt")} className="w-full bg-[ghostwhite] rounded border border-gray-300 text-base outline-none text-gray-700 py-2 px-3 leading-8" />
            </div>
            <div className="my-1">
              <select required name="size" id="size" className="w-full bg-[ghostwhite] rounded border border-gray-300 text-base outline-none text-gray-700 py-3 px-3 leading-8" {...register("size")}>
                <option value="256x256">256x256</option>
                <option value="512x512">512x512</option>
                <option value="1024x1024">1024x1024</option>
              </select>
            </div>
            <button type='submit' className="text-white bg-black border-0 py-3 px-4 rounded text-lg my-2 font-medium w-full">Generate Image</button>
          </div>
        </form>
      </section>
      {isSubmitting ? <div className='flex items-center justify-center my-3'>
        <PropagateLoader
          color="#000000"
          size={10}
        />
      </div> :
        URL !== null && <Image url={URL} alt={text} />}
    </>
  )
}

export default Component