export const H1 = ({children, className=""}) => {
	return (
		<h1
			className={`${className} text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold font-serif text-primary1`}>
			{children}
		</h1>)
}
