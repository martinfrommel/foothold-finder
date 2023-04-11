import { useAuth } from 'src/auth'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <div className="flex flex-row items-center justify-center bg-error text-center">
        <div>Is authenticated: {JSON.stringify(isAuthenticated)}</div>
      </div>
      {children}
    </>
  )
}

export default AdminLayout
