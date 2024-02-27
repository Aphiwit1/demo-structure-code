import { twJoin, twMerge } from 'tailwind-merge'
// import { EyeIcon, EyeSlashIcon } from '@components/Icons/Icons.tsx'
import { withInputField } from './withInputField'
import { InputFieldProps } from './interface'

import { Controller } from 'react-hook-form'

const InputField = ({
  name,
  control,
  rules,
  disabled,
  type,
  label,
  className,
  inputClassName,
  suffixIcon,
  placeholder,
  required = false,
  maxLength,
  labelClassName,
  isPasswordType,
  handleTogglePassword,
  customOnChanged,
  shouldUnregister = false,
}: InputFieldProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    shouldUnregister={shouldUnregister}
    render={({ field, fieldState: { error } }) => (
      <div className={twMerge('inline-block w-full', className)}>
        <div className='relative flex-wrap w-full items-stretch'>
          {label && (
            <div className='flex flex-row space-x-2'>
              <div
                className={twMerge(
                  'text-base mb-[8px] font-bold text-black',
                  labelClassName
                )}
              >
                {label} {required && <span className='text-red'>*</span>}
              </div>
            </div>
          )}
          <label className='relative flex items-center'>
            <input
              {...field}
              value={field.value || ''}
              className={`
                  relative
                  w-full h-[40px] bg-gray-secondary p-[10px] text-black 
                  border-2 border-gray-300 rounded-[5px] 
                  focus:border-blue
                disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed 
                placeholder-gray-400  placeholder:text-xs
                  ${error && 'border-red border'}
                  ${suffixIcon && 'pr-[36px]'}
                  ${inputClassName}
                `}
              disabled={disabled}
              type={type}
              autoComplete={type === 'password' ? 'name' : undefined}
              placeholder={placeholder}
              maxLength={maxLength}
              onChange={event => {
                const targetValue = event.target.value
                if (type === 'number') {
                  const parseNumValue = parseFloat(targetValue)
                  if (Number.isNaN(parseNumValue)) {
                    field.onChange(null)
                  } else {
                    field.onChange(parseNumValue)
                  }

                  customOnChanged && customOnChanged()
                  return
                }

                field.onChange(targetValue || null)
                customOnChanged && customOnChanged()
              }}
            />

            {isPasswordType && (
              <div
                className={twJoin(
                  `absolute cursor-pointer`,
                  suffixIcon ? 'right-6' : 'right-3'
                )}
                onClick={handleTogglePassword}
              >
                {/* {type === "password" ? <EyeSlashIcon /> : <EyeIcon />} */}
              </div>
            )}
            {suffixIcon && (
              <div className={`absolute right-3 ${disabled && 'opacity-30'}`}>
                {suffixIcon}
              </div>
            )}
          </label>
          {error && (
            <div className='mt-[8px] text-xs text-red top-full'>
              {error.message}
            </div>
          )}
        </div>
      </div>
    )}
  />
)

const WrappedComponent = withInputField(InputField)
export default WrappedComponent
