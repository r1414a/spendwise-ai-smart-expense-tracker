export default function Calendar({handleDateClick,beforeDateInString}) {
  const today = new Date();
  const maxDateObj = new Date(today);
  maxDateObj.setDate(maxDateObj.getDate() - 7);
  const maximum = maxDateObj.toISOString().split("T")[0];
  const minDateObj = new Date(today);
  minDateObj.setMonth(minDateObj.getMonth() - 4);
  minDateObj.setDate(1);
  const minimum = minDateObj.toISOString().split("T")[0];

  // console.log("maximum and minimum date", maximum, minimum)

  return (
    <>
      <div className="relative max-w-sm">
        {/* <div className="absolute right-3 md:right-3.5 top-3 md:top-3.5 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div> */}
        <input
          id="default-datepicker"
          name="before"
          type="date"
          value={beforeDateInString}
          onChange={(e) => handleDateClick(e,e.target.valueAsDate)}
          className="bg-lightblue border border-lightgray/40 text-gray text-sm rounded-sm block w-36 h-10 sm:h-12 px-3 placeholder:text-gray cursor-pointer"
          placeholder="Select date"
          min={minimum}
          max={maximum}
        />
      </div>
    </>
  );
}
