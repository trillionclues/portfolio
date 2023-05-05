import React, { useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Input = ({
  handleEmailChange,
  handleNameChange,
  handleMessageChange,
}) => {
  const [state, handleSubmit] = useForm('mgebdpzj')
  // const formRef = useRef(null)

  if (state.succeeded) {
    // toast.success('Thanks for reaching out!')
    // return formRef.current.reset()
  }

  return (
    <div className='py-2 items-center flex justify-center'>
      <form
        className='flex flex-col justify-start items-start'
        onSubmit={handleSubmit}
        method='POST'
        // ref={formRef}
      >
        <div className='flex flex-col justify-center items-center gap-5 text-base pb-4'>
          <div className='flex flex-col justify-start items-start'>
            <label htmlFor='name' className='text-textColor pb-2'>
              _name:
            </label>
            <input
              className='border border-2 border-outline text-textColor py-2 pl-2 pr-[80px] rounded-lg bg-transparent input-focus'
              id='name'
              type='text'
              name='name'
              onChange={handleNameChange}
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <label htmlFor='email' className='text-textColor pb-2'>
              _email:
            </label>
            <input
              className='border border-2 border-outline text-textColor py-2 pl-2 pr-[80px] rounded-lg bg-transparent input-focus'
              id='email'
              type='email'
              name='email'
              onChange={handleEmailChange}
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <label className='text-textColor pb-2'>_message:</label>
            <textarea
              className='border border-2 border-outline text-textColor py-14 pt-2 pl-2 pr-[100px] rounded-lg bg-transparent resize-none input-focus'
              id='message'
              name='message'
              onChange={handleMessageChange}
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
        </div>
        <button
          type='submit'
          disabled={state.submitting}
          className='py-2.5 px-3 text-sm bg-outline rounded-lg hover:bg-gray-700'
        >
          submit-message
        </button>
      </form>
    </div>
  )
}

export default Input
