import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control } from 'react-hook-form'
import { FormFieldType } from './forms/PatientForm'
import Image from 'next/image'

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType
    placeholder?: string,
    label?: string,
    imgSrc?: string,
    imgAlt?: any,
    name: string
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?:React.ReactNode,
    renderSkeleton?: (field:any) => React.ReactNode,
}

const RenderField = ({ field, props}: {field: any; props: CustomProps}) => {
    const { fieldType, imgAlt, imgSrc, placeholder } = props;
    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                    {imgSrc && (
                        <Image 
                            height={24}
                            width={24}
                            src={imgSrc}
                            alt={imgAlt}
                            className='ml-2'
                        />
                    )}
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            {...field}
                            className='shad-input border-0'
                        />
                    </FormControl>
                </div>
            )
         
        case FormFieldType.PHONE_INPUT:
            return (
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                {imgSrc && (
                    <Image 
                        height={24}
                        width={24}
                        src={imgSrc}
                        alt={imgAlt}
                        className='ml-2'
                    />
                )}
                <FormControl>
                    <Input 
                        placeholder={placeholder}
                        {...field}
                        className='shad-input border-0'
                    />
                </FormControl>
            </div>
            )
    }
    return (
        <Input 
            type='text'
            placeholder='John Doe'
           
        />
    )
}

const CustomFormField = (props: CustomProps) => {
    const {control, fieldType, name, imgAlt, imgSrc, label, placeholder} = props;
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className='flex-1'>
        {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>
                {label}
            </FormLabel>
        )}

        <RenderField field={field} props={props}/>

        <FormMessage className='shad-error' />

      </FormItem>
    )}
  />
  )
}

export default CustomFormField