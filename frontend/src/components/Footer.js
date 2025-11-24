import AboutLinks from "./footer/AboutLinks";

export default function Footer() {
  return (
    <footer className=" mt-32 bg-white shadow-[0_-5px_35px_rgba(241,245,249,1)] border border-lightgray/40 w-full py-3 px-4">
      <div className="w-full md:max-w-screen-xl mx-0 md:mx-auto flex justify-center md:justify-between">
        <p className="text-gray md:text-center">
          <span className="text-lightred font-bold">SpendWise</span> - AI smart
          Expense Tracker @ 2026
        </p>
        <AboutLinks/>
        
      </div>
    </footer>
  );
}
