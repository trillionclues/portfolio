import React, { useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'

const Input = ({
  handleEmailChange,
  handleNameChange,
  handleMessageChange,
}) => {
  const [state, handleSubmit] = useForm('mgebdpzj')

  // reset form on submit to formspree
  const formRef = useRef(null)
  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset()
    }
  }

  // if submitting form
  if (state.submitting) {
    return (
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <h3>Submitting...</h3>
      </div>
    )
  }

  // after form submission
  if (state.succeeded) {
    return (
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <h3>Thank you! 🤟</h3>
        <p className='text-textColor text-center mt-2'>
          Your message has been recieved. You will get a response really soon!
        </p>

        <button
          onClick={() => {
            resetForm()
            window.location.reload()
          }}
          className='bg-outline text-sm text-white-700 mt-5 rounded-lg py-2 px-2'
        >
          <Link to='/contact-me'>send-me-message</Link>
        </button>
      </div>
    )
  }

  return (
    <div className='py-2 items-center flex justify-center'>
      <form
        className='flex flex-col justify-start items-start'
        id='form'
        method='POST'
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col justify-center items-center gap-5 text-base pb-4'>
          <div className='flex flex-col justify-start items-start'>
            <label htmlFor='name' className='text-textColor pb-2'>
              _name:
            </label>
            <input
              className='border border-2 border-outline text-textColor py-2 pl-0 md:pl-2 pr-[60px] md:pr-[80px] rounded-lg bg-transparent input-focus'
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
              className='border border-2 border-outline text-textColor py-2 pl-0 md:pl-2 pr-[60px] md:pr-[80px] rounded-lg bg-transparent input-focus'
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
              className='border border-2 border-outline text-textColor py-14 pt-2 pl-0 md:pl-2 pr-[80px] md:pr-[100px] rounded-lg bg-transparent resize-none input-focus'
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
          id='submitbtn'
          className='py-2.5 px-3 text-sm bg-outline rounded-lg hover:bg-gray-700'
        >
          {state.submitting ? 'Submitting...' : 'submit-message'}
        </button>
      </form>
    </div>
  )
}

export default Input
