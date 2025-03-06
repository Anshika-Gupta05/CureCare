import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);
  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const docData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id != docId
      );
      setRelDoc(docData);
    }
  }, [doctors, speciality, docId]);
  return (
    <div className="flex flex-col items-center gap-4 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="flex justify-center w-full pt-5 px-3 sm:px-0 overflow-x-auto">
        <div className="flex space-x-4">
          {relDoc.slice(0, 5).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img
                className="bg-secondary hover:bg-primary w-full h-48 object-cover" // Maintain the height as before
                src={item.image}
                alt=""
              />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? "text-green-500" : "text-red-500"
                  } `}
                >
                  <p
                    className={`w-2 h-2 ${
                      item.available ? "bg-green-500" : "bg-red-500"
                    } rounded-full`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-secondary text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};

export default RelatedDoctors;
