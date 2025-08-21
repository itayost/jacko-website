import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

const Button: FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-blue-primary hover:bg-blue-dark text-white',
    secondary: 'border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white',
    accent: 'bg-yellow-accent text-black hover:bg-yellow-dark',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  return (
    <button
      className={cn(
        'rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button