//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Group - 21
// Sanjay Ramesh : 210811700
// Ritika Gupta : 210487158
// Adity Ronak Shah: 210841431
// Bineeta Kachhap : 210619025
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Part1: e) A set of 12 MongoDB queries to extract information from the system. You should aim to use a good range of MongoDB  
// language constructs to demonstrate your knowledge of the language. 
// These should include several examples of the use of the MongoDB Aggregate Framework. 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


1. List of existing Employees name and contact number:
db.employees.aggregate(
	{$match:{"lastWorkingDate":{$exists:false}}},
	{$project: {
	"_id":0, 
	name: {$concat: [ "$firstName", " ", "$lastName"]}, 
	number: "$contactNumber", 
	address: {$concat: [ {$toString:"$address.buildingNo"}, " ", "$address.street",", ","$address.city", "-", "$address.zipcode"]}}}
)


2. Customers with doctoral degree:
db.customers.find({title:"Dr."},{_id:false, customer_id:true, firstName:true, lastName:true, email:true}).sort({firstName:1}).limit(10)


3. Booking ids with more than one flight.
db.bookings.find({$where: "this.flight_id.length > 1"}).forEach(function(booking){
	print("Booking Ids: "+ booking.book_id+ ", "+"Flight List: "+ booking.flight_id);
});


4. Available flight for dates in November (16/17) 
db.flightSchedule.aggregate(
	{ $project: {
	  year: {$year: "$departureTime"},
	  month: {$month: "$departureTime"},
	  dayOfMonth: {$dayOfMonth: "$departureTime"},
	  departureCity: "$departureCity",
	  arrivalCity: "$arrivalCity"
	}},
	{ $lookup: {from: "airports", localField: "departureCity", foreignField: "city_id", as: "departureAirport"}},
	{ $unwind: "$departureAirport"},
	{ $lookup: {from: "airports", localField: "arrivalCity", foreignField: "city_id", as: "arrivalAirport"}},
	{ $unwind: "$arrivalAirport"},
	{ $group: {
	  _id: { date: {$concat: [ {$toString:"$year"}, "-", {$toString:"$month"},"-", {$toString:"$dayOfMonth"}] }},
	  flights: { $push: { $concat: [ "$departureAirport.city", " - ", "$arrivalAirport.city",]}}
	}
  }
)


5. Top 5 empolyee with highest salary. 
db.employees.aggregate(
	{ $match: {employeeWorkSchedule: {$exists: true}}},
	{ $project: { 
		name : {$concat:["$firstName"," ","$lastName"]},
		employeeWorkSchedule: 1 }},
	{$unwind: "$employeeWorkSchedule"},
	{ $group: {
		_id: "$name", salary: {$sum:"$employeeWorkSchedule.salary"}}},
	{ $sort: {"salary": -1}},
	{ $limit: 5}
)


6. List of employees group by city.
db.employees.aggregate(
	{$match: {address: {$exists: true}}},
	{ $project: { 
		name : {$concat:["$firstName"," ","$lastName"]},
		address: 1 }},
	{ $group: {
		_id: "$address.city",  employeeList : {$push:"$name"} }}
)



7. Top 10 oldest eployees by joining date(The find query has been written to do further for Indexes and explain utility method.)

db.employees.find({"employee_id":{$exists:true}},{employee_id:true, firstName:true, lastName:true, joiningDate:true}).sort({joiningDate:1}).limit(10)

or 

db.employees.aggregate(
	{$match: {joiningDate: {$exists: true}}},
	{ $project: { 
		name : {$concat:["$firstName"," ","$lastName"]},
		joiningDate: 1 }},
	{ $sort: {"joiningDate": 1}},
	{ $limit: 10}
)


8. Customers who travelled on 16/11/2021
db.flightSchedule.aggregate(
	{ $project: {
		year: {$year: "$departureTime"},
		month: {$month: "$departureTime"},
		dayOfMonth: {$dayOfMonth: "$departureTime"},
		flight: "$flight_id"
	}},
	{ $match:{$and: [{"year":{$eq:2021}}, {"month":{$eq:11}}, {"dayOfMonth":{$eq:16}} ]}},
	{ $group: {
		_id: { date: {$concat: [ {$toString:"$year"}, "-", {$toString:"$month"},"-", {$toString:"$dayOfMonth"}] }},
		flights: { $push: "$flight"}}},
	{ $unwind: "$flights"},
	{ $lookup: {from: "bookings", localField: "flights", foreignField: "flight_id", as: "bookings"}},
	{ $unwind: "$bookings"},
	{ $group: { _id: "$bookings.customer_id" }},
	{ $lookup: {from: "customers", localField: "_id", foreignField: "customer_id", as: "customers"}},
	{ $unwind: "$customers"},
	{ $project: {
		_id: "$_id",
		customer: {$concat:["$customers.title"," ","$customers.firstName"," ","$customers.lastName"]}
	}}
)


