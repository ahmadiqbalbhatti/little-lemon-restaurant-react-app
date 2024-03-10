const FooterSectionItem = ({itemTitle, children}) => {
	return (
		<div className={"flex flex-col gap-1 text-highLight1 pb-6 px-8 sm:px-0"}>
			<h6 className={"font-serif text-lg md:text-2xl font-bold"}>{itemTitle}</h6>
			{children}
		</div>
	)
}

export default FooterSectionItem;
