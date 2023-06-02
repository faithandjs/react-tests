import React, { useState } from 'react';

export default function Index() {
  const [paragrapgh, setparagraph] = useState('');
  const [input, setInput] = useState('');
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-xl font-bold'>Last day of may</h2>
      <p>Today is 31st, the last of May.</p>

      <form
        className='grid gap-5 py-10 items-center '
        onSubmit={(e) => {
          e.preventDefault();
          console.log('click');
          setparagraph(input.trim());
          setInput('');
        }}>
        <label htmlFor='journal'>Talk about how this month was for you?</label>
        <textarea
          name='journal'
          id='journal'
          value={input}
          onChange={(e) => {
            const { value } = e.target;
            setInput(value);
          }}
          className='resize-none h-40 bg-transparent rounded-md outline-none focus:border-amber-500 border border-gray-500 p-2 '></textarea>
        <button
          className='px-3 py-2 bg-gray-600 hover:bg-amber-500 w-max rounded-md text-white'
          type='submit'
          disabled={input.trim().length === 0}>
          Submit
        </button>
        {/* <button
          className='px-3 py-2 bg-gray-600 hover:bg-amber-500 w-max rounded-md text-white'
          type='submit'
          disabled={input.trim().length === 0}>
          Add
        </button> */}
      </form>

      <div className='w-[300px]'>
        <h3
          className={`text-2xl font-bold underline mt-14 text-center ${
            paragrapgh.length > 0 ? 'text-amber-500 ' : ''
          }`}>
          Journal
        </h3>
        <p className='w-full py-5' data-testid='entry'>
          {paragrapgh}
        </p>
      </div>
    </div>
  );
}

