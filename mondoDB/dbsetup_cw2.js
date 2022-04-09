//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Group - 21
// Sanjay Ramesh : 210811700
// Ritika Gupta : 210487158
// Adity Ronak Shah: 210841431
// Bineeta Kachhap : 210619025
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Part1: d)	You are then required to populate your schema with data. It is not necessary for you to enter a large amount 
// of data, for most tables between 6-10 rows should be sufficient. However you should design your test data to make sure that 
// it will demonstrate that your MongoDB queries will work robustly no matter what data is stored.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

1. Enter the database
use qmulairline;


2. Clear any existing data. 
db.employees.remove({});
db.employeeCode.remove({});
db.planes.remove({});
db.airports.remove({});
db.flightSchedule.remove({});
db.customers.remove({});
db.bookings.remove({});

3. Data for EmployeeCode collection
db.employeeCode.insert({"code_id": "EC001", "employeeType": "Pilot", "standardSalary": 100});
db.employeeCode.insert({"code_id": "EC002", "employeeType": "Booking Clerks", "standardSalary": 50});
db.employeeCode.insert({"code_id": "EC003", "employeeType": "Maintenance Staff", "standardSalary": 50});
db.employeeCode.insert({"code_id": "EC004", "employeeType": "Cabin Crew", "standardSalary": 75});
db.employeeCode.find().count();


4. Data for Planes collection
db.planes.insert({"plane_id": "P001", "make": "Boing-737", "model": "200LR", "serviceTime": 5, "state":{ "status": "working" }, "capacity":10, "flyingRange": 1000, "unit":"km"});
db.planes.insert({"plane_id": "P002", "make": "Boing-738", "model": "300ER", "serviceTime": 10, "state":{ "status": "working" }, "capacity":10, "flyingRange": 1000, "unit":"km"});
db.planes.insert({"plane_id": "P003", "make": "Boing-739", "model": "20BBJ0", "serviceTime": 20, "state":{ "status": "upgraded", "repairCost": 100 }, "capacity":10, "flyingRange": 1000, "unit":"km"});
db.planes.insert({"plane_id": "P004", "make": "Boing-740", "model": "740 MAX", "serviceTime": 15, "state":{ "status": "in-repair", "repairCost": 50 }, "capacity":10, "flyingRange": 1000, "unit":"km"});
db.planes.find().count();


5. Data for Airports collection
db.airports.insert({ "city_id": "A001", "city": "London", "airportCost":{ "refuelCost": 100, "maintainanceCost": 50 ,"hourlyStopRate":50}});
db.airports.insert({ "city_id": "A002", "city": "Manchester", "airportCost":{ "refuelCost": 100, "maintainanceCost": 40 ,"hourlyStopRate":50}});
db.airports.insert({ "city_id": "A003", "city": "Birmingham", "airportCost":{ "refuelCost": 90, "maintainanceCost": 30 ,"hourlyStopRate":40}});
db.airports.insert({ "city_id": "A004", "city": "Leeds", "airportCost":{ "refuelCost": 75, "maintainanceCost": 20 ,"hourlyStopRate":50}});
db.airports.insert({ "city_id": "A005", "city": "Glasgow", "airportCost":{ "refuelCost": 100, "maintainanceCost": 10 ,"hourlyStopRate":70}});
db.airports.insert({ "city_id": "A006", "city": "Southamton", "airportCost":{ "refuelCost": 75, "maintainanceCost": 50 ,"hourlyStopRate":50}});
db.airports.insert({ "city_id": "A007", "city": "Liverpool", "airportCost":{ "refuelCost": 75, "maintainanceCost": 70 ,"hourlyStopRate":40}});
db.airports.insert({ "city_id": "A008", "city": "Sheffield", "airportCost":{ "refuelCost": 60, "maintainanceCost": 25 ,"hourlyStopRate":45}});
db.airports.insert({ "city_id": "A009", "city": "Belfast", "airportCost":{ "refuelCost": 60, "maintainanceCost": 45 ,"hourlyStopRate":50}});
db.airports.insert({ "city_id": "A010", "city": "Brighton", "airportCost":{ "refuelCost": 90, "maintainanceCost": 10 ,"hourlyStopRate":70}});
db.airports.find().count();


