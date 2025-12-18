export default function SuperAdminVerficationCode() {

  return (
    <div className="min-h-screen relative bg-primary overflow-hidden flex flex-col justify-center">
      <img
        src="/form-bg-image.png"
        alt="Flower"
        className="absolute left-48 h-[80vh] w-4/5 opacity-40 scale-[1.2] z-0"
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
        </div>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="bg-white w-full max-w-sm py-4 rounded-xl flex flex-col justify-start items-center mx-auto relative z-20">
        <div className="w-full px-6 py-4 flex flex-col justify-between">
          <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Verification</h1>
          </div>

          <div className="space-y-5 mt-6 px-6 text-center">
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
        className="w-10 h-10 rounded-lg border border-primary/40 
                   bg-white shadow-sm"
      />
    ))}
  </div>

  {/* Resend */}
  <p className="text-sm text-gray-500 mt-2">
    Didn’t receive a code?
    <span className="ml-1 text-primary font-medium cursor-pointer">
      Resend
    </span>
  </p>
</div>


            {/* Login Button */}
            <button className="w-fit px-4 bg-primary hover:bg-primaryDark text-white py-3 rounded-lg font-medium transition">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
