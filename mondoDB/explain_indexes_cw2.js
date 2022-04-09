//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Group - 21
// Sanjay Ramesh : 210811700
// Ritika Gupta : 210487158
// Adity Ronak Shah: 210841431
// Bineeta Kachhap : 210619025
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Part2: a) Show the use of the MongoDB profiler for examining the performance of a selection of your MongoDB queries. 
// Illustrate the use of different values of the parameters to the MongoDB Profiler utility.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

------------------------------------------------------------------------------------Query no:7---------------------------------------------------------------------------------------------------
1. Explain and indexes for Customer Collection on employee_id field. The below output has been produced for query no. 7 (Top 10 oldest eployees by joining date)

Output a) without indexes: 
- The hightlihted "stage" : "COLLSCAN" shows that full column scan was done on the document collection to fetch all relevant data. 
- The field "executionTimeMillisEstimate" : 0 shows that it took less that 0 milli seconds to execute the whole query.
- The "executionSuccess" : true shows that there are no logic or formatting issue and the query executed successfully.

db.employees.find({"employee_id":{$exists:false}},{employee_id:true, firstName:true, lastName:true, joiningDate:true}).sort({joiningDate:1}).limit(10).explain("executionStats")
{
        "explainVersion" : "1",
        "queryPlanner" : {
                "namespace" : "qmulairline.employees",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "employee_id" : {
                                "$not" : {
                                        "$exists" : true
                                }
                        }
                },
                "maxIndexedOrSolutionsReached" : false,
                "maxIndexedAndSolutionsReached" : false,
                "maxScansToExplodeReached" : false,
                "winningPlan" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "transformBy" : {
                                "employee_id" : true,
                                "firstName" : true,
                                "lastName" : true,
                                "joiningDate" : true
                        },
                        "inputStage" : {
                                "stage" : "SORT",
                                "sortPattern" : {
                                        "joiningDate" : 1
                                },
                                "memLimit" : 104857600,
                                "limitAmount" : 10,
                                "type" : "simple",
                                "inputStage" : {
                                        "stage" : "COLLSCAN",
                                        "filter" : {
                                                "employee_id" : {
                                                        "$not" : {
                                                                "$exists" : true
                                                        }
                                                }
                                        },
                                        "direction" : "forward"
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 0,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 21,
                "executionStages" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "nReturned" : 0,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 24,
                        "advanced" : 0,
                        "needTime" : 23,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "transformBy" : {
                                "employee_id" : true,
                                "firstName" : true,
                                "lastName" : true,
                                "joiningDate" : true
                        },
                        "inputStage" : {
                                "stage" : "SORT",
                                "nReturned" : 0,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 24,
                                "advanced" : 0,
                                "needTime" : 23,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "sortPattern" : {
                                        "joiningDate" : 1
                                },
                                "memLimit" : 104857600,
                                "limitAmount" : 10,
                                "type" : "simple",
                                "totalDataSizeSorted" : 0,
                                "usedDisk" : false,
                                "inputStage" : {
                                        "stage" : "COLLSCAN",
                                        "filter" : {
                                                "employee_id" : {
                                                        "$not" : {
                                                                "$exists" : true
                                                        }
                                                }
                                        },
                                        "nReturned" : 0,
                                        "executionTimeMillisEstimate" : 0,
                                        "works" : 23,
                                        "advanced" : 0,
                                        "needTime" : 22,
                                        "needYield" : 0,
                                        "saveState" : 0,
                                        "restoreState" : 0,
                                        "isEOF" : 1,
                                        "direction" : "forward",
                                        "docsExamined" : 21
                                }
                        }
                }
        },
        "command" : {
                "find" : "employees",
                "filter" : {
                        "employee_id" : {
                                "$exists" : false
                        }
                },
                "limit" : 10,
                "singleBatch" : false,
                "sort" : {
                        "joiningDate" : 1
                },
                "projection" : {
                        "employee_id" : true,
                        "firstName" : true,
                        "lastName" : true,
                        "joiningDate" : true
                },
                "$db" : "qmulairline"
        },
        "serverInfo" : {
                "host" : "DESKTOP-O2C1LRU",
                "port" : 27017,
                "version" : "5.0.4",
                "gitVersion" : "62a84ede3cc9a334e8bc82160714df71e7d3a29e"
        },
        "serverParameters" : {
                "internalQueryFacetBufferSizeBytes" : 104857600,
                "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
                "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
                "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
                "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
                "internalQueryProhibitBlockingMergeOnMongoS" : 0,
                "internalQueryMaxAddToSetBytes" : 104857600,
                "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
}

Created indexes for customer collection for customer_id field.
db.customers.getIndexes();
db.customers.createIndex({"customer_id":1});
db.customers.dropIndex("customer_id_1");

Output b) after indexes: 
- The hightlihted "stage" : "IXSCAN" shows that index column scan was done on the document collection to fetch all relevant data. 
- The field "executionTimeMillisEstimate" : 0 shows that it took less that 0 milli seconds to execute the whole query.
- The "executionSuccess" : true shows that there are no logic or formatting issue and the query executed successfully.

