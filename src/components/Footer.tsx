const Footer = () => {
    
    return (
        <div className="bg-red-500 py-10 rounded-lg mb-5">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white font-bold tracking-tight">
                <span className="text-3xl ml-4">FastFood.com</span>
                <span className="flex gap-4">    
                    <span>Privacy Policy</span>
                    <span>Terms of Services</span>
                </span>
            </div>
        </div>
    )
}

export default Footer;