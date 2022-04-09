//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Group - 21
// Sanjay Ramesh : 210811700
// Ritika Gupta : 210487158
// Adity Ronak Shah: 210841431
// Bineeta Kachhap : 210619025
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Part1: b)	Details of your MongoDB schema. This includes details of the documents to be stored in your system and the 
// collections used to store them. This should include identifying any array or embedded document structures in your design.
// You should also describe relationships between documents, e.g. one to many, many to many etc. 
// This information should be provided in the form of text giving the details of documents and the fields to be stored. 
// You can also supplement this text with a diagram if you find that useful. You should also provide a textual explanation
// of the choices  and decisions you made during the design process.
// Part1: c)	A listing of the MongoDB code used to implement your MongoDB schema 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

1. Enter into the Database:
use qmulairline;


2. Clear the collections:
db.employees.drop();
db.employeeCode.drop();
db.planes.drop();
db.airports.drop();
db.flightSchedule.drop();
db.customers.drop();
db.bookings.drop();


3. Schema for EmployeeCode Collection:
db.createCollection("employeeCode", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "code_id", "employeeType", "standardSalary" ],
		 properties: {
			code_id: { bsonType: "string" },
			employeeType: { bsonType: "string", enum:["Booking Clerks", "Maintenance Staff", "Pilot", "Cabin Crew"]},
			standardSalary: { bsonType: "double" }
		 }
	}
	}
})


4. Schema for Planes Collection: 
db.createCollection("planes", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "plane_id", "make", "model", "state", "capacity", "flyingRange", "unit"],
		 properties: {
			plane_id: { bsonType: "string" },
			make: { bsonType: "string" },
			model: { bsonType: "string" },
			serviceTime: { bsonType: "double" },
			state: {
				bsonType: "object",
				required: [ "status"],
				properties:{
					status: { bsonType: "string", enum : ["working","in-repair","upgraded"] },
					repairCost: { bsonType: "double" }
				}
			},
			capacity: { bsonType: "double" },
			flyingRange: { bsonType: "double" },
			unit: { enum : ["km","miles"], bsonType: "string" }
		 }
	}
	}
})


5. Schema for Airports Collection 
db.createCollection("airports", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "city_id", "city", "airportCost"],
		 properties: {
			city_id: { bsonType: "string" },
			city: { bsonType: "string" },
			airportCost: {
				bsonType: "object",
				required: [ "refuelCost", "maintainanceCost", "hourlyStopRate"],
				properties:{
					refuelCost: { bsonType: "double" },
					maintainanceCost: { bsonType: "double" },
					hourlyStopRate: { bsonType: "double" }
				}
			}
		 }
	}
	}
})


6. Schema for Bookings Collection: 
db.createCollection("bookings", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "book_id", "flight_id", "customer_id", "paymentMode", "bookingDate", "bookingAmount"],
		 properties: {
			book_id: { bsonType: "string" },
			flight_id: { bsonType: "array", minItems: 1, items: { bsonType: "string" }},
			customer_id: { bsonType: "string" },
			paymentMode: { bsonType: "string" },
			bookingDate: { bsonType: "date" },
			bookingAmount: { bsonType: "double" }
		 }
	}
	}
})


7. Schema for Customers Collection: 
db.createCollection("customers", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "customer_id", "firstName", "lastName", "contactNumber","address"],
		 properties: {
			customer_id: { bsonType: "string" },
			title: { bsonType: "string" },
			firstName: { bsonType: "string" },
			lastName: { bsonType: "string" },
			email: { bsonType: "string" },
			contactNumber: { bsonType: "double" },
			address: {
				bsonType: "object",
				required: [ "buildingNo", "street", "city" ,"zipcode"],
				properties:{
					buildingNo: { bsonType: "double" },
					street: { bsonType: "string" },
					city: { bsonType: "string" },
					zipcode: { bsonType: "string" }
				}
			}
		 }
	}
	}
})


8. Schema for FlightSchedule Collection: 
db.createCollection("flightSchedule", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "flight_id", "plane_id", "departureCity", "arrivalCity", "departureTime", "arrivalTime","employee_list"],
		 properties: {
			flight_id: { bsonType: "string" },
			plane_id: { bsonType: "string" },
			departureCity: { bsonType: "string" },
			arrivalCity: { bsonType: "string" },
			departureTime: { bsonType: "date" },
			arrivalTime: { bsonType: "date" },
			employee_list: {
				bsonType: "array",
				minItems: 3,
				items: { bsonType: "string" }
			}
		}
	}
	}
})


9. Schema for Employees Collection: 
db.createCollection("employees", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "employee_id", "firstName", "lastName", "email", "contactNumber","address","joiningDate", "employeeType"],
		 properties: {
			employee_id: { bsonType: "string" },
			firstName: { bsonType: "string" },
			lastName: { bsonType: "string" },
			email: { bsonType: "string" },
			contactNumber: { bsonType: "double" },
			address: {
				bsonType: "object",
				required: [ "buildingNo", "street", "city" ,"zipcode"],
				properties:{
					buildingNo: { bsonType: "double" },
					street: { bsonType: "string" },
					city: { bsonType: "string" },
					zipcode: { bsonType: "string" }
				}
			},
			joiningDate: { bsonType: "date" },
			lastWorkingDate: { bsonType: "date" },
			employeeWorkSchedule: {
				bsonType: "array",
				items: {
					bsonType: "object",
					required: [ "date", "hours","salary"],
					properties:{
						date: { bsonType: "date" },
						hours: { bsonType: "double" },
						salary: { bsonType: "double" }
					}
				}
			},
			employeeType: {
				bsonType: "object",
				required: ["eType"],
				properties:{
					eType: { bsonType: "string" },
					fitToFly: { bsonType: "bool" }
				}
			}
		}
	}
	}
})