db.employees.find({"employee_id":{$exists:false}},{employee_id:true, firstName:true, lastName:true, joiningDate:true}).sort({joiningDate:1}).limit(10).explain("executionStats")
{
        "explainVersion" : "1",
        "queryPlanner" : {
                "namespace" : "qmulairline.employees",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "employee_id" : {
                                "$not" : {
                                        "$exists" : true
                                }
                        }
                },
                "maxIndexedOrSolutionsReached" : false,
                "maxIndexedAndSolutionsReached" : false,
                "maxScansToExplodeReached" : false,
                "winningPlan" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "transformBy" : {
                                "employee_id" : true,
                                "firstName" : true,
                                "lastName" : true,
                                "joiningDate" : true
                        },
                        "inputStage" : {
                                "stage" : "SORT",
                                "sortPattern" : {
                                        "joiningDate" : 1
                                },
                                "memLimit" : 104857600,
                                "limitAmount" : 10,
                                "type" : "simple",
                                "inputStage" : {
                                        "stage" : "FETCH",
                                        "filter" : {
                                                "employee_id" : {
                                                        "$not" : {
                                                                "$exists" : true
                                                        }
                                                }
                                        },
                                        "inputStage" : {
                                                "stage" : "IXSCAN",
                                                "keyPattern" : {
                                                        "employee_id" : 1
                                                },
                                                "indexName" : "employee_id_1",
                                                "isMultiKey" : false,
                                                "multiKeyPaths" : {
                                                        "employee_id" : [ ]
                                                },
                                                "isUnique" : false,
                                                "isSparse" : false,
                                                "isPartial" : false,
                                                "indexVersion" : 2,
                                                "direction" : "forward",
                                                "indexBounds" : {
                                                        "employee_id" : [
                                                                "[null, null]"
                                                        ]
                                                }
                                        }
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 0,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 0,
                "executionStages" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "nReturned" : 0,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 2,
                        "advanced" : 0,
                        "needTime" : 1,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "transformBy" : {
                                "employee_id" : true,
                                "firstName" : true,
                                "lastName" : true,
                                "joiningDate" : true
                        },
                        "inputStage" : {
                                "stage" : "SORT",
                                "nReturned" : 0,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 2,
                                "advanced" : 0,
                                "needTime" : 1,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "sortPattern" : {
                                        "joiningDate" : 1
                                },
                                "memLimit" : 104857600,
                                "limitAmount" : 10,
                                "type" : "simple",
                                "totalDataSizeSorted" : 0,
                                "usedDisk" : false,
                                "inputStage" : {
                                        "stage" : "FETCH",
                                        "filter" : {
                                                "employee_id" : {
                                                        "$not" : {
                                                                "$exists" : true
                                                        }
                                                }
                                        },
                                        "nReturned" : 0,
                                        "executionTimeMillisEstimate" : 0,
                                        "works" : 1,
                                        "advanced" : 0,
                                        "needTime" : 0,
                                        "needYield" : 0,
                                        "saveState" : 0,
                                        "restoreState" : 0,
                                        "isEOF" : 1,
                                        "docsExamined" : 0,
                                        "alreadyHasObj" : 0,
                                        "inputStage" : {
                                                "stage" : "IXSCAN",
                                                "nReturned" : 0,
                                                "executionTimeMillisEstimate" : 0,
                                                "works" : 1,
                                                "advanced" : 0,
                                                "needTime" : 0,
                                                "needYield" : 0,
                                                "saveState" : 0,
                                                "restoreState" : 0,
                                                "isEOF" : 1,
                                                "keyPattern" : {
                                                        "employee_id" : 1
                                                },
                                                "indexName" : "employee_id_1",
                                                "isMultiKey" : false,
                                                "multiKeyPaths" : {
                                                        "employee_id" : [ ]
                                                },
                                                "isUnique" : false,
                                                "isSparse" : false,
                                                "isPartial" : false,
                                                "indexVersion" : 2,
                                                "direction" : "forward",
                                                "indexBounds" : {
                                                        "employee_id" : [
                                                                "[null, null]"
                                                        ]
                                                },
                                                "keysExamined" : 0,
                                                "seeks" : 1,
                                                "dupsTested" : 0,
                                                "dupsDropped" : 0
                                        }
                                }
                        }
                }
        },
        "command" : {
                "find" : "employees",
                "filter" : {
                        "employee_id" : {
                                "$exists" : false
                        }
                },
                "limit" : 10,
                "singleBatch" : false,
                "sort" : {
                        "joiningDate" : 1
                },
                "projection" : {
                        "employee_id" : true,
                        "firstName" : true,
                        "lastName" : true,
                        "joiningDate" : true
                },
                "$db" : "qmulairline"
        },
        "serverInfo" : {
                "host" : "DESKTOP-O2C1LRU",
                "port" : 27017,
                "version" : "5.0.4",
                "gitVersion" : "62a84ede3cc9a334e8bc82160714df71e7d3a29e"
        },
        "serverParameters" : {
                "internalQueryFacetBufferSizeBytes" : 104857600,
                "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
                "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
                "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
                "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
                "internalQueryProhibitBlockingMergeOnMongoS" : 0,
                "internalQueryMaxAddToSetBytes" : 104857600,
                "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
}
>
>


------------------------------------------------------------------------------------Query no:3---------------------------------------------------------------------------------------------------
2. Explain and indexes for bookings Collection on flight_id field. The below output has been produced for query no. 3.(Booking ids with more than one flight.)

Output a) without indexes: 
- The hightlihted "stage" : "COLLSCAN" shows that full column scan was done on the document collection to fetch all relevant data. 
- The field "executionTimeMillisEstimate" : 27 shows that it took 27 milli seconds to execute the whole query.
- The "executionSuccess" : true shows that there are no logic or formatting issue and the query executed successfully.
- In the executionStats, it can be seen that for executionStages COLLSCAN was performed and it returned "nReturned" : 8 data based on the filter condition provided in the find query.

