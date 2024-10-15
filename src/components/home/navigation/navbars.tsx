import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = async () => {


    return (
        <header className="px-4 h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-lg font-medium">
                                WeDAA
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="#" className="hover:text-foreground/80 text-sm">Product</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">Features</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">Documentation</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">Contact Us</Link>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                                <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                                    Login
                                </Link>
                                <Link href="/sign-up" className={buttonVariants({ size: "lg", className: "hidden md:flex" })}>
                                    Start free trial
                                </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Navbar
