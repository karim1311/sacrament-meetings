import NavLinks from "@/components/NavLinks"

export default function Header() {
    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    
    return (
        <header className='bg-blue-600 text-white py-4 shadow-md'>
            <div 
                id='header-title' 
                className='text-2xl font-bold'
            >
                Mirador Ward - {date}
            </div>
            
            <nav className='max-w-4xl mx-auto px-4 flex justify-between items-center' aria-label="Primary navigation">
                <NavLinks />
            </nav>
        </header>
    )
}