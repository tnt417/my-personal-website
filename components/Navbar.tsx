import ImageLinkButton from "./ImageLinkButton";

interface Link {
    label: string;
    link: string;
    new_tab: boolean;
}

const Navbar : React.FC = () => {

    const steamImg = '/images/Steam_icon_logo.png'
    const ghImg = '/images/github-mark-white.png'
    const inImg = '/images/In-White-96@2x.png'
    const ytImg = '/images/yt_icon_mono_dark.png'

    const links : Link[] = [
        {label: "Gallery", link: "/gallery", new_tab: false},
        // {label: "About Me", link: "/about-me", new_tab: false},
        // {label: "Blog", link: "/blog", new_tab: false},
        {label: "Resume", link: "https://drive.google.com/file/d/12Yj569D7LMume7SGuJ4w5XRSDCq-P1nq/view?usp=sharing", new_tab: true}
        ];

    const linkItems = links.map((val) => {
        return <li key={val.link} className="transition-transform duration-500 hover:scale-110">
            <a href={val.link} target={val.new_tab ? "_blank" : ""}>{val.label}</a>
        </li>
    });

    return (
        <nav className="w-full h-12 flex items-center justify-center border-[#DFA6EF] border-opacity-50 border-b mb-4">
            <ul className="justify-center items-center flex space-x-4">
                {linkItems}
            </ul>
            <ul className="absolute right-4 top-2 items-center flex space-x-4">
                <li>
                    <ImageLinkButton href="https://store.steampowered.com/app/2250460/Knightward/" src={steamImg} alt="My Button" />
                </li>
                <li>
                    <ImageLinkButton href="https://github.com/tnt417" src={ghImg} alt="My Button" />
                </li>
                <li>
                    <ImageLinkButton href="https://www.linkedin.com/in/tony-ruth/" src={inImg} alt="My Button" />
                </li>
                <li>
                    <ImageLinkButton href="https://www.youtube.com/@tonydev6065" src={ytImg} alt="My Button" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;