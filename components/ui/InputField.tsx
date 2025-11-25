'use client';

type InputFieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
};

export default function InputField({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-400 shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
      />
    </div>
  );
}
