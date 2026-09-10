import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FaStar, 
  FaClock, 
  FaUserGraduate, 
  FaCheckCircle, 
  FaGlobe, 
  FaArrowLeft, 
  FaShieldAlt, 
  FaBookOpen,
  FaArrowRight, 
  FaCheck 
} from "react-icons/fa";
import API from "../utils/axios";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    API.get(`/courses/${id}`)
      .then((res) => {
        const c = res.data.data;
        setCourse({
          id: c._id,
          title: c.title,
          shortDescription: c.shortDescription,
          description: c.description,
          category: c.category,
          instructor: c.instructor,
          level: c.level,
          language: c.language,
          originalPrice: `₹${c.originalPrice}`,
          rawPrice: c.price,
          price: `₹${c.price}`,
          duration: `${c.duration} Hours`,
          accessDuration: c.accessDuration,
          image: c.thumbnail,
          rating: "-",
          reviews: "-",
          learningOutcomes: c.outcomes,
          requirements: c.requirements,
          features: c.features,
        });
      })
      .finally(() => setLoading(false));
  }, [id]);

  // Razorpay Payment Handler
// Razorpay Payment Handler
  const handleEnroll = async () => {
    try {
      setEnrolling(true);

      // 1. Load Razorpay script dynamically
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!res) {
        alert("Razorpay SDK failed to load. Check your internet connection.");
        setEnrolling(false);
        return;
      }

      // 2. Create Order on Backend
      const { data: response } = await API.post("/courses/payment/create-order", {
        courseId: course.id,
      });

      if (!response.success) {
        alert(response.message || "Something went wrong while creating order.");
        setEnrolling(false);
        return;
      }

      // Backend response ke mutabik data extract karein
      const orderDetails = response.data; 

      // 3. Open Razorpay Checkout Modal
      const options = {
        key: response.key || import.meta.env.VITE_RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID", // Apni Razorpay Key yahan ya .env me dalein
        amount: orderDetails.amount,
        currency: orderDetails.currency,
        name: "DigiCampus Academy",
        description: course.title,
        image: course.image,
        order_id: orderDetails.orderId, // Backend se orderId aa raha hai
        handler: async function (paymentResponse) {
          try {
            // 4. Verify Payment on Backend
            const { data: verifyData } = await API.post("/courses/payment/verify", {
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_signature: paymentResponse.razorpay_signature,
              courseId: course.id,
            });

            if (verifyData.success) {
              navigate("/success");
            } else {
              alert(verifyData.message || "Payment verification failed.");
            }
          } catch (verifyError) {
            console.error("Verification error:", verifyError);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#4f46e5",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Enrollment error:", error);
      alert(`Error: ${error.response?.data?.message || error.message || "Something went wrong!"}`);
    } finally {
      setEnrolling(false);
    }
  };
  // Helper function to load Razorpay script dynamically
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-500 font-semibold pt-28">Loading...</div>;
  if (!course) return <div className="min-h-screen flex items-center justify-center text-slate-500 font-semibold pt-28">Course not found.</div>;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-indigo-600 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Back Button */}
        <div>
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-indigo-600 transition"
          >
            <FaArrowLeft size={12} /> Back to Courses
          </Link>
        </div>

        {/* Hero Section */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-indigo-900 to-violet-950 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-indigo-500/35 border border-indigo-400/30 text-indigo-200 text-xs font-bold uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="flex items-center gap-1.5 text-amber-400 text-xs font-bold bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                  <FaStar size={12} /> {course.rating} ({course.reviews} reviews)
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-indigo-100/80 leading-relaxed">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-indigo-200 font-medium">
                <div className="flex items-center gap-2">
                  <FaUserGraduate className="text-indigo-400" />
                  <span>Instructor: <strong className="text-white">{course.instructor}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-indigo-400" />
                  <span>Language: <strong className="text-white">{course.language}</strong></span>
                </div>
              </div>
            </div>

            {/* Pricing & Enrollment Card Box */}
            <div className="rounded-2xl bg-white text-slate-900 p-6 shadow-2xl border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-slate-900">{course.price}</span>
                  <span className="text-sm text-slate-400 line-through font-semibold">{course.originalPrice}</span>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-600">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2"><FaClock className="text-indigo-600"/> Duration:</span>
                    <span className="text-slate-900 font-bold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2"><FaShieldAlt className="text-indigo-600"/> Access:</span>
                    <span className="text-slate-900 font-bold">{course.accessDuration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2"><FaBookOpen className="text-indigo-600"/> Level:</span>
                    <span className="text-slate-900 font-bold">{course.level}</span>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="pt-6">
                <button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-indigo-600 py-3.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition disabled:opacity-50"
                >
                  {enrolling ? "Processing..." : <>Enroll Now <FaArrowRight size={12} /></>}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100 space-y-4">
              <h3 className="text-xl font-black text-slate-900">About This Course</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {course.description}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100 space-y-6">
              <h3 className="text-xl font-black text-slate-900">What Students Will Learn</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.learningOutcomes?.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <FaCheck size={10} />
                    </div>
                    <p className="text-xs font-bold text-slate-800 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100 space-y-6">
              <h3 className="text-xl font-black text-slate-900">Course Requirements</h3>
              <ul className="space-y-3">
                {course.requirements?.map((req, index) => (
                  <li key={index} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                    <div className="h-2 w-2 rounded-full bg-indigo-600" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 space-y-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">This course includes:</h4>
              <ul className="space-y-3 text-xs font-semibold text-slate-600">
                {course.features?.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-indigo-600" size={16} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}