> db.bookings.find({ $and: [{"flight_id":{$exists:true}}, {$where: "this.flight_id.length > 1"}]}).explain("executionStats")

{ $and: [{"customer_id":{$exists:true}}, {title:"Dr."}]}

{
        "explainVersion" : "1",
        "queryPlanner" : {
                "namespace" : "qmulairline.bookings",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$where" : {
                                "code" : "this.flight_id.length > 1"
                        }
                },
                "maxIndexedOrSolutionsReached" : false,
                "maxIndexedAndSolutionsReached" : false,
                "maxScansToExplodeReached" : false,
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "$where" : {
                                        "code" : "this.flight_id.length > 1"
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 8,
                "executionTimeMillis" : 33,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 23,
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "$where" : {
                                        "code" : "this.flight_id.length > 1"
                                }
                        },
                        "nReturned" : 8,
                        "executionTimeMillisEstimate" : 27,
                        "works" : 25,
                        "advanced" : 8,
                        "needTime" : 16,
                        "needYield" : 0,
                        "saveState" : 1,
                        "restoreState" : 1,
                        "isEOF" : 1,
                        "direction" : "forward",
                        "docsExamined" : 23
                }
        },
        "command" : {
                "find" : "bookings",
                "filter" : {
                        "$where" : "this.flight_id.length > 1"
                },
                "$db" : "qmulairline"
        },
        "serverInfo" : {
                "host" : "DESKTOP-O2C1LRU",
                "port" : 27017,
                "version" : "5.0.4",
                "gitVersion" : "62a84ede3cc9a334e8bc82160714df71e7d3a29e"
        },
        "serverParameters" : {
                "internalQueryFacetBufferSizeBytes" : 104857600,
                "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
                "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
                "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
                "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
                "internalQueryProhibitBlockingMergeOnMongoS" : 0,
                "internalQueryMaxAddToSetBytes" : 104857600,
                "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
}
>