6. Data for Bookings collection
db.bookings.insert({ "book_id": "BK001", "flight_id" : ["FL001"], "customer_id": "CUS001", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 1234.56});
db.bookings.insert({ "book_id": "BK002", "flight_id" : ["FL001"], "customer_id": "CUS002", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 987.23});
db.bookings.insert({ "book_id": "BK003", "flight_id" : ["FL001"], "customer_id": "CUS003", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 1500.34});
db.bookings.insert({ "book_id": "BK004", "flight_id" : ["FL001"], "customer_id": "CUS004", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 1506.49});
db.bookings.insert({ "book_id": "BK005", "flight_id" : ["FL002"], "customer_id": "CUS005", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 1639.38});
db.bookings.insert({ "book_id": "BK006", "flight_id" : ["FL002"], "customer_id": "CUS006", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 1772.27});
db.bookings.insert({ "book_id": "BK007", "flight_id" : ["FL002"], "customer_id": "CUS007", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 1905.16});
db.bookings.insert({ "book_id": "BK008", "flight_id" : ["FL002"], "customer_id": "CUS008", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 2038.05});
db.bookings.insert({ "book_id": "BK009", "flight_id" : ["FL002"], "customer_id": "CUS009", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 2170.94});
db.bookings.insert({ "book_id": "BK010", "flight_id" : ["FL005", "FL006", "FL007"], "customer_id": "CUS010", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 2303.83});
db.bookings.insert({ "book_id": "BK011", "flight_id" : ["FL005", "FL006", "FL007"], "customer_id": "CUS011", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 2436.72});
db.bookings.insert({ "book_id": "BK012", "flight_id" : ["FL007"], "customer_id": "CUS013", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 2569.61});
db.bookings.insert({ "book_id": "BK013", "flight_id" : ["FL003","FL004"], "customer_id": "CUS014", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 2702.5});
db.bookings.insert({ "book_id": "BK014", "flight_id" : ["FL003","FL004"], "customer_id": "CUS015", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 2835.39});
db.bookings.insert({ "book_id": "BK015", "flight_id" : ["FL003","FL004"], "customer_id": "CUS016", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 2968.28});
db.bookings.insert({ "book_id": "BK016", "flight_id" : ["FL008","FL009"], "customer_id": "CUS017", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 3101.17});
db.bookings.insert({ "book_id": "BK017", "flight_id" : ["FL008","FL009"], "customer_id": "CUS018", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 3234.06});
db.bookings.insert({ "book_id": "BK018", "flight_id" : ["FL008","FL009"], "customer_id": "CUS019", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 3366.95});
db.bookings.insert({ "book_id": "BK019", "flight_id" : ["FL010"], "customer_id": "CUS020", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 3499.84});
db.bookings.insert({ "book_id": "BK020", "flight_id" : ["FL011"], "customer_id": "CUS021", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 3632.73});
db.bookings.insert({ "book_id": "BK021", "flight_id" : ["FL012"], "customer_id": "CUS022", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 3765.62});
db.bookings.insert({ "book_id": "BK022", "flight_id" : ["FL013"], "customer_id": "CUS023", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 3898.51});
db.bookings.insert({ "book_id": "BK023", "flight_id" : ["FL014"], "customer_id": "CUS024", "paymentMode": "Card", "bookingDate": ISODate("2021-11-01T00:00:00Z"), "bookingAmount": 4031.4});
db.bookings.find().count();
=23


