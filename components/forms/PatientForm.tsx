"use client"
import React from 'react'
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import CustomFormField from '../CustomFormField'

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT='phoneInput',
  SELECT='select',
  SKELETON = 'skeleton',
  DATE_PICKER = 'datePicker',
  CHECKBOX = 'checkbox'
}


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const PatientForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className='mb-12 space-y-4'>
        <h1 className='header'>Hi there 👋</h1>
        <p className='text-dark-700'>Schedule your first appointment</p>
      </section>
      
      <CustomFormField 
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="name"
        label="Full Name"
        placeholder="John Doe"
        imgSrc="/assets/icons/user.svg"
        imgAlt="user"
      />

<CustomFormField 
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="email"
        label="Email"
        placeholder="johndoe@gmail.com"
        imgSrc="/assets/icons/email.svg"
        imgAlt="email"
      />

<CustomFormField 
        control={form.control}
        fieldType={FormFieldType.PHONE_INPUT}
        name="phone"
        label="Phone Number"
        placeholder="(454)  123-5678"
        
      />

      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}


export default PatientForm