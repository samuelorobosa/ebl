export default function ErrorContainer ({children}:any){
    return  <span className="text-red-500 inline-block mt-1">
                {children}
            </span>
}