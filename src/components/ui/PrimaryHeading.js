export const PrimaryHeading = ({children, className}) => {
	return (
		<h2
			className={`${className} text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold font-serif text-primary1`}>
			{children}
		</h2>
	)
}
