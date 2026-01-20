export default function DepartmentHeadVerificationCode() {

  return (
    <div className="min-h-screen relative bg-primary overflow-hidden">
        <img
          src="/form-bg-image.png"
          alt="Flower"
          className="absolute left-48 h-[90vh] w-4/5 opacity-40 scale-[1.3]"
        />
      {/* LEFT FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 text-white">
        {/* Optional flower image */}
        
        
       

        <div className="relative z-10 h-full flex flex-col justify-between pl-32 py-24 max-w-2xl">
          {/* Logo */}
          <img
          src="/heartsy-logo.png"
          alt="logo"
          className="w-24"
        />

          {/* Text content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Explore Photo & Videos
            </h2>

            <p className="text-sm leading-relaxed opacity-90 max-w-md">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              or a typeface without relying on meaningful content.
            </p>

            <p className="text-sm mt-6 opacity-70">
              © 2026 Heartsy. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="relative min-h-screen flex justify-end items-center">
        {/* Glow / shadow behind card */}
        <div className="bg-blue-300 w-6 h-[90vh] rounded-l-[40px] shadow-2xl"></div>
        <div className="relative bg-white min-h-screen w-2/5 h-full rounded-l-[40px] shadow-2xl flex flex-col justify-center items-center">
        <div className="w-full max-w-xl px-10">

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
           Verification
          </h1>

          <div className="space-y-5 mt-6">
            {/* Email */}
           <div className="flex flex-col items-center gap-4">
  {/* Title */}
  <p className=" text-gray-600">
    Enter Verification Code
  </p>

  {/* Code boxes */}
  <div className="flex gap-3">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="w-12 h-12 rounded-lg border border-primary/40 
                   bg-white shadow-sm"
      />
    ))}
  </div>

  {/* Resend */}
  <p className="text-xs text-gray-500">
    Didn’t receive a code?
    <span className="ml-1 text-primary font-medium cursor-pointer">
      Resend
    </span>
  </p>
</div>


            {/* Login Button */}
            <button className="w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-lg font-medium transition">
              Continue
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