Created indexes for bookings collection for flight_id field.
db.bookings.getIndexes();
db.bookings.createIndex({"flight_id":1});
db.bookings.dropIndex("flight_id_1");

Output b) after indexes: 
- The hightlihted "stage" : "IXSCAN" shows that index column scan was done on the document collection to fetch all relevant data. 
- The field "executionTimeMillisEstimate" : 4 shows that it took 4 milli seconds to execute the whole query. 
	There was as significant decrease in the execution time after the indexes as compared to Output A which was "executionTimeMillisEstimate" : 27.
- The "executionSuccess" : true shows that there are no logic or formatting issue and the query executed successfully.
- In the executionStats, it can be seen that for executionStages IXSCAN was performed and it returned "nReturned" : 23 data 
	as there are overall 23 document in bookings collection and then in FETCH stage it returned "nReturned" : 8 data based on the filter condition provided in the find query.

> db.bookings.find({ $and: [{"flight_id":{$exists:true}}, {$where: "this.flight_id.length > 1"}]}).explain("executionStats")
{
        "explainVersion" : "1",
        "queryPlanner" : {
                "namespace" : "qmulairline.bookings",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "flight_id" : {
                                                "$exists" : true
                                        }
                                },
                                {
                                        "$where" : {
                                                "code" : "this.flight_id.length > 1"
                                        }
                                }
                        ]
                },
                "maxIndexedOrSolutionsReached" : false,
                "maxIndexedAndSolutionsReached" : false,
                "maxScansToExplodeReached" : false,
                "winningPlan" : {
                        "stage" : "FETCH",
                        "filter" : {
                                "$and" : [
                                        {
                                                "flight_id" : {
                                                        "$exists" : true
                                                }
                                        },
                                        {
                                                "$where" : {
                                                        "code" : "this.flight_id.length > 1"
                                                }
                                        }
                                ]
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "flight_id" : 1
                                },
                                "indexName" : "flight_id_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "flight_id" : [
                                                "flight_id"
                                        ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "flight_id" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 8,
                "executionTimeMillis" : 101,
                "totalKeysExamined" : 33,
                "totalDocsExamined" : 23,
                "executionStages" : {
                        "stage" : "FETCH",
                        "filter" : {
                                "$and" : [
                                        {
                                                "flight_id" : {
                                                        "$exists" : true
                                                }
                                        },
                                        {
                                                "$where" : {
                                                        "code" : "this.flight_id.length > 1"
                                                }
                                        }
                                ]
                        },
                        "nReturned" : 8,
                        "executionTimeMillisEstimate" : 4,
                        "works" : 34,
                        "advanced" : 8,
                        "needTime" : 25,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "docsExamined" : 23,
                        "alreadyHasObj" : 0,
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 23,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 34,
                                "advanced" : 23,
                                "needTime" : 10,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "keyPattern" : {
                                        "flight_id" : 1
                                },
                                "indexName" : "flight_id_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "flight_id" : [
                                                "flight_id"
                                        ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "flight_id" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                },
                                "keysExamined" : 33,
                                "seeks" : 1,
                                "dupsTested" : 33,
                                "dupsDropped" : 10
                        }
                }
        },
        "command" : {
                "find" : "bookings",
                "filter" : {
                        "$and" : [
                                {
                                        "flight_id" : {
                                                "$exists" : true
                                        }
                                },
                                {
                                        "$where" : "this.flight_id.length > 1"
                                }
                        ]
                },
                "$db" : "qmulairline"
        },
        "serverInfo" : {
                "host" : "DESKTOP-O2C1LRU",
                "port" : 27017,
                "version" : "5.0.4",
                "gitVersion" : "62a84ede3cc9a334e8bc82160714df71e7d3a29e"
        },
        "serverParameters" : {
                "internalQueryFacetBufferSizeBytes" : 104857600,
                "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
                "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
                "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
                "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
                "internalQueryProhibitBlockingMergeOnMongoS" : 0,
                "internalQueryMaxAddToSetBytes" : 104857600,
                "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
}
>
>
------------------------------------------------------------------------------------Query no:2---------------------------------------------------------------------------------------------------