7. Data for Customers collection
db.customers.insert({ "customer_id": "CUS001", "title" : "Dr.", "firstName": "Anthony", "lastName": "Stockman", "email": "AnthonyStockman@customer.com", "contactNumber":449823678938, "address" : {"buildingNo": 310, "street": "Abbey Road", "city": "Southamton", "zipcode": "E56GHB"}});
db.customers.insert({ "customer_id": "CUS002", "title" : "Dr.", "firstName": "Jesus", "lastName": "Requena-Carrion", "email": "JesusRequenaCarrion@passenger.com", "contactNumber":449823678999, "address" : {"buildingNo": 459, "street": "Brick Lane", "city": "Sheffield", "zipcode": "E57GHB"}});
db.customers.insert({ "customer_id": "CUS003", "title" : "Dr.", "firstName": "Sukhpal", "lastName": "Singh Gill", "email": "SukhpalSinghGill@customer.com", "contactNumber":449823679060, "address" : {"buildingNo": 100, "street": "Oxford Street", "city": "London", "zipcode": "E58GHB"}});
db.customers.insert({ "customer_id": "CUS004", "title" : "Dr.", "firstName": "Emmanouil","lastName": "Benetos","email": "EmmanouilBenetos@passenger.com", "contactNumber":449823679121, "address" : {"buildingNo": 642, "street": "Carnaby Street", "city": "Southamton", "zipcode": "E59GHB"}});
db.customers.insert({ "customer_id": "CUS005", "title" : "Dr.", "firstName": "Jialun", "lastName": "Hu","email": "JialunHu@customer.com", "contactNumber":449823679182, "address" : {"buildingNo": 879, "street": "Piccadilly", "city": "London", "zipcode": "E60GHB"}});
db.customers.insert({ "customer_id": "CUS006", "title" : "Proff", "firstName": "Norman", "lastName": "Fenton","email": "NormanFenton@passenger.com", "contactNumber":449823679243, "address" : {"buildingNo": 612, "street": "Baker Street", "city": "Glasgow", "zipcode": "E61GHB"}});
db.customers.insert({ "customer_id": "CUS007", "title" : "Dr.", "firstName": "Georgios", "lastName": "Tzimiropoulos", "email": "GeorgiosTzimiropoulos@customer.com", "contactNumber":449823679304, "address" : {"buildingNo": 333, "street": "Downing Street ", "city": "Brighton", "zipcode": "E62GHB"}});
db.customers.insert({ "customer_id": "CUS008", "title" : "Dr.", "firstName": "Qianni", "lastName": "Zhang", "email": "QianniZhang@passenger.com", "contactNumber":449823679365, "address" : {"buildingNo": 781, "street": "Harley Street", "city": "Brighton", "zipcode": "E63GHB"}});
db.customers.insert({ "customer_id": "CUS009", "title" : "Dr.", "firstName": "Usman", "lastName": "Naeem", "email": "UsmanNaeem@customer.com", "contactNumber":449823679426, "address" : {"buildingNo": 23, "street": "Old Compton Street", "city": "Glasgow", "zipcode": "E64GHB"}});
db.customers.insert({ "customer_id": "CUS010", "title" : "Mr.", "firstName": "Ercüment", "lastName": "Ilhan", "email": "Ercument.Ilhan@passenger.com", "contactNumber":449823679487, "address" : {"buildingNo": 56, "street": "Abbey Road", "city": "London", "zipcode": "E65GHB"}});
db.customers.insert({ "customer_id": "CUS011", "title" : "Mr.", "firstName": "Iacopo", "lastName": "Ghinassi", "email": "Iacopo.Ghinassi@customer.com", "contactNumber":449823679548, "address" : {"buildingNo": 78, "street": "Brick Lane", "city": "Sheffield", "zipcode": "E66GHB"}});
db.customers.insert({ "customer_id": "CUS012", "title" : "Mr.", "firstName": "Yixiao", "lastName": "Zhang", "email": "Yixiao.Zhang@passenger.com", "contactNumber":449823679609, "address" : {"buildingNo": 27, "street": "Oxford Street", "city": "Southamton", "zipcode": "E67GHB"}});
db.customers.insert({ "customer_id": "CUS013", "title" : "Mr.", "firstName": "Woody", "lastName": "Bayliss", "email": "Woody.Bayliss@customer.com", "contactNumber":449823679670, "address" : {"buildingNo": 59, "street": "Carnaby Street", "city": "Glasgow", "zipcode": "E68GHB"}});
db.customers.insert({ "customer_id": "CUS014", "title" : "Mr.", "firstName": "Yeming", "lastName": "Meng", "email": "Yeming.Meng@passenger.com", "contactNumber":449823679731, "address" : {"buildingNo": 12, "street": "Piccadilly", "city": "Manchester", "zipcode": "E69GHB"}});
db.customers.insert({ "customer_id": "CUS015", "title" : "Ms.", "firstName": "Chia-Yen", "lastName": "Chiang", "email": "Chia-Yen.Chiang@customer.com", "contactNumber":449823679792, "address" : {"buildingNo": 50, "street": "Baker Street", "city": "London", "zipcode": "E70GHB"}});
db.customers.insert({ "customer_id": "CUS016", "title" : "Mr.", "firstName": "Sebastian", "lastName": "Berns", "email": "Sebastian.Berns@passenger.com", "contactNumber":449823679853, "address" : {"buildingNo": 27, "street": "Downing Street ", "city": "Manchester", "zipcode": "E71GHB"}});
db.customers.insert({ "customer_id": "CUS017", "title" : "Mr.", "firstName": "Linjie", "lastName": "Xu", "email": "Linjie.Xu@customer.com", "contactNumber":449823679914, "address" : {"buildingNo": 70, "street": "Harley Street", "city": "Glasgow", "zipcode": "E72GHB"}});
db.customers.insert({ "customer_id": "CUS018", "title" : "Mr.", "firstName": "Abdulrahman", "lastName": "Aloraini", "email": "Abdulrahman.Aloraini@passenger.com", "contactNumber":449823679975, "address" : {"buildingNo": 27, "street": "Old Compton Street", "city": "Southamton", "zipcode": "E73GHB"}});
db.customers.insert({ "customer_id": "CUS019", "title" : "", "firstName": "Katarzyna Maria", "lastName": "Adamska", "email": "Katarzyna.Maria.Adamska@customer.com", "contactNumber":449823680036, "address" : {"buildingNo": 18, "street": "Abbey Road", "city": "London", "zipcode": "E74GHB"}});
db.customers.insert({ "customer_id": "CUS020", "title" : "Mr.", "firstName": "Alvaro Ovalle", "lastName": "Castañeda", "email": "Alvaro.Ovalle.Castañeda@passenger.com", "contactNumber":449823680097, "address" : {"buildingNo": 82, "street": "Brick Lane", "city": "Sheffield", "zipcode": "E75GHB"}});
db.customers.insert({ "customer_id": "CUS021", "title" : "Mr.", "firstName": "Saqib", "lastName": "Iqbal", "email": "Saqib.Iqbal@customer.com", "contactNumber":449823680158, "address" : {"buildingNo": 59, "street": "Oxford Street", "city": "Brighton", "zipcode": "E76GHB"}});
db.customers.insert({ "customer_id": "CUS022", "title" : "Mr.", "firstName": "Elona", "lastName": "Shatri", "email": "Elona.Shatri@passenger.com", "contactNumber":449823680219, "address" : {"buildingNo": 921, "street": "Carnaby Street", "city": "London", "zipcode": "E77GHB"}});
db.customers.insert({ "customer_id": "CUS023", "title" : "Mrs.", "firstName": "Parvathy Chittur", "lastName": "Subramanianprasad", "email": "Parvathy.Chittur.Subramanianprasad@customer.com", "contactNumber":449823680280, "address" : {"buildingNo": 2, "street": "Piccadilly", "city": "Brighton", "zipcode": "E78GHB"}});
db.customers.insert({ "customer_id": "CUS024", "title" : "Mrs.", "firstName": "Peiling", "lastName": "Yi", "email": "Peiling.Yi@passenger.com", "contactNumber":449823680341, "address" : {"buildingNo": 27, "street": "Baker Street", "city": "Manchester", "zipcode": "E79GHB"}});
db.customers.insert({ "customer_id": "CUS025", "title" : "Miss", "firstName": "Wenjie", "lastName": "Yin", "email": "Wenjie.Yin@customer.com", "contactNumber":449823680402, "address" : {"buildingNo": 67, "street": "Downing Street ", "city": "London", "zipcode": "E80GHB"}});
db.customers.find().count();
=25


