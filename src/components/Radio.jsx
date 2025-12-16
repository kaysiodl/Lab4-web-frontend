export function Radio({min, max, onChange, value, label}) {
    const numbers = [];

    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }


    return (
        <div id="radio">
            {numbers.map((num) => (
                <label key={label}>
                    <input
                        type="radio" value={num} checked={value === num} onChange={() => onChange(num)}/>
                    {num}
                </label>
            ))}
        </div>
    )
}