import React from 'react'

const Image = ({ url, text }) => {
  // const handleDownload = async (url, text) => {
  //   const data = await fetch(url, { mode: 'no-cors' });
  //   const blob = await data.blob();
  //   const href = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.download = "image";
  //   link.href = href;
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // }
  return (
    <section className='my-3 bg-[#F1F4F6] min-h-max flex items-center justify-center flex-col'>
      <img src={url} alt={text} />
      {/* <button className='bg-black text-white text-[1rem] font-semibold tracking-[2px] my-2 rounded-sm px-2' onClick={handleDownload}>Download</button> */}
    </section>
  )
}

export default Image