9. Total Earning of the November Month. 
db.bookings.aggregate(
	{ $group:{
		_id: "$bookingDate",
		customerPayment: {$sum: "$bookingAmount"}
	}},
	{ $lookup: {from: "employees", pipeline: [{$match: {employeeWorkSchedule: {$exists: true}}}], as: "employees"} },
	{ $unwind: "$employees" },
	{ $group:{
		_id: "$customerPayment",
		totalSalary:{ $sum: {$sum:"$employees.employeeWorkSchedule.salary"}}}},
	{ $project:{
		_id: "Profit",
		profitEarned: {$subtract:["$_id","$totalSalary"]}}},
	{ $lookup: {from: "planes", pipeline: [{$match: {"state.status":{$in:["in-repair","upgraded"]}}}], as: "maintainanceCost"}},
	{ $unwind: "$maintainanceCost" },
	{ $group:{
		_id: "$profitEarned",
		maintainanceCost:{$sum:"$maintainanceCost.state.repairCost"}}},
	{ $project:{
		_id: "$profitEarned",
		profitEarned: {$subtract:["$_id","$maintainanceCost"]}
	}},
	{ $lookup: {from: "flightSchedule", pipeline: [{$match: {departureCity: {$exists: true}}}], as: "flightSchedule"}},
	{ $unwind: "$flightSchedule" },
	{ $lookup: {from: "airports", localField: "flightSchedule.departureCity", foreignField: "city_id", as: "airport"}},
	{ $unwind: "$airport"},
	{ $group: {
		_id: "$profitEarned",
		maintainanceCost: {$sum: {$add:["$airport.airportCost.refuelCost", "$airport.airportCost.maintainanceCost", {$multiply:["$airport.airportCost.hourlyStopRate",2]} ]}} }},
	{ $project:{
		_id: "Profit",
		profitEarned: {$subtract:["$_id","$maintainanceCost"]} }}
)


10. Employees working on 17/11/2021
db.flightSchedule.aggregate(
	{ $project: {
		year: {$year: "$departureTime"},
		month: {$month: "$departureTime"},
		dayOfMonth: {$dayOfMonth: "$departureTime"},
		flight: "$flight_id",
		employee_list: "$employee_list"
	}},
	{ $match:{ $and: [{"year":{$eq:2021}},{"month":{$eq:11}},{"dayOfMonth":{$eq:17}} ]}},
	{ $unwind: "$employee_list" },
	{ $group: {
		_id: { $concat: [ {$toString:"$year"}, "-", {$toString:"$month"},"-", {$toString:"$dayOfMonth"}] },
		employee: { $addToSet: "$employee_list"}}},
	{ $unwind: "$employee"},
	{ $lookup: {from: "employees", localField: "employee", foreignField: "employee_id", as: "employees"}},
	{ $unwind: "$employees" },
	{ $project: {"_id":"$_id", Name: {$concat: [ "$employees.firstName", " ", "$employees.lastName"]}, Number: "$employees.contactNumber"}}
)


11. Passenger List who travelled more that one flight.
db.bookings.aggregate(
	{ $project: { 
		book_id: 1,
		customer_id: 1,
		flightCount: { $cond: { if: { $isArray: "$flight_id" }, then: { $size: "$flight_id" }, else: "NA"} }}},
	{ $project :{
		book_id: 1,
		customer_id: 1,
		flightCount: 1,
		isMore: { $cond: {if: {$gt:["$flightCount",1] }, then: true, else: false}} }},
	{ $group: {
		_id: "$isMore", customer_id: { $addToSet: "$customer_id"}}},
	{ $match: { _id: true}},
	{ $lookup: {from: "customers", localField: "customer_id", foreignField: "customer_id", as: "customers"}},
	{ $unwind: "$customers"},
	{ $project: {
		_id: "Flights",
		customer: {$concat:["$customers.firstName"," ","$customers.lastName"]}
	}}
)

12. Top 5 customers with highest expenditure.
db.bookings.aggregate(
	{ $project: { 
		book_id: 1,
		customer_id: 1,
		bookingAmount: 1}},
	{ $sort: {"bookingAmount": -1}},
	{ $limit: 5},
	{ $lookup: {from: "customers", localField: "customer_id", foreignField: "customer_id", as: "customers"}},
	{ $unwind: "$customers"},
	{ $project: {
		_id: "Top5",
		customer: {$concat:["$customers.firstName"," ","$customers.lastName"]},
		address: {$concat: [ {$toString:"$customers.address.buildingNo"}, " ", "$customers.address.street",", ","$customers.address.city", "-", "$customers.address.zipcode"]}}}
)



13. Travel history of each passenger with date, price, flight and travel time deatils.
db.customers.aggregate(
	{ $project: { 
		name : {$concat:["$title"," ","$firstName"," ","$lastName"]},
		customer_id: 1 }},
	{ $lookup: {from: "bookings", localField: "customer_id", foreignField: "customer_id", as: "bookings"}},
	{ $unwind: "$bookings" },
	{ $project: { 
		name : "$name",
		customer_id: 1,
		flight: "$bookings.flight_id",
		price: "$bookings.bookingAmount"}},
	{ $unwind: "$flight"},
	{ $lookup: {from: "flightSchedule", localField: "flight", foreignField: "flight_id", as: "schedule"}},
	{ $unwind: "$schedule"},
	{ $lookup: {from: "airports", localField: "schedule.departureCity", foreignField: "city_id", as: "departureAirport"}},
	{ $unwind: "$departureAirport"},
	{ $lookup: {from: "airports", localField: "schedule.arrivalCity", foreignField: "city_id", as: "arrivalAirport"}},
	{ $unwind: "$arrivalAirport"},
	{ $project: { 
		_id: 0,
		name : 1,
		price: 1,
		travel: {$concat:["$departureAirport.city","-","$arrivalAirport.city"]},
		travelTime: {$concat:[{ $dateToString: { format: "%Y:%m:%d-%H:%M:%S", date: "$schedule.departureTime"}}," - ",{ $dateToString: { format: "%Y:%m:%d-%H:%M:%S", date: "$schedule.arrivalTime"}}]}
		}}
)



