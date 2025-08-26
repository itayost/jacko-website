// src/components/sections/contact/FormField.tsx
'use client'

interface FormFieldProps {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  required?: boolean
  placeholder?: string
  dir?: 'ltr' | 'rtl'
  options?: { value: string; label: string }[]
  rows?: number
  as?: 'input' | 'textarea' | 'select'
  className?: string
}

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  dir,
  options,
  rows = 4,
  as = 'input',
  className = ''
}: FormFieldProps) {
  const baseClassName = "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
  const fullClassName = `${baseClassName} ${className}`

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && '*'}
      </label>
      
      {as === 'input' && (
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={fullClassName}
          placeholder={placeholder}
          dir={dir}
        />
      )}
      
      {as === 'textarea' && (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`${fullClassName} resize-none`}
          rows={rows}
          placeholder={placeholder}
          required={required}
        />
      )}
      
      {as === 'select' && options && (
        <select
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={fullClassName}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}