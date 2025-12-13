const SocialIcon: React.FC<{ Icon: React.ElementType, href: string, color: string }> = ({ Icon, href, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-3xl ${color} opacity-70 hover:opacity-100 transition duration-300 transform hover:scale-110`}
    >
        <Icon />
    </a>
);

export default SocialIcon