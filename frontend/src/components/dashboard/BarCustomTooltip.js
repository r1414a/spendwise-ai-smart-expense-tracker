export default function BarCustomTooltip({ active, payload, label }){
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // console.log(payload,label);
    if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip space-y-1" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
            <p className="label text-xs">{`${label}-${currentMonth + 1}-${currentYear}`}</p>
            {payload.map((entry, index) => (
              <p className="text-xs" key={`item-${index}`} style={{ color: entry.color }}>
                {`${entry.name}: ₹${entry.value}`}
              </p>
            ))}
          </div>
        );
      }
      return null;
}