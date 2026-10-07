 import { useState, useRef } from "react";
 import Button from "./buttons";
 import emailjs from "@emailjs/browser";

 type PricingType = "individual" | "professional";

 const Pricing: React.FC = () => {
   interface Plan {
     name: string;
     price: string;
   }

   const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
   const [isSending, setIsSending] = useState(false);
   const [status, setStatus] = useState("");
   const [pricingType, setPricingType] = useState<PricingType>("individual");

   const formRef = useRef<HTMLFormElement>(null);

   const handleClose = () => {
     setSelectedPlan(null);
     setStatus("");
   };

   const handleSelectPlan = (name: string, price: string) => {
     setSelectedPlan({ name, price });
   };

   // Handle submit via EmailJS
   async function handleSubmit(e: React.FormEvent) {
     e.preventDefault();
     setIsSending(true);
     setStatus("");

     try {
       await emailjs.sendForm(
         "service_6s0te4a",
         "template_z9bn1v9",
         formRef.current!,
         "rxwv2S76NEeJm4z0v",
       );
       setStatus("Submitted successfully! 🎉");
       setTimeout(() => handleClose(), 1500);
     } catch (err) {
       console.error(err);
       setStatus("Failed to send request.");
     } finally {
       setIsSending(false);
     }
   }

   return (
     /* Pricing */
     <section className="Plans-cards" id="portfolio">
       <div className="Pricing-title">
         <div className="title-description">
           <p>Pricing</p>

           <h2>
             Recruitment <span>Packages</span>
           </h2>

           <p>
             My recruitment services are designed to provide flexible solutions
             based on each client's hiring needs. Fees are based on the role,
             number of positions and level of recruitment support required.
           </p>
         </div>

         {/* Pricing buttons */}
         <div className="Pricing-btn pricing-toogle">
           <button
             className={`Ind-button toggle-btn ${
               pricingType === "individual" ? "active" : ""
             }`}
             onClick={() => setPricingType("individual")}
           >
             <h5>Individual</h5>
           </button>

           <button
             className={`Ind-button toggle-btn ${
               pricingType === "professional" ? "active" : ""
             }`}
             onClick={() => setPricingType("professional")}
           >
             <h5>Professional</h5>
           </button>
         </div>
       </div>

       {/* ================= INDIVIDUAL CARDS ================= */}
       {pricingType === "individual" && (
         <div className="card-group">
           {/* Recruitment Support */}
           <div className="card-one">
             <div className="card-one-top">
               <p>Recruitment Support</p>
               <h2>
                 <span>GHS</span>300
               </h2>
             </div>

             <div className="card-one-bottom">
               <ul>
                 <li>
                   For clients who need assistance with candidate sourcing and
                   shortlisting
                 </li>
                 <li>
                   <span className="hfhuru">Includes:</span> Job profiling,
                   sourcing, CV screening and submission of suitable candidates.
                 </li>
                 <li>
                   <span>Estimated Timeline:</span> 5–7 working days
                   <p className="text-white">hiiiii</p>
                   <p className="text-white">hiiiii</p>
                   <p className="text-white">hiiiii</p>
                 </li>
               </ul>
               <Button
                 label="Choose Plan"
                 variant="primary"
                 onClick={() =>
                   handleSelectPlan("Recruitment Support", "GHS 300")
                 }
               />
             </div>
           </div>

           {/* Standard Recruitment */}
           <div className="card-one">
             <div className="card-one-top card-two">
               <p>Standard Recruitment</p>
               <h2>
                 <span>GHS</span>500
               </h2>
             </div>

             <div className="card-one-bottom card-two">
               <ul>
                 <li>
                   For clients who require additional support in identifying and
                   assessing candidates.
                 </li>
                 <li>
                   <span>Includes:</span> Sourcing, screening, interviews,
                   candidate assessment, shortlisting and interview
                   coordination.
                 </li>
                 <li>
                   <span>Estimated Timeline:</span> 7–10 working days.
                   <p className="text-white">hiiiii</p>
                 </li>
               </ul>

               <Button
                 label="Choose Plan"
                 variant="primary"
                 onClick={() =>
                   handleSelectPlan("Standard Recruitment", "GHS 500")
                 }
               />
             </div>
           </div>

           {/* End-to-End Recruitment */}
           <div className="card-one">
             <div className="card-one-top">
               <p>End-to-End Recruitment</p>
               <h2>
                 <span>GHS</span>1,000
               </h2>
             </div>

             <div className="card-one-bottom">
               <ul>
                 <li>
                   A complete recruitment service for clients who want the
                   recruitment process managed on their behalf
                 </li>
                 <li>
                   Includes: Job profiling, sourcing, screening, interviews,
                   assessment, shortlisting, interview coordination, reference
                   checks and placement support.
                 </li>
                 <li>Estimated Timeline: 10–15 working days.</li>
               </ul>

               <Button
                 label="Choose Plan"
                 variant="primary"
                 onClick={() =>
                   handleSelectPlan("End-to-End Recruitment", "GHS 1,000")
                 }
               />
             </div>
           </div>
         </div>
       )}

       {/* ================= PROFESSIONAL CARDS ================= */}
       {pricingType === "professional" && (
         <div className="card-group">
           {/* Executive Level */}
           <div className="card-one">
             <div className="card-one-top card-two">
               <p>Middle/Executive Level & Specialist Recruitment</p>
               <h2>
                 <span>$</span>119
               </h2>
             </div>

             <div className="card-one-bottom card-two">
               <ul>
                 <li>
                   For senior, specialist or difficult-to-fill positions
                   requiring targeted sourcing or headhunting
                 </li>
                 <li>
                   Fee: Negotiable based on the role and recruitment
                   requirements.
                 </li>
                 <li>
                   Estimated Timeline: 15–30 working days, depending on the
                   complexity and availability of suitable candidates.
                 </li>
               </ul>

               <Button
                 label="Choose Plan"
                 variant="primary"
                 onClick={() =>
                   handleSelectPlan(
                     "Executive & Specialist Recruitment",
                     "$119",
                   )
                 }
               />
             </div>
           </div>

           {/* Bulk Recruitment */}
           <div className="card-one">
             <div className="card-one-top card-two">
               <p>Bulk Recruitment Projects</p>
               <h2>Quote</h2>
             </div>

             <div className="card-one-bottom">
               <ul>
                 <li>
                   For businesses with multiple hiring requirements within an
                   agreed period
                 </li>
                 <li>
                   Fee: Project-based and determined by the number of positions,
                   recruitment requirements and scope of work.
                 </li>
                 <li>
                   Estimated Timeline: Agreed based on the number of vacancies
                   and required hiring volume.
                 </li>
               </ul>

               <Button
                 label="Choose Plan"
                 variant="primary"
                 onClick={() =>
                   handleSelectPlan("Bulk Recruitment Projects", "Custom Quote")
                 }
               />
             </div>
           </div>
         </div>
       )}

       {/* POPUP MODAL */}
       {selectedPlan && (
         <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black/10 backdrop-blur-sm bg-image bg-cover ">
           <div className=" p-4 shadow-2xl rounded-2xl relative bg-white h-110 w-full max-w-2xl  border-none   text-white flex flex-col gap-3 items-center justify-center md:flex-row ">
             {/* Close Button */}
             <button
               onClick={handleClose}
               className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg font-bold"
             >
               ✕
             </button>
             <div className="w-full md:w-1/2 h-48 md:h-auto relative">
               <img
                 src="/public/images/popup-img(1).png"
                 alt="Package Details"
                 className="w-full h-110 p-2 object-cover rounded-l-2xl hidden md:block "
               ></img>
             </div>

             <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center pop-up">
               <h3 className="text-2xl  text-[#275297]">
                 Complete Your Request
               </h3>
               

               {/* Selected Plan Summary Card */}
               <div className="w-80 bg-[#275297]   border border-slate-300 rounded-lg p-2 mb-4 text-center ">
                 
                 <div className="flex justify-between text-center items-center pop-up">
                   <span className=" text-white text-base">
                     {selectedPlan.name}
                   </span>
                   <span className="text-sm font-semibold text-white">
                     {selectedPlan.price}
                   </span>
                 </div>
               </div>
               <hr />

               {/* Form */}
               <form
                 ref={formRef}
                 onSubmit={handleSubmit}
                 className="space-y-3 text-left w-80 pop-up"
               >
                 {/* Hidden inputs to pass plan details to EmailJS */}
                 <input
                   type="hidden"
                   name="selectedPlanName"
                   value={selectedPlan.name}
                 />
                 <input
                   type="hidden"
                   name="selectedPlanPrice"
                   value={selectedPlan.price}
                 />

                 <div className="pop-up ">
                   <label className="block text-xs font-semibold text-[#275297] mb-1">
                     Name
                   </label>
                   <input
                     type="text"
                     name="fullName"
                     required
                     placeholder="John Doe"
                     className="w-full h-10 rounded-lg  px-3 py-2 text-sm text-gray-700 border border-slate-200 focus:outline-none"
                   />
                 </div>

                 <div className="pop-up">
                   <label className="block text-xs font-semibold text-[#275297] mb-1">
                     Email
                   </label>
                   <input
                     type="email"
                     name="email"
                     required
                     placeholder="john@example.com"
                     className="w-full rounded-lg h-10 px-3 py-2 text-sm text-gray-700  border border-slate-200 focus:outline-none"
                   />
                 </div>

                 <div className="pop-up">
                   <label className="block text-xs mb-1 font-semibold text-[#275297]">
                     Contact
                   </label>
                   <input
                     type="tel"
                     name="phone"
                     required
                     placeholder="0595753157"
                     className="w-full h-10 rounded-lg px-3 py-2 text-sm text-gray-700 border border-slate-200 focus:outline-none"
                   />
                 </div>
                 {status && (
                   <p className="mt-2 text-center text-sm font-medium text-gray-700">
                     {status}
                   </p>
                 )}
                 <div className="flex justify-center m-2 pop-up">
                   <button
                     type="submit"
                     disabled={isSending}
                     className="w-80 flex justify-center items-center h-10 py-2.5 rounded-lg bg-[#275297] text-white hover:bg-[#1b529b] transition disabled:opacity-50 shadow-xl "
                   >
                     {isSending
                       ? "Submitting..."
                       : `Submit `}
                   </button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       )}
     </section>
   );
 };

 export default Pricing;