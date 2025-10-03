"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"
 
const formSchema = z.object({
  accountType: z.enum(["teacher", "student"]),
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export default function SignUp() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountType: "teacher",
      fullName: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex flex-row gap-8 font-poppins h-full  p-8 items-center justify-center">
      {/* Left Side - Dark Card */}
      <Card className="bg-[var(--brand-dark)] text-white shadow-lg w-full max-w-md rounded-2xl overflow-hidden">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-6">
            <Image
              src="/Logo.svg"
              alt="Skool Aid Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />    
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight">
                This is The Future<br />
                Of Education
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover endless functionalities on where services are streamlined to favor both the students & the teachers of Rwanda. Discover Skool-Aid with us!
              </p>
            </div>
            
            {/* Quote Section */}
            <div className="bg-purple-700/50 rounded-xl p-4 space-y-3">
              <p className="text-sm text-gray-200 italic">
                &ldquo;Education requires heavy investment and returns are long term and not immediate. But there is no way around this.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-lg overflow-hidden">
                  <Image
                    src="/avatar.jpeg"
                    alt="H.E Paul Kagame"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">H.E Paul Kagame</p>
                  <p className="text-xs text-gray-300">President of Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Right Side - Registration Form */}
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            Create your account with us below
          </h2>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Account Type Selection */}
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-sm font-medium text-gray-700">
                    You&apos;re creating an account as?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-3"
                    >
                      <div className="flex-1">
                        <label
                          htmlFor="teacher"
                          className={`flex items-center gap-3 p-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                            field.value === "teacher"
                              ? "bg-purple-50 border-purple-300 text-purple-700"
                              : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <RadioGroupItem value="teacher" id="teacher" />
                          As a Teacher
                        </label>
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="student"
                          className={`flex items-center gap-3 p-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                            field.value === "student"
                              ? "bg-purple-50 border-purple-300 text-purple-700"
                              : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <RadioGroupItem value="student" id="student" />
                          As a Student
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Full Name Field */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Manzi Conrad" 
                      className="h-12 rounded-lg border-gray-200 focus-visible:!border-purple-500 focus-visible:!ring-purple-100"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}  
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="Enter your email address" 
                      className="h-12 rounded-lg border-gray-200 focus-visible:!border-purple-500 focus-visible:!ring-purple-100 "
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type="password" 
                        placeholder="Create your password" 
                        className="h-12 rounded-lg border-gray-200 focus-visible:!border-purple-500 focus-visible:!ring-purple-100  pr-10"
                        {...field} 
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-12 bg-[var(--brand-orange)] hover:bg-orange-600 text-white font-medium rounded-lg mt-6"
            >
              Log in
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
