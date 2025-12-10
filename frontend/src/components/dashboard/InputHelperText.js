export default function InputHelperText() {
  return (
    <div className="mt-3 space-y-4">
      <p className="text-mywhite font-medium text-md leading-relaxed">
        You can simply type your expenses naturally in{" "}
        <span className="mx-2 relative font-semibold text-mywhite before:bg-lightred before:absolute before:block before:-inset-1 before:-skew-y-3">
          <span className="relative">Hinglish</span>
        </span>
        -- no need to follow any strict format or manually add categories. Our
        smart assistant automatically understands your input, extracts the
        amount, and categorizes it for you.
      </p>

      <div className="text-mywhite text-sm border border-lightgray/30 rounded-sm px-3 py-4">
        <span className="mx-2 relative font-medium text-mywhite before:bg-lightred before:absolute before:block before:-inset-1 before:-skew-y-2 ">
          <span className="relative">Billi ka khana</span>
        </span>{" "}
        → 🐱 Cat food <span className="text-lightgray">(Pet category)</span>
      </div>
      <div className="text-mywhite text-sm border border-lightgray/30 rounded-sm px-3 py-4">
        <span className="mx-2 relative font-medium text-mywhite before:bg-lightred before:absolute before:block before:-inset-1 before:-skew-y-1">
          <span className="relative">1kg ki chini 120rs</span>
        </span>
        → 🍬 Sugar ₹120 <span className="text-lightgray">(Groceries)</span>
      </div>
      <div className="text-mywhite text-sm border border-lightgray/30 rounded-sm px-3 py-4">
        <span className="mx-2 relative font-medium text-mywhite before:bg-lightred before:absolute before:block before:-inset-1 before:-skew-y-1">
          <span className="relative">Auto se office gaya 50rs</span>
        </span>{" "}
        → 🚕 Travel ₹50 <span className="text-lightgray">(Transport)</span>
      </div>

      <p className="text-sm text-lightgray italic">
        Just describe what you spent — we’ll handle the rest.
      </p>
    </div>
  );
}
