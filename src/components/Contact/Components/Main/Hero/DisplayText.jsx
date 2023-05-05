import React from 'react'
import { formatDate } from '../../../../../../utils/Date'

const DisplayText = ({ email, name, message }) => {
  const currentDate = formatDate()
  return (
    <div className='text-sm py-5 items-start flex justify-start px-16 flex-col'>
      <div className='flex flex-col gap-1'>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>1.</p>
          <p className='text-span1'>
            const <span className='text-span3 pr-3'>button</span>
            <span className='text-white'>=</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>2.</p>
          <p className='text-span3'>
            document.querySelector
            <span className='text-textColor pl-3'>{'('}</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>3.</p>
          <p className='text-span1'>
            '#sendBtn'
            <span className='text-textColor pl-3'>{')'};</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>4.</p>
          <p className='text-span1'></p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>5.</p>
          <p className='text-span1'>
            const <span className='text-span3 pr-3'>message</span>
            <span className='text-white pr-3'>=</span>
          </p>
          <p className='text-textColor'>{'{'}</p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>6.</p>

          <p className='text-span1'>
            <span className='text-span3 pl-8 pr-2'>name</span>
            <span className='text-textColor pr-3'>:</span>
          </p>
          <p className='text-span1'>
            "{name}" <span className='text-textColor'>,</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>7.</p>
          <p className='text-span1'>
            <span className='text-span3 pl-8 pr-2'>email</span>
            <span className='text-textColor pr-3'>:</span>
          </p>
          <p className='text-span1'>
            "{email}" <span className='text-textColor'>,</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>8.</p>
          <p className='text-span1'>
            <span className='text-span3 pl-8 pr-2'>message</span>
            <span className='text-textColor pr-3'>:</span>
          </p>
          <p className='text-span1'>
            "{message}" <span className='text-textColor'>,</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>9.</p>
          <p className='text-span1'>
            <span className='text-textColor pl-8 pr-2'>date</span>
            <span className='text-textColor pr-3'>:</span>
          </p>
          <p className='text-span1'>
            "{currentDate}" <span className='text-textColor'>,</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>10.</p>
          <p className='text-span1'>
            <span className='text-textColor'>{'}'}</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>11.</p>
          <p className='text-span1'></p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>12.</p>
          <p className='text-span3 pr-3'>button.addEventListener</p>
          <span className='text-textColor pr-3'>{'('}</span>
          <span className='text-span1'>'click'</span>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>13.</p>
          <p className='text-textColor pr-3'>{')'},</p>
          <span className='text-textColor pr-2'>{'()'}</span>
          <span className='text-span2 pr-2'>{'=>'}</span>
          <span className='text-textColor'>{'{'}</span>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>14.</p>
          <p className='text-span3  pl-8 pr-2'>form.send</p>
          <p className='text-textColor'>
            {'('} <span className='text-span3'>message</span> {')'}
            <span>;</span>
          </p>
        </div>
        <div className='button-text flex flex-row'>
          <p className='text-textColor pr-10'>15.</p>
          <p className='text-textColor'>{'})'}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayText
