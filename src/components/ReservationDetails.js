import {Paragraph} from "./ui/Paragraph";

const ReservationDetails = ({data}) => {
	console.log("Details page : ", data)
	return (
		<div className={"bg-primary1 rounded-2xl py-8 px-6"}>
			<h3
				className={"pb-4 text-highLight2 text-2xl md:text-3xl  lg:text-4xl font-bold font-serif text-center"}>
				Review Reservation Details
			</h3>

			<div className={"pt-2"}>
				<div className={"grid grid-cols-2"}>
					<h4
						className={"font-bold font-serif text-xl md:text-2xl  lg:text-2xl text-primary2"}>Your
						Name: </h4>
					<Paragraph className={"text-highLight2"}>{data.name}</Paragraph>
				</div>
				<div className={"grid grid-cols-2"}>
					<h4
						className={"font-bold font-serif text-xl md:text-2xl  lg:text-2xl text-primary2"}>Your
						Email: </h4>
					<Paragraph className={"text-highLight2"}>{data.email}</Paragraph>
				</div>
				<div className={"grid grid-cols-2"}>
					<h4
						className={"font-bold font-serif text-xl md:text-2xl  lg:text-2xl text-primary2"}>Your
						Phone #: </h4>
					<Paragraph
						className={"text-highLight2"}>{data.phoneNumber}</Paragraph>
				</div>
				<div className={"grid grid-cols-2"}>
					<h4
						className={"font-bold font-serif text-xl md:text-2xl  lg:text-2xl text-primary2"}>Due
						Date: </h4>
					<Paragraph
						className={"text-highLight2"}>{data.chooseDate}</Paragraph>
				</div>
				<div className={"grid grid-cols-2"}>
					<h4
						className={"font-bold font-serif text-xl md:text-2xl  lg:text-2xl text-primary2"}>Reservation
						Time: </h4>
					<Paragraph
						className={"text-highLight2"}>{data.reservationTime}</Paragraph>
				</div>
				<div className={"grid grid-cols-2"}>
					<h4
						className={"font-bold font-serif text-xl md:text-2xl  lg:text-2xl text-primary2"}>Number
						of Guests: </h4>
					<Paragraph
						className={"text-highLight2"}>{data.numberOfGuests}</Paragraph>
				</div>
				<div className={"grid grid-cols-2"}>
					<h4
						className={"font-bold font-serif text-xl md:text-2xl  lg:text-2xl text-primary2"}>Occasion: </h4>
					<Paragraph
						className={"text-highLight2"}>{data.occasion}</Paragraph>
				</div>

			</div>

		</div>
	)
}

export default ReservationDetails;