3. Explain and indexes for Customer Collection on employee_id field. The below output has been produced for query no. 2.(Customers with doctoral degree)

Output a) without indexes: 
- The hightlihted "stage" : "COLLSCAN" shows that full column scan was done on the document collection to fetch all relevant data. 
- The field "executionTimeMillisEstimate" : 0 shows that it took less that 0 milli seconds to execute the whole query.
- The "executionSuccess" : true shows that there are no logic or formatting issue and the query executed successfully.
- In the executionStats, it can be seen that for executionStages COLLSCAN was performed and it returned "nReturned" : 8 data based on the filter condition provided in the find query.

> db.customers.find({ $and: [{"customer_id":{$exists:true}}, {title:"Dr."}]},{customer_id:true, firstName:true, lastName:true, email:true}).sort({firstName:1}).limit(10).explain("executionStats")
{
        "explainVersion" : "1",
        "queryPlanner" : {
                "namespace" : "qmulairline.customers",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "title" : {
                                                "$eq" : "Dr."
                                        }
                                },
                                {
                                        "customer_id" : {
                                                "$exists" : true
                                        }
                                }
                        ]
                },
                "maxIndexedOrSolutionsReached" : false,
                "maxIndexedAndSolutionsReached" : false,
                "maxScansToExplodeReached" : false,
                "winningPlan" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "transformBy" : {
                                "customer_id" : true,
                                "firstName" : true,
                                "lastName" : true,
                                "email" : true
                        },
                        "inputStage" : {
                                "stage" : "SORT",
                                "sortPattern" : {
                                        "firstName" : 1
                                },
                                "memLimit" : 104857600,
                                "limitAmount" : 10,
                                "type" : "simple",
                                "inputStage" : {
                                        "stage" : "COLLSCAN",
                                        "filter" : {
                                                "$and" : [
                                                        {
                                                                "title" : {
                                                                        "$eq" : "Dr."
                                                                }
                                                        },
                                                        {
                                                                "customer_id" : {
                                                                        "$exists" : true
                                                                }
                                                        }
                                                ]
                                        },
                                        "direction" : "forward"
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 8,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 25,
                "executionStages" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "nReturned" : 8,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 36,
                        "advanced" : 8,
                        "needTime" : 27,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "transformBy" : {
                                "customer_id" : true,
                                "firstName" : true,
                                "lastName" : true,
                                "email" : true
                        },
                        "inputStage" : {
                                "stage" : "SORT",
                                "nReturned" : 8,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 36,
                                "advanced" : 8,
                                "needTime" : 27,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "sortPattern" : {
                                        "firstName" : 1
                                },
                                "memLimit" : 104857600,
                                "limitAmount" : 10,
                                "type" : "simple",
                                "totalDataSizeSorted" : 2404,
                                "usedDisk" : false,
                                "inputStage" : {
                                        "stage" : "COLLSCAN",
                                        "filter" : {
                                                "$and" : [
                                                        {
                                                                "title" : {
                                                                        "$eq" : "Dr."
                                                                }
                                                        },
                                                        {
                                                                "customer_id" : {
                                                                        "$exists" : true
                                                                }
                                                        }
                                                ]
                                        },
                                        "nReturned" : 8,
                                        "executionTimeMillisEstimate" : 0,
                                        "works" : 27,
                                        "advanced" : 8,
                                        "needTime" : 18,
                                        "needYield" : 0,
                                        "saveState" : 0,
                                        "restoreState" : 0,
                                        "isEOF" : 1,
                                        "direction" : "forward",
                                        "docsExamined" : 25
                                }
                        }
                }
        },
        "command" : {
                "find" : "customers",
                "filter" : {
                        "$and" : [
                                {
                                        "customer_id" : {
                                                "$exists" : true
                                        }
                                },
                                {
                                        "title" : "Dr."
                                }
                        ]
                },
                "limit" : 10,
                "singleBatch" : false,
                "sort" : {
                        "firstName" : 1
                },
                "projection" : {
                        "customer_id" : true,
                        "firstName" : true,
                        "lastName" : true,
                        "email" : true
                },
                "$db" : "qmulairline"
        },
        "serverInfo" : {
                "host" : "DESKTOP-O2C1LRU",
                "port" : 27017,
                "version" : "5.0.4",
                "gitVersion" : "62a84ede3cc9a334e8bc82160714df71e7d3a29e"
        },
        "serverParameters" : {
                "internalQueryFacetBufferSizeBytes" : 104857600,
                "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
                "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
                "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
                "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
                "internalQueryProhibitBlockingMergeOnMongoS" : 0,
                "internalQueryMaxAddToSetBytes" : 104857600,
                "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
}
>

