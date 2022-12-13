import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from 'axios';

import Image from './Image';

const Component = () => {
  const POST_URL = "http://localhost:5000/api/v1/generateImage";
  const [URL, setURL] = useState('');
  const [text, setText] = useState('');
  const schema = yup.object().shape({
    prompt: yup.string().required(),
    size: yup.string().required()
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const { prompt, size } = data;
    setText(prompt);
    try {
      await Axios.post(POST_URL, { prompt, size });
      data.status === true && setURL(data.data);
    } catch (err) {
      console.log(err)
    };
  };

  return (
    <>
      <section className="bg-gray-500 body-font py-8 my-1">
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center flex-col max-w-7xl mx-auto">
          <div className='my-4'>
            <p className='text-[1.25rem] sm:text-[1.45rem] tracking-[0.24rem] font-extrabold uppercase'>Enter Image Details</p>
          </div>
          <div className="w-[20rem] sm:w-[27rem] my-1">
            <input type="text" id="prompt" name="prompt" placeholder='Describe your image' {...register("prompt")} className="w-full bg-[ghostwhite] rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
          </div>
          <div className="w-[20rem] sm:w-[27rem] my-1">
            <select name="size" id="size" className="w-full bg-[ghostwhite] rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" placeholder='Your preferred size' {...register("size")}>
              <option>Your preferred size</option>
              <option value="256x256">256x256</option>
              <option value="512x512">512x512</option>
              <option value="1024x1024">1024x1024</option>
            </select>
          </div>
          <button type='submit' className="text-white bg-black border-0 py-1 px-4 rounded text-lg my-2 font-medium">Generate Image</button>
        </form>
      </section>
      <Image url={URL} alt={text} />
    </>
  )
}

export default Component