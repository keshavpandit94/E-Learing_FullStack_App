import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { 
  Mail, 
  ArrowLeft, 
  Globe, 
  Twitter, 
  Linkedin, 
  BookOpen, 
  Award, 
  Users 
} from "lucide-react";
import BACK_URL from "../api";

export default function InstructorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at top
    axios.get(`${BACK_URL}/api/instructors/${id}`)
      .then((res) => {
        setInstructor(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching instructor:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!instructor) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
      <h2 className="text-2xl font-bold text-slate-800">Instructor not found</h2>
      <button onClick={() => navigate("/")} className="mt-4 text-blue-600 font-bold flex items-center gap-2">
        <ArrowLeft size={18} /> Return Home
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      {/* Header Banner - Since Navbar is hidden, this serves as the top boundary */}
      <div className="h-64 w-full bg-gradient-to-r from-slate-900 to-blue-900 relative">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-xl rounded-2xl text-white hover:bg-white/20 border border-white/20 transition-all z-20 flex items-center gap-2 font-bold text-sm"
        >
          <ArrowLeft size={20} /> Back
        </motion.button>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 -mt-32 relative z-10 p-8 md:p-12"
        >
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative shrink-0 mx-auto md:mx-0">
              {instructor.profilePicture?.url ? (
                <img
                  src={instructor.profilePicture.url}
                  alt={instructor.name}
                  className="w-40 h-40 rounded-[3rem] object-cover border-8 border-white shadow-2xl"
                />
              ) : (
                <div className="w-40 h-40 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] text-white text-5xl font-black shadow-2xl">
                  {instructor.name?.[0]}
                </div>
              )}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
                 <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              <span className="inline-flex items-center gap-1 text-xs font-black text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                Verified Instructor
              </span>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                {instructor.name}
              </h1>
              <p className="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} className="text-blue-500" /> {instructor.email}
              </p>

              {/* Dynamic Stats Bar */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
                <StatItem icon={<BookOpen size={20} />} value="12+" label="Courses" />
                <StatItem icon={<Users size={20} />} value="4.8k" label="Students" />
                <StatItem icon={<Award size={20} />} value="4.9" label="Rating" />
              </div>
            </div>

            <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto">
              <button 
                onClick={() => window.location.href = `mailto:${instructor.email}`}
                className="flex-1 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
              >
                Contact
              </button>
              <div className="flex gap-2 justify-center">
                <SocialIcon icon={<Linkedin size={20} />} />
                <SocialIcon icon={<Twitter size={20} />} />
                <SocialIcon icon={<Globe size={20} />} />
              </div>
            </div>
          </div>

          <hr className="my-12 border-slate-100" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Biography</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                {instructor.bio || "This instructor hasn't provided a detailed bio yet, but they are a valued member of our teaching community."}
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-6">Area of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['Curriculum Design', 'Student Mentorship', 'Technical Training'].map(skill => (
                    <span key={skill} className="bg-white border border-slate-200 px-3 py-2 rounded-xl text-xs font-bold text-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-2xl shadow-blue-200 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="font-black text-lg mb-2">Ready to start?</h4>
                  <p className="text-blue-100 text-sm mb-6">Join my courses and begin your learning path today.</p>
                  <button 
                    onClick={() => navigate("/courses")}
                    className="w-full bg-white text-blue-600 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors"
                  >
                    View My Courses
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-4 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <BookOpen size={120} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper Components for cleaner code
function StatItem({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-3 bg-slate-50 rounded-2xl text-slate-600">{icon}</div>
      <div>
        <p className="text-xl font-black text-slate-900 leading-none">{value}</p>
        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">{label}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-all active:scale-90">
      {icon}
    </div>
  );
}