const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => (
  <section className='bg-gray-50 '>
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      {children}
    </div>
  </section>
)

export default AuthenticationLayout
