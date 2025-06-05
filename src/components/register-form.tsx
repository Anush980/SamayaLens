import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Google } from "@deemlol/next-icons";
import Link from "next/link";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      className={cn(
        "flex flex-col gap-6 bg-gray-900 p-8 rounded-lg shadow-lg max-w-md mx-auto border border-gray-700",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-extrabold text-white">Welcome new User!</h1>
        <p className="text-gray-400 text-sm">
          Create your New Account to get started
        </p>
      </div>

      {/* Inputs and Buttons */}
      <div className="grid gap-6">
        {/* Email */}
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-gray-300">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="me@example.com"
            required
            className="border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
           
          </div>
          <Input
            id="password"
            type="password"
            required
            className="border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
         <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
           
          </div>
          <Input
            id="confirmPassword"
            type="confirmPassword"
            required
            className="border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Login button */}
        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white border border-indigo-600 hover:bg-indigo-700 transition"
        >
          Register
        </Button>

        {/* Divider */}
        <div className="relative text-center text-sm text-gray-500 before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:border-t before:border-gray-700 before:-translate-y-1/2">
          <span className="relative z-10 bg-gray-900 px-2">Or continue with</span>
        </div>

        {/* GitHub button */}
        <Button
          variant="outline"
          className="w-full flex justify-center items-center gap-2 border border-gray-400 text-black hover:bg-gray-600"
        >
          <Google/>
         
          Login with Google
        </Button>
      </div>

      {/* Signup link */}
      <div className="text-center text-sm text-gray-400">
        ALready got an account?{" "}
        <Link href="/login" className="underline underline-offset-4 text-indigo-400 hover:text-indigo-500">
          Log In
        </Link>
      </div>
    </form>
  )
}
