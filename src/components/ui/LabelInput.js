const LabelInput = ({label, inputId, type, value, setValue, required}) => {
	return (
		<div className={"flex flex-col pb-4"}>
			<label htmlFor={inputId}
			       className={"font-sans text-base sm:text-lg md:text-xl font-bold"}>{label}</label>
			<input type={type} id={inputId} value={value} required={required}
			       onChange={(event) => setValue(event.target.value)}
			       className={"border-2 rounded-2xl hover:border-primary1 focus-within:border-primary1 border-primary2  text-base sm:text-lg md:text-xl py-2 px-6"}/>
		</div>
	)
}

export default LabelInput;
