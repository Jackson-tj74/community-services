





 
  
 
import React from "react";
import { Calendar } from "lucide-react";

export function RequestedSevicesTable() {
  const allServicesData = [
    {
      id: 13,
      image: "ServicesImage/ServiceImg1.png", 
      name: "Car Auto Repair LTD",
      location: "KG 9 Avenue, Kigali",
      contact: "+250788888888",
      hours: "08:00AM - 18:00PM",
      status: "Waiting",
      requestedNotes: "Please schedule the service for Friday morning and call before arrival.",
      rejectedNotes: "N/A",
    },
    {
      id: 14,
      image: "/images/sewer.png",
      name: "Jany Sewing Solutions",
      location: "KK 3 Rd, Kimihurura",
      contact: "+250788888888",
      hours: "08:00AM - 20:00PM",
      status: "Approved",
      requestedNotes: "Please schedule the service for Friday morning and call before arrival.",
      rejectedNotes: "Request declined due to unavailable time slot on the selected date.",
    },
    {
      id: 15,
      image: "/images/car-wash.png",
      name: "Car Wash Enterprise",
      location: "NY 12 Rd, Rebero",
      contact: "+250788888888",
      hours: "06:00AM - 00:00AM",
      status: "Completed",
      requestedNotes: "Please schedule the service for Friday morning and call before arrival.",
      rejectedNotes: "Request declined due to unavailable time slot on the selected date.",
    },
    {
      id: 16,
      image: "/images/dec.png",
      name: "K.C Decorators Group",
      location: "KG 8 St Remera-Kabeza",
      contact: "+250788888888",
      hours: "08:00AM - 17:00PM",
      status: "Rejected",
      requestedNotes: "Please schedule the service for Friday morning and call before arrival.",
      rejectedNotes: "Request declined due to unavailable time slot on the selected date.",
    },
  ];

  const statusClasses = {
  Available: "bg-hard-gray text-xs",
  Completed: "bg-small-soft-blue text-sky-blue text-xm ",
  Rejected: "bg-red-200/50 text-red-300 text-sm",
  Waiting: "bg-hard-gray/50 text-xs",
  Approved: "bg-soft-green text-hard-green text-xs",
};

  const canBook = (status) => ["Completed", "Rejected"].includes(status);

  return (
    <div className="w-full bg-universal/50 border border-slate-500 rounded-[20px] shadow-sm overflow-hidden ">
      <div className="overflow-x-auto">
        <table className="w-full  border-collapse">
          <thead>
            <tr className="border-b bg-primary h-[100px] border-slate-100 ">
              <th className="py-4 px-4 text-left  text-hard-gray text-xs  tracking-tighter">Service Avatar</th>
              <th className="py-4 px-4 text-left  text-hard-gray text-xs  tracking-tighter">Service Name</th>
              <th className="py-4 px-4 text-left  text-hard-gray text-xs  tracking-tighter">Service Location</th>
              <th className="py-4 px-4 text-left  text-hard-gray text-xs  tracking-tighter">Service Contacts</th>
              <th className="py-4 px-4 text-left  text-hard-gray text-xs  tracking-tighter">Service Hours</th>
              <th className="py-4 px-4 text-center  text-hard-gray text-xs  tracking-tighter">Request Status</th>
              <th className="py-4 px-4 text-left  text-hard-gray text-xs  tracking-tighter">Request Notes</th>
              <th className="py-4 px-4 text-left  text-hard-gray text-xs  tracking-tighter">Rejection Notes</th>
              <th className="py-4 px-4 text-center  text-hard-gray text-xs  tracking-tighter">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {allServicesData.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
              
                <td className="py-4 px-4">
                  <img
                    src={row.image}
                    alt=""
                    className="w-50 h-24 rounded-xl object-cover shadow-sm border border-slate-100"
                  />
                </td>
                
             
                <td className="py-4 px-4  font-bold text-xs text-sm text-hard-gray">{row.name}</td>
                
              
                <td className="py-4 px-4 font-medium text-sm text-hard-gray leading-tight">{row.location}</td>
             
                <td className="py-4 px-4  font-bold text-sm text-hard-gray">{row.contact}</td>
                
             
                <td className="py-4 px-4  font-bold text-sm text-hard-gray">{row.hours}</td>
                
              
                <td className="py-4 px-4 text-center">
                  <span className={`px-4 py-1.5 rounded-full  font-black tracking-tight ${statusClasses[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                
                
                <td className="py-4 px-4 max-w-[150px]">
                  <p className=" font-medium text-sm text-hard-gray leading-relaxed ">
                    {row.requestedNotes}
                  </p>
                </td>
                
               
                <td className="py-4 px-4 max-w-[150px]">
                  <p className=" font-medium  text-sm text-hard-gray leading-relaxed">
                    {row.rejectedNotes}
                  </p>
                </td>
                
              
                <td className="py-4 px-4 text-center">
                  <button
                    disabled={!canBook(row.status)}
                    className={`flex items-center justify-center gap-2 mx-auto px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                      canBook(row.status)
                        ? "bg-primary border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary cursor-pointer"
                        : "bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <Calendar size={12} strokeWidth={3} />
                    <span className=" font-black uppercase">Book Now</span>
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      
      
    </div>
  );
}