8. Data for FlightSchedule collection
db.flightSchedule.insert({ "flight_id": "FL001", "plane_id": "P001", "departureCity": "A001", "arrivalCity": "A002", "departureTime": ISODate("2021-11-16T08:00:00Z"), "arrivalTime": ISODate("2021-11-16T11:00:00Z"), "employee_list": ["E001","E002","E009","E010","E011","E012"]});
db.flightSchedule.insert({ "flight_id": "FL002", "plane_id": "P001", "departureCity": "A002", "arrivalCity": "A001", "departureTime": ISODate("2021-11-16T13:00:00Z"), "arrivalTime": ISODate("2021-11-16T16:00:00Z"), "employee_list": ["E001","E002","E009","E010","E011","E012"]});
db.flightSchedule.insert({ "flight_id": "FL003", "plane_id": "P001", "departureCity": "A001", "arrivalCity": "A009", "departureTime": ISODate("2021-11-17T05:30:00Z"), "arrivalTime": ISODate("2021-11-17T08:30:00Z"), "employee_list": ["E001","E002","E009","E010","E011","E012"]});
db.flightSchedule.insert({ "flight_id": "FL004", "plane_id": "P001", "departureCity": "A009", "arrivalCity": "A001", "departureTime": ISODate("2021-11-17T20:00:00Z"), "arrivalTime": ISODate("2021-11-17T23:00:00Z"), "employee_list": ["E001","E002","E009","E010","E011","E012"]});
db.flightSchedule.insert({ "flight_id": "FL005", "plane_id": "P002", "departureCity": "A008", "arrivalCity": "A002", "departureTime": ISODate("2021-11-16T07:00:00Z"), "arrivalTime": ISODate("2021-11-16T08:00:00Z"), "employee_list": ["E001","E002","E009","E010","E011","E012"]});
db.flightSchedule.insert({ "flight_id": "FL006", "plane_id": "P002", "departureCity": "A002", "arrivalCity": "A005", "departureTime": ISODate("2021-11-16T09:00:00Z"), "arrivalTime": ISODate("2021-11-16T11:00:00Z"), "employee_list": ["E003","E004","E013","E014","E015","E016"]});
db.flightSchedule.insert({ "flight_id": "FL007", "plane_id": "P002", "departureCity": "A005", "arrivalCity": "A008", "departureTime": ISODate("2021-11-16T13:00:00Z"), "arrivalTime": ISODate("2021-11-16T16:00:00Z"), "employee_list": ["E003","E004","E013","E014","E015","E016"]});
db.flightSchedule.insert({ "flight_id": "FL008", "plane_id": "P002", "departureCity": "A008", "arrivalCity": "A007", "departureTime": ISODate("2021-11-17T07:00:00Z"), "arrivalTime": ISODate("2021-11-17T10:00:00Z"), "employee_list": ["E003","E004","E013","E014","E015","E016"]});
db.flightSchedule.insert({ "flight_id": "FL009", "plane_id": "P002", "departureCity": "A007", "arrivalCity": "A006", "departureTime": ISODate("2021-11-17T12:00:00Z"), "arrivalTime": ISODate("2021-11-17T14:00:00Z"), "employee_list": ["E003","E004","E013","E014","E015","E016"]});
db.flightSchedule.insert({ "flight_id": "FL010", "plane_id": "P002", "departureCity": "A006", "arrivalCity": "A008", "departureTime": ISODate("2021-11-17T15:00:00Z"), "arrivalTime": ISODate("2021-11-17T16:00:00Z"), "employee_list": ["E003","E004","E013","E014","E015","E016"]});
db.flightSchedule.find().count();
=10


