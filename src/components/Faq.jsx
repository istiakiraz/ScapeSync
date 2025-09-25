import React from 'react'

export default function Faq() {
  return (
    <div className='text-center my-40'>

        
            <h2 className='text-5xl font-bold' >
                What Our Users Are Saying
            </h2>
            <p className='text-center text-gray-500 text-sm max-w-xl mx-auto mt-4' >
                Real stories from clients, employees, and business owners who use our app every day.
            </p>


     <div className='text-left mt-14 max-w-9/12 mx-auto space-y-5'>

           <div className="collapse collapse-plus bg-base-100 border border-[#3ba334]/30">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">Is the app free to use?</div>
  <div className="collapse-content text-sm">Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.</div>
</div>

<div className="collapse collapse-plus bg-base-100 border border-[#3ba334]/30">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Can I assign multiple employees to one job?</div>
  <div className="collapse-content text-sm">Yes, you can assign multiple employees to a single job.</div>
</div>

<div className="collapse collapse-plus bg-base-100 border border-[#3ba334]/30">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Does it work on both mobile and desktop?</div>
  <div className="collapse-content text-sm">Yes, the system works seamlessly on both mobile and desktop.</div>
</div>
     </div>

    </div>
  )
}
