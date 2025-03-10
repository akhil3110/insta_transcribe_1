
const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full w-full flex items-center justify-center bg-[#121417]">
            {children}
        </div>
     );
}
 
export default AuthLayout;