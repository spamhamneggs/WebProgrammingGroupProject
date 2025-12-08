export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={"rounded border-gray-300 text-nature-700 shadow-sm focus:ring-nature-500 " +
                className}
        />
    );
}
