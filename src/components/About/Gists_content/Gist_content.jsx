import React from 'react'
import Loading from '../../../routes/Loading'

const Gist_content = ({ gist, isLoading }) => {
  return (
    <section className='flex flex-col'>
      {!isLoading ? (
        <Loading />
      ) : (
        <div className=' flex flex-row justify-between items-center pb-6 code-block'>
          {gist.files &&
            Object.entries(gist.files).map(([fileName, fileData]) => (
              <div
                key={fileName}
                className='rounded-lg overflow-clip w-300px bg-[#010c15] md:w-[420px] xl:w-[380px] oxl:w-[425px]'
              >
                <a href={fileData.raw_url} target='_blank'>
                  <p className='bg-textColor cursor-pointer text-[#010c15] px-4 py-2 text-sm font-bold'>
                    {fileName}
                  </p>
                </a>
                <div className='bg-#010c15 px-4 py-2 text-sm font-bold'>
                  <pre className='text-textColor text-sm font-bold'>
                    <code className='language-javascript text-textColor text-sm font-bold'>
                      {fileData.content}
                    </code>
                  </pre>
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  )
}

export default Gist_content
