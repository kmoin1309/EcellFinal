import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("moqgaaqj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="h-[500px] w-[100%] flex justify-center items-center font-Onest">
        <div className="w-[65%] space-y-4">
          <div class="relative">
            <label
              for="name"
              class=" text-[14px] tracking-[0.2px] text-stone-400 absolute top-[-14px] z-10"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              class="relative w-full mb-5 text-[16px] tracking-[0.2px] text-white bg-transparent outline-none border-b-[1px] pt-3 pb-1"
              required
            />
            <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
          </div>

          <div class="relative">
            <label
              for="email"
              class="text-[14px] tracking-[0.2px] text-stone-400 absolute top-[-14px] z-10"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              class="relative w-full mb-5 text-[16px] tracking-[0.2px] text-white bg-transparent outline-none border-b-[1px] pt-3 pb-1"
              required
            />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>

          <div class="relative">
            <label
              for="phone"
              class="text-[14px] tracking-[0.2px] text-stone-400 absolute top-[-14px] z-10"
            >
              Your Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              class="relative w-full mb-5 text-[16px] tracking-[0.2px] text-white bg-transparent outline-none border-b-[1px] pt-3 pb-1"
              required
            />
            <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
          </div>

          <div class="relative">
            <label
              for="msg"
              class="text-[14px] tracking-[0.2px] text-stone-400 absolute top-[-14px] z-10"
            >
              Your Message
            </label>

            <textarea
            //   rows="5"
              id="msg"
              name="msg"
              class="relative w-full mb-5 text-[16px] tracking-[0.2px] text-white bg-transparent outline-none border-b-[1px] pt-3"
              required
            ></textarea>
            <ValidationError 
        prefix="msg" 
        field="msg"
        errors={state.errors}
      />
          </div>

          <button
          className=" text-white w-[50%] bg-accent p-3 rounded tracking-[0.2px] cursor-pointer"
          value="Submit" disabled={state.submitting}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
