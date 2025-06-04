import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
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
        <h1 className="text-3xl font-extrabold text-white">Welcome Back!</h1>
        <p className="text-gray-400 text-sm">
          Please login to access your account.
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
            <a
              href="#"
              className="ml-auto text-sm text-indigo-400 underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Login button */}
        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white border border-indigo-600 hover:bg-indigo-700 transition"
        >
          Login
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7
                 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07
                 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
                 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267
                 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24
                 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81
                 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24
                 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
          Login with GitHub
        </Button>
      </div>

      {/* Signup link */}
      <div className="text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4 text-indigo-400 hover:text-indigo-500">
          Sign up
        </a>
      </div>
    </form>
  )
}