9. Data for Employees collection
db.employees.insert({ "employee_id": "E001", "firstName" : "Ritika", "lastName" : "Gupta", "email": "Ritika.Gupta@qmulairlines.com", "contactNumber": 446785674563, "address": {"buildingNo" :34, "street": "Abbey Road", "city": "Birmingham", "zipcode": "E56GHB"}, "joiningDate": ISODate("2010-06-05T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 600}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 600}], "employeeType": {"eType":"EC001", "fitToFly": true}});
db.employees.insert({ "employee_id": "E002", "firstName" : "Aditya Ronak", "lastName" : "Shah", "email": "Aditya.RonakShah@qmulairlines.com", "contactNumber": 446785674564, "address": {"buildingNo" :56, "street": "Brick Lane", "city": "London", "zipcode": "E57GHB"}, "joiningDate": ISODate("2011-09-06T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 600}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 600}], "employeeType": {"eType":"EC001", "fitToFly": true}});
db.employees.insert({ "employee_id": "E003", "firstName" : "Sanjay", "lastName" : "Ramesh", "email": "Sanjay.Ramesh@qmulairlines.com", "contactNumber": 446785674565, "address": {"buildingNo" :98, "street": "Oxford Street", "city": "Liverpool", "zipcode": "E58GHB"}, "joiningDate": ISODate("2010-12-07") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 600}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 600}], "employeeType": {"eType":"EC001", "fitToFly": true}});
db.employees.insert({ "employee_id": "E004", "firstName" : "Bineeta", "lastName" : "Kachhap", "email": "Bineeta.Kachhap@qmulairlines.com", "contactNumber": 446785674566, "address": {"buildingNo" :43, "street": "Carnaby Street", "city": "London", "zipcode": "E59GHB"}, "joiningDate": ISODate("2008-06-08T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 600}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 600}], "employeeType": {"eType":"EC001", "fitToFly": true}});
db.employees.insert({ "employee_id": "E005", "firstName" : "Antra", "lastName" : "Tripathi", "email": "Antra.Tripathi@qmulairlines.com", "contactNumber": 446785674567, "address": {"buildingNo" :65, "street": "Piccadilly", "city": "Belfast", "zipcode": "E60GHB"}, "joiningDate": ISODate("1999-09-06") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":8, "salary": 400}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":8, "salary": 400}], "employeeType": {"eType":"EC002", "fitToFly": false}});
db.employees.insert({ "employee_id": "E006", "firstName" : "Yunqing", "lastName" : "Gou", "email": "Yunqing.Gou@qmulairlines.com", "contactNumber": 446785674568, "address": {"buildingNo" :72, "street": "Baker Street", "city": "Birmingham", "zipcode": "E61GHB"}, "joiningDate": ISODate("2010-11-10T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":8, "salary": 400}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":8, "salary": 400}], "employeeType": {"eType":"EC002", "fitToFly": false}});
db.employees.insert({ "employee_id": "E007", "firstName" : "Yifeng", "lastName" : "Lin", "email": "Yifeng.Lin@qmulairlines.com", "contactNumber": 446785674569, "address": {"buildingNo" :12, "street": "Downing Street ", "city": "London", "zipcode": "E62GHB"}, "joiningDate": ISODate("2010-06-11T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":8, "salary": 400}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":8, "salary": 400}], "employeeType": {"eType":"EC003", "fitToFly": false}});
db.employees.insert({ "employee_id": "E008", "firstName" : "Chuanning", "lastName" : "Liu", "email": "Chuanning.Liu@qmulairlines.com", "contactNumber": 446785674570, "address": {"buildingNo" :78, "street": "Harley Street", "city": "Belfast", "zipcode": "E63GHB"}, "joiningDate": ISODate("2011-06-12T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":8, "salary": 400}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":8, "salary": 400}], "employeeType": {"eType":"EC003", "fitToFly": false}});
db.employees.insert({ "employee_id": "E009", "firstName" : "Yunlong", "lastName" : "Mu", "email": "Yunlong.Mu@qmulairlines.com", "contactNumber": 446785674571, "address": {"buildingNo" :43, "street": "Old Compton Street", "city": "Liverpool", "zipcode": "E64GHB"}, "joiningDate": ISODate("2005-10-13T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 450}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 450}], "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E010", "firstName" : "Weitian", "lastName" : "Ran", "email": "Weitian.Ran@qmulairlines.com", "contactNumber": 446785674572, "address": {"buildingNo" :27, "street": "Abbey Road", "city": "Belfast", "zipcode": "E65GHB"}, "joiningDate": ISODate("2006-06-14T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 450}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 450}], "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E011", "firstName" : "Yashi", "lastName" : "Gupta", "email": "Yashi.Gupta@qmulairlines.com", "contactNumber": 446785674573, "address": {"buildingNo" :80, "street": "Brick Lane", "city": "Birmingham", "zipcode": "E66GHB"}, "joiningDate": ISODate("2010-06-15T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 450}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 450}], "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E012", "firstName" : "Alexander", "lastName" : "Sachkov", "email": "Alexander.Sachkov@qmulairlines.com", "contactNumber": 446785674574, "address": {"buildingNo" :20, "street": "Oxford Street", "city": "London", "zipcode": "E67GHB"}, "joiningDate": ISODate("2019-09-16T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 450}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 450}], "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E013", "firstName" : "Shiva Archith", "lastName" : "Siddhartha", "email": "ShivaArchith.Siddhartha@qmulairlines.com", "contactNumber": 446785674575, "address": {"buildingNo" :34, "street": "Carnaby Street", "city": "London", "zipcode": "E68GHB"}, "joiningDate": ISODate("2010-11-17T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 450}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 450}], "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E014", "firstName" : "Kang", "lastName" : "Simon", "email": "Kang.Simon@qmulairlines.com", "contactNumber": 446785674576, "address": {"buildingNo" :59, "street": "Piccadilly", "city": "Birmingham", "zipcode": "E69GHB"}, "joiningDate": ISODate("2010-06-18T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 450}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 450}], "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E015", "firstName" : "Tong", "lastName" : "Liu", "email": "Tong.Liu@qmulairlines.com", "contactNumber": 446785674577, "address": {"buildingNo" :30, "street": "Baker Street", "city": "Liverpool", "zipcode": "E70GHB"}, "joiningDate": ISODate("2010-08-19T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 450}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 450}], "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E016", "firstName" : "Rabia", "lastName" : "Alam", "email": "Rabia.Alam@qmulairlines.com", "contactNumber": 446785674578, "address": {"buildingNo" :23, "street": "Downing Street ", "city": "Belfast", "zipcode": "E71GHB"}, "joiningDate": ISODate("2007-06-20T00:00:00Z") , "employeeWorkSchedule": [{"date" : ISODate("2021-11-16T00:00:00Z"), "hours":6, "salary": 450}, {"date" : ISODate("2021-11-17T00:00:00Z"), "hours":6, "salary": 450}], "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E017", "firstName" : "Aditya", "lastName" : "Dubey", "email": "Aditya.Dubey@qmulairlines.com", "contactNumber": 446785674579, "address": {"buildingNo" :65, "street": "Harley Street", "city": "London", "zipcode": "E72GHB"}, "joiningDate": ISODate("2012-12-21T00:00:00Z"), "lastWorkingDate": ISODate("2019-12-31T00:00:00Z"), "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E018", "firstName" : "Remi Gul", "lastName" : "Bahar", "email": "RemiGul.Bahar@qmulairlines.com", "contactNumber": 446785674580, "address": {"buildingNo" :43, "street": "Old Compton Street", "city": "Birmingham", "zipcode": "E73GHB"}, "joiningDate": ISODate("2010-07-22T00:00:00Z"), "lastWorkingDate": ISODate("2019-12-31T00:00:00Z"), "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E019", "firstName" : "David","lastName" : "Stumbra", "email": "David.Stumbra@qmulairlines.com", "contactNumber": 446785674581, "address": {"buildingNo" :120, "street": "Oxford Street", "city": "London", "zipcode": "E74GHB"}, "joiningDate": ISODate("2009-06-23T00:00:00Z"), "lastWorkingDate": ISODate("2019-12-31T00:00:00Z"), "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E020", "firstName" : "Temesgen Daniel", "lastName" : "Teklebrhan", "email": "TemesgenDaniel.Teklebrhan@qmulairlines.com", "contactNumber": 446785674582, "address": {"buildingNo" :89, "street": "Carnaby Street", "city": "Liverpool", "zipcode": "E75GHB"}, "joiningDate": ISODate("1998-06-24T00:00:00Z"), "lastWorkingDate": ISODate("2019-12-31T00:00:00Z"), "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.insert({ "employee_id": "E021", "firstName" : "Tanishq", "lastName" : "Verma", "email": "Tanishq.Verma@qmulairlines.com", "contactNumber": 446785674583, "address": {"buildingNo" :764, "street": "Piccadilly", "city": "Birmingham", "zipcode": "E76GHB"}, "joiningDate": ISODate("2003-08-25T00:00:00Z"), "lastWorkingDate": ISODate("2019-12-31T00:00:00Z"), "employeeType": {"eType":"EC004", "fitToFly": false}});
db.employees.find().count(); 
=21


10. Command to export the data though mongoexport
- In cmd, from the <MongoDB installation path>\Server\5.0\bin .. execute the below to export the data to .json file.
mongoexport --db qmulairline --collection employees --out "employees_CW2.json"
mongoexport --db qmulairline --collection employeeCode --out "employeeCode_CW2.json"
mongoexport --db qmulairline --collection planes --out "planes_CW2.json"
mongoexport --db qmulairline --collection airports --out "airports_CW2.json"
mongoexport --db qmulairline --collection flightSchedule --out "flightSchedule_CW2.json"
mongoexport --db qmulairline --collection customers --out "customers_CW2.json"
mongoexport --db qmulairline --collection bookings --out "bookings_CW2.json"


11. Command to import the data though mongoimport
- In cmd, from the <MongoDB installation path>\Server\5.0\bin .. execute the below to export the data to .json file.
mongoimport --db qmulairline --collection employees --file "employees_CW2.json"
mongoimport --db qmulairline --collection employeeCode --file "employeeCode_CW2.json"
mongoimport --db qmulairline --collection planes --file "planes_CW2.json"
mongoimport --db qmulairline --collection airports --file "airports_CW2.json"
mongoimport --db qmulairline --collection flightSchedule --file "flightSchedule_CW2.json"
mongoimport --db qmulairline --collection customers --file "customers_CW2.json"
mongoimport --db qmulairline --collection bookings --file "bookings_CW2.json"