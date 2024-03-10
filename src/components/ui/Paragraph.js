export const Paragraph = ({children, className = ""}) => {
	return (
		<p className={`${className} sm:text-base md:text-lg text-highLight1`}>
			{children}
		</p>
	);
}