Created indexes for employees collection for employee_id field.
db.employees.createIndex({"employee_id":1});
db.employees.getIndexes();
db.employees.dropIndex("employee_id_1");

Output b) after indexes: 
- The hightlihted "stage" : "IXSCAN" shows that index column scan was done on the document collection to fetch all relevant data. 
- The field "executionTimeMillisEstimate" : 0 shows that it took less that 0 milli seconds to execute the whole query.
- The "executionSuccess" : true shows that there are no logic or formatting issue and the query executed successfully.
- In the executionStats, it can be seen that for executionStages IXSCAN was performed and it returned "nReturned" : 25 data 
	as there are overall 25 document in bookings collection and then in FETCH stage it returned "nReturned" : 8 data based on the filter condition provided in the find query.

> db.customers.find({ $and: [{"customer_id":{$exists:true}}, {title:"Dr."}]},{customer_id:true, firstName:true, lastName:true, email:true}).sort({firstName:1}).limit(10).explain("executionStats")
{
        "explainVersion" : "1",
        "queryPlanner" : {
                "namespace" : "qmulairline.customers",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "title" : {
                                                "$eq" : "Dr."
                                        }
                                },
                                {
                                        "customer_id" : {
                                                "$exists" : true
                                        }
                                }
                        ]
                },
                "maxIndexedOrSolutionsReached" : false,
                "maxIndexedAndSolutionsReached" : false,
                "maxScansToExplodeReached" : false,
                "winningPlan" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "transformBy" : {
                                "customer_id" : true,
                                "firstName" : true,
                                "lastName" : true,
                                "email" : true
                        },
                        "inputStage" : {
                                "stage" : "SORT",
                                "sortPattern" : {
                                        "firstName" : 1
                                },
                                "memLimit" : 104857600,
                                "limitAmount" : 10,
                                "type" : "simple",
                                "inputStage" : {
                                        "stage" : "FETCH",
                                        "filter" : {
                                                "$and" : [
                                                        {
                                                                "customer_id" : {
                                                                        "$exists" : true
                                                                }
                                                        },
                                                        {
                                                                "title" : {
                                                                        "$eq" : "Dr."
                                                                }
                                                        }
                                                ]
                                        },
                                        "inputStage" : {
                                                "stage" : "IXSCAN",
                                                "keyPattern" : {
                                                        "customer_id" : 1
                                                },
                                                "indexName" : "customer_id_1",
                                                "isMultiKey" : false,
                                                "multiKeyPaths" : {
                                                        "customer_id" : [ ]
                                                },
                                                "isUnique" : false,
                                                "isSparse" : false,
                                                "isPartial" : false,
                                                "indexVersion" : 2,
                                                "direction" : "forward",
                                                "indexBounds" : {
                                                        "customer_id" : [
                                                                "[MinKey, MaxKey]"
                                                        ]
                                                }
                                        }
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 8,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 25,
                "totalDocsExamined" : 25,
                "executionStages" : {
                        "stage" : "PROJECTION_SIMPLE",
                        "nReturned" : 8,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 35,
                        "advanced" : 8,
                        "needTime" : 26,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "transformBy" : {
                                "customer_id" : true,
                                "firstName" : true,
                                "lastName" : true,
                                "email" : true
                        },
                        "inputStage" : {
                                "stage" : "SORT",
                                "nReturned" : 8,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 35,
                                "advanced" : 8,
                                "needTime" : 26,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "sortPattern" : {
                                        "firstName" : 1
                                },
                                "memLimit" : 104857600,
                                "limitAmount" : 10,
                                "type" : "simple",
                                "totalDataSizeSorted" : 2404,
                                "usedDisk" : false,
                                "inputStage" : {
                                        "stage" : "FETCH",
                                        "filter" : {
                                                "$and" : [
                                                        {
                                                                "customer_id" : {
                                                                        "$exists" : true
                                                                }
                                                        },
                                                        {
                                                                "title" : {
                                                                        "$eq" : "Dr."
                                                                }
                                                        }
                                                ]
                                        },
                                        "nReturned" : 8,
                                        "executionTimeMillisEstimate" : 0,
                                        "works" : 26,
                                        "advanced" : 8,
                                        "needTime" : 17,
                                        "needYield" : 0,
                                        "saveState" : 0,
                                        "restoreState" : 0,
                                        "isEOF" : 1,
                                        "docsExamined" : 25,
                                        "alreadyHasObj" : 0,
                                        "inputStage" : {
                                                "stage" : "IXSCAN",
                                                "nReturned" : 25,
                                                "executionTimeMillisEstimate" : 0,
                                                "works" : 26,
                                                "advanced" : 25,
                                                "needTime" : 0,
                                                "needYield" : 0,
                                                "saveState" : 0,
                                                "restoreState" : 0,
                                                "isEOF" : 1,
                                                "keyPattern" : {
                                                        "customer_id" : 1
                                                },
                                                "indexName" : "customer_id_1",
                                                "isMultiKey" : false,
                                                "multiKeyPaths" : {
                                                        "customer_id" : [ ]
                                                },
                                                "isUnique" : false,
                                                "isSparse" : false,
                                                "isPartial" : false,
                                                "indexVersion" : 2,
                                                "direction" : "forward",
                                                "indexBounds" : {
                                                        "customer_id" : [
                                                                "[MinKey, MaxKey]"
                                                        ]
                                                },
                                                "keysExamined" : 25,
                                                "seeks" : 1,
                                                "dupsTested" : 0,
                                                "dupsDropped" : 0
                                        }
                                }
                        }
                }
        },
        "command" : {
                "find" : "customers",
                "filter" : {
                        "$and" : [
                                {
                                        "customer_id" : {
                                                "$exists" : true
                                        }
                                },
                                {
                                        "title" : "Dr."
                                }
                        ]
                },
                "limit" : 10,
                "singleBatch" : false,
                "sort" : {
                        "firstName" : 1
                },
                "projection" : {
                        "customer_id" : true,
                        "firstName" : true,
                        "lastName" : true,
                        "email" : true
                },
                "$db" : "qmulairline"
        },
        "serverInfo" : {
                "host" : "DESKTOP-O2C1LRU",
                "port" : 27017,
                "version" : "5.0.4",
                "gitVersion" : "62a84ede3cc9a334e8bc82160714df71e7d3a29e"
        },
        "serverParameters" : {
                "internalQueryFacetBufferSizeBytes" : 104857600,
                "internalQueryFacetMaxOutputDocSizeBytes" : 104857600,
                "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600,
                "internalDocumentSourceGroupMaxMemoryBytes" : 104857600,
                "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600,
                "internalQueryProhibitBlockingMergeOnMongoS" : 0,
                "internalQueryMaxAddToSetBytes" : 104857600,
                "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600
        },
        "ok" : 1
}
>
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
