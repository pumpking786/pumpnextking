"use client";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false); // State to track the button color change

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset(); // Clear form inputs on component mount
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    const form = formRef.current;
    if (form) {
      try {
        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual IDs from EmailJS
        const result = await emailjs.sendForm(
          "service_j05ypi8",
          "template_e9tv9jl",
          form,
          "HUlZ6qzBfjfeHh90g"
        );

        if (result.status === 200) {
          setIsSent(true); // Set the button color to green
          form.reset(); // Clear form inputs after successful submission

          // Reset the button color after 2 seconds
          setTimeout(() => setIsSent(false), 2000);
        } else {
          console.error("Email sending failed");
        }
      } catch (error) {
        console.error("Email sending error:", error);
      }
    }
  };

  return (
    <div>
      <section
        id="contact"
        className="from-blue-500 via-purple-500 to-pink-500 text-white py-10 px-8"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <form
            ref={formRef}
            action="https://getform.io/f/7b177aff-de5a-491c-b179-f418a6cb6725"
            method="POST"
            encType="multipart/form-data"
            className="grid grid-cols-1 gap-6 max-w-xl mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email_id"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                isSent
                  ? "bg-green-500 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {isSent ? "Message Sent" : "Send Message"}
            </button>
          </form>
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-14 mt-8 flex-wrap">
            {/* Facebook */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.facebook.com/maskey.amatya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl lg:text-5xl hover:text-blue-600 transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                Facebook
              </span>
            </div>

            {/* Instagram */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.instagram.com/pramit252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-pink-600 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                Instagram
              </span>
            </div>

            {/* YouTube */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.youtube.com/@PramitAmatya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-red-600 transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                Pramit Amatya
              </span>
            </div>

            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.youtube.com/@ChesswithPramit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-red-600 transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                ChesswithPramit
              </span>
            </div>

            {/* GitHub */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://github.com/pumpking786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-blue-200 transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                GitHub
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group mb-4 sm:mb-0">
              <a
                href="https://www.linkedin.com/in/pramit-amatya-b03334283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl lg:text-4xl hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;

// "use client";
// import React, { useRef, useEffect, useState } from "react";

// const ContactSection = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [isSent, setIsSent] = useState(false); // State to track the button color change

//   useEffect(() => {
//     if (formRef.current) {
//       formRef.current.reset(); // Clear form inputs on component mount
//     }
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // Prevent default form submission

//     const form = formRef.current;
//     if (form) {
//       const formData = new FormData(form);

//       try {
//         const response = await fetch(form.action, {
//           method: form.method,
//           body: formData,
//         });

//         if (response.ok) {
//           setIsSent(true); // Set the button color to green
//           form.reset(); // Clear form inputs after successful submission

//           // Reset the button color after 2 seconds
//           setTimeout(() => setIsSent(false), 2000);
//         } else {
//           console.error("Form submission failed");
//         }
//       } catch (error) {
//         console.error("Form submission error:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <section
//         id="contact"
//         className="from-blue-500 via-purple-500 to-pink-500 text-white py-10 px-8"
//       >
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
//           <p className="text-lg mb-8">
//             Have a question or want to work together? Feel free to reach out!
//           </p>
//           <form
//             ref={formRef}
//             action="https://getform.io/f/7b177aff-de5a-491c-b179-f418a6cb6725"
//             method="POST"
//             encType="multipart/form-data"
//             className="grid grid-cols-1 gap-6 max-w-xl mx-auto"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             <textarea
//               name="message"
//               rows={5}
//               placeholder="Your Message"
//               className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-400"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
//                 isSent
//                   ? "bg-green-500 text-white"
//                   : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
//               }`}
//             >
//               {isSent ? "Message Sent" : "Send Message"}
//             </button>
//           </form>
//           {/* Social Media Icons */}
//           <div className="flex justify-center items-center gap-14 mt-8 flex-wrap">
//             {/* Facebook */}
//             <div className="relative group mb-4 sm:mb-0">
//               <a
//                 href="https://www.facebook.com/maskey.amatya/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-4xl lg:text-5xl hover:text-blue-600 transition duration-300"
//               >
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
//                 Facebook
//               </span>
//             </div>

//             {/* Instagram */}
//             <div className="relative group mb-4 sm:mb-0">
//               <a
//                 href="https://www.instagram.com/pramit252"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-3xl lg:text-4xl hover:text-pink-600 transition duration-300"
//               >
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
//                 Instagram
//               </span>
//             </div>

//             {/* YouTube */}
//             <div className="relative group mb-4 sm:mb-0">
//               <a
//                 href="https://www.youtube.com/@PramitAmatya"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-3xl lg:text-4xl hover:text-red-600 transition duration-300"
//               >
//                 <i className="fab fa-youtube"></i>
//               </a>
//               <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
//                 Pramit Amatya
//               </span>
//             </div>

//             <div className="relative group mb-4 sm:mb-0">
//               <a
//                 href="https://www.youtube.com/@ChesswithPramit"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-3xl lg:text-4xl hover:text-red-600 transition duration-300"
//               >
//                 <i className="fab fa-youtube"></i>
//               </a>
//               <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
//                 ChesswithPramit
//               </span>
//             </div>

//             {/* GitHubs */}
//             <div className="relative group mb-4 sm:mb-0">
//               <a
//                 href="https://github.com/pumpking786"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-3xl lg:text-4xl hover:text-blue-200 transition duration-300"
//               >
//                 <i className="fab fa-github"></i>
//               </a>
//               <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
//                 GitHub
//               </span>
//             </div>

//             {/* LinkedIn */}
//             <div className="relative group mb-4 sm:mb-0">
//               <a
//                 href="https://www.linkedin.com/in/pramit-amatya-b03334283/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-3xl lg:text-4xl hover:text-blue-400 transition duration-300"
//               >
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//               <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
//                 LinkedIn
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactSection;
