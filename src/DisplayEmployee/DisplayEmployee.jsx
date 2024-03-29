import React from "react";

const DisplayEmployee = ({ employee }) => {
	return (
		<div className="DisplayEmployee">
			<img src={employee.picture.medium} alt={employee.name.last} />
			<ul>
				<li>Gender : {employee.gender}</li>
				<li>
					Name : {employee.name.title} {employee.name.last}{" "}
					{employee.name.first}
				</li>
				<li>Email : {employee.email}</li>
				<li>
					Location : {employee.location.street}{" "}
					{employee.location.postcode} {employee.location.city}
				</li>
			</ul>
		</div>
	);
};

export default DisplayEmployee;
