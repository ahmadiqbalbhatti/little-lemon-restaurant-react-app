export const PrimaryButton = ({children, className = "", type}) => {
	return (
		<button
			type={type}
			className={`${className} bg-primary1 hover:bg-highLight1 w-fit py-3 px-8 rounded-2xl transition-colors duration-300`}>
			{children}
		</button>
	);
}
