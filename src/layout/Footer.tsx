import {APP_VERSION} from "@/version.ts";

const Footer = () => {
    const getCurrentYear = () => new Date().getFullYear();
    const version = APP_VERSION

    return (
        <footer className="bg-[#F4E1C1] text-(--color-background) p-2">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {getCurrentYear()}&nbsp;
                    <a
                        href="https://humanjuan.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-(--color-accent) underline underline-offset-2"
                    >
                        HumanJuan.
                    </a> Open-source under the MIT License. Crafted with coffee and code.
                    <span> v{version}</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;