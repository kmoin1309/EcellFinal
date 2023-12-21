import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen w-[100%] flex flex-col justify-center items-center lg:px-16 space-y-8">
        <h1 className="text-white text-4xl font-Onest font-bold pb-4 border-b-4 border-stone-300">
          Contact
        </h1>

        <div className="w-full flex flex-col md:flex-row-reverse">
          <ContactForm />

          {/* Get in touch with us */}

          <div className="h-[500px] w-[100%] flex flex-col justify-center items-center z-51 space-y-16">
            <div className="w-[70%] flex flex-col justify-center items-start space-y-12">
              <div className="space-y-3">
                <h1 className="text-white text-3xl font-semibold font-Onest">
                  Get in touch with us
                </h1>
                <p className="text-stone-300 text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur sed ratione earum, error delectus porro facilis
                  non, minus deserunt placeat, eaque et est?
                </p>
              </div>

              {/* Contact through */}
              <div className="w-[80%] space-y-7">
                <div className="flex">
                  <div className="bg-accent w-14 flex justify-center items-center rounded-lg mx-2">
                    <img src="/location.png" alt="" />
                  </div>

                  <div className="">
                    <h1 className="text-white text-xl font-semibold font-Onest">
                      Our Location
                    </h1>
                    <p className="text-stone-300">Sector 69, Nerul West</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-accent w-14 flex justify-center items-center rounded-lg mx-2">
                    <img src="/telephone.png" alt="" />
                  </div>

                  <div className="">
                    <h1 className="text-white text-xl font-semibold font-Onest">
                      Phone No.
                    </h1>
                    <p className="text-stone-300">83691 74779</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-accent w-14 flex justify-center items-center rounded-lg mx-2">
                    <img src="/mail.png" alt="" />
                  </div>

                  <div className="">
                    <h1 className="text-white text-xl font-semibold font-Onest">
                      Email Address
                    </h1>
                    <p className="text-stone-300">ecell.ternaengg.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Contact;
