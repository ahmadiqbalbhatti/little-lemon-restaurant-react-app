import LabelInput from "./LabelInput";
import LabelSelect from "./LabelSelect";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ReservationDetails from "../ReservationDetails";

const ReservationForm = () => {
	const [chooseDate, setChooseDate] = useState("");
	const [reservationTime, setReservationTime] = useState("17:00");
	const [numberOfGuests, setNumberOfGuests] = useState("");
	const [occasion, setOccasion] = useState("Birthday");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const [showFields, setShowFields] = useState(1);

	const [formData, setFormData] = useState({});


	const navigate = useNavigate();

	let availableTimes = ["17:00", '18:00', '19:00', '20:00', '21:00', '22:00'];


	function handleChooseDate(e) {
		setChooseDate(e);
	}

	function handleReservationTime(e) {
		setReservationTime(e);
	}

	function handleGuests(e) {
		setNumberOfGuests(e);
	}

	function handleOccasion(e) {
		setOccasion(e);
	}

	function handleName(e) {
		setName(e);
	}

	function handleEmail(e) {
		setEmail(e);
	}

	function handlePhoneNumber(e) {
		setPhoneNumber(e);
	}

	function handleFormData() {
		const data = {
			name,
			email,
			phoneNumber,
			chooseDate,
			reservationTime,
			numberOfGuests,
			occasion
		}

		setFormData(data)
		setShowFields(3);
	}

	function handleSubmit(event) {
		event.preventDefault();


		localStorage.setItem("reservationData", JSON.stringify(formData));

		setName("");
		setEmail("");
		setPhoneNumber("");
		setNumberOfGuests("");
		setChooseDate("");
		setReservationTime("17:00");
		setOccasion("Birthday");
		setShowFields(3)

		navigate("/confirm")
	}


	const resData = JSON.parse(localStorage.getItem("reservationData"));

	availableTimes = availableTimes.filter(time => time !== resData?.reservationTime);
	return (<form className={"flex flex-col px-8 "} onSubmit={handleSubmit}>
		<div className={showFields === 1 ? "block" : "hidden"}>
			<LabelInput label={"Choose date"} inputId={"res-date"} type={"date"}
			            setValue={handleChooseDate} value={chooseDate}
			            required={true}/>

			<LabelSelect inputId={"res-time"} label={"Choose time"} required={true}
			             setValue={handleReservationTime} value={reservationTime}>
				{availableTimes.map(availableTime => (

					<option key={availableTime}>{availableTime}</option>))}
			</LabelSelect>

			<LabelInput label={"Number of Guests"} inputId={"guests"} required={true}
			            type={"number"} value={numberOfGuests}
			            setValue={handleGuests}/>

			<LabelSelect label={"Occasion"} inputId={"occasion"} value={occasion}
			             required={true}
			             setValue={handleOccasion}>
				<option>Birthday</option>
				<option>Anniversary</option>
			</LabelSelect>
		</div>

		<div className={showFields === 2 ? "block" : "hidden"}>
			<LabelInput label={"Full Name"} inputId={"name"} value={name}
			            required={true}
			            type={"text"}
			            setValue={handleName}/>
			<LabelInput label={"Email"} inputId={"email"} value={email}
			            required={true}
			            type={"email"}
			            setValue={handleEmail}/>
			<LabelInput label={"Phone Number"} inputId={"phoneNumber"} required={true}
			            value={phoneNumber}
			            type={"tel"}
			            setValue={handlePhoneNumber}/>
		</div>


		{showFields === 1 && <button
			className={"bg-primary1 hover:bg-highLight1 py-3 px-8 rounded-2xl transition-colors duration-300 w-full text-center mt-4"}
			onClick={() => setShowFields(2)}>
			Next
		</button>}

		{showFields === 2 &&
			<div className={"flex flex-row justify-between items-center gap-4 mt-4"}>
				<button
					className={"border-2 border-primary1 hover:bg-primary1 py-3 px-8 rounded-2xl transition-colors duration-300 w-full text-center"}
					onClick={() => setShowFields(1)}>Back
				</button>

				<button
					className={"border-2 border-primary1 bg-primary1 hover:bg-highLight1 py-3 px-8 rounded-2xl transition-colors duration-300 w-full text-center"}
					onClick={handleFormData}>Next
				</button>
			</div>}

		{showFields === 3 && <div>
			<ReservationDetails data={formData}/>
			<div className={"flex flex-row justify-between items-center gap-4 mt-4"}>
				<button
					type={"button"}
					className={"border-2 border-primary1 hover:bg-primary1 py-3 px-8 rounded-2xl transition-colors duration-300 w-full text-center"}
					onClick={() => setShowFields(2)}>Back
				</button>

				<button
					type={"submit"}
					className={"border-2 border-primary1 bg-primary1 hover:bg-highLight1 py-3 px-8 rounded-2xl transition-colors duration-300 w-full text-center"}
					onClick={() => {}}>Confirm
				</button>
			</div>
		</div>}


	</form>)
}

export default ReservationForm;
