(: XML and Structured Information: Coursework 1. For HTML output following steps were taken:
     1. Navigate to Configure Transformation Scenario.
     2. Click on New->XQuery Transformation.
     3. Give desired scenario name and on Output tab select Output File and save the file to ${currentFileURL}-out.html :)

<html>
    <body>
        <h1>ECS789P CourseWork - Solution#2</h1>
        <table
            border="1"
            cellpadding="10px"
            cellspacing="5px">
            <tr><th>Target</th><th>Successor</th><th>Frequency</th></tr>
            {
                (: below set of code fetches the target list, as of now we have only one word as 'has' :)
                let $has := (
                for $xml in collection("./?select=*.xml")
                for $w at $wpos in $xml//w
                    where
                    fn:starts-with(fn:lower-case($w), "has")
                return
                    fn:normalize-space($w))
                
                (: Below Code creates a successor_List which has list of all 
                the words that come after has, the logic is taken from the 
                coursework first question:)
                let $successor_List := (
                for $xml in collection("./?select=*.xml")
                for $w at $wpos in $xml//w
                for $w1 at $w1pos in $xml//w
                    where
                    (fn:starts-with(fn:lower-case($w), distinct-values($has)) and ($wpos + 1 = $w1pos))
                return
                    fn:normalize-space($w1))
                
                (:Below section of code iterates the successor_List 
                and find the frequency of it occurance through the count method:)
                for $unique in distinct-values($successor_List)
                let $unique_Count := count($successor_List[. = $unique])
                    order by $unique_Count descending
                return
                    <tr><td>{distinct-values($has)}</td><td>{$unique}</td><td>{$unique_Count}</td></tr>
            }
        </table>
    </body>
</html>
