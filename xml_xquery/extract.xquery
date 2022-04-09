(: XML and Structured Information: Coursework 1. For HTML output following steps were taken:
     1. Navigate to Configure Transformation Scenario.
     2. Click on New->XQuery Transformation.
     3. Give desired scenario name and on Output tab select Output File and save the file to ${currentFileURL}-out.html :)

<html>
    <body>
        <h1>ECS789P CourseWork - Solution#1</h1>
        <table
            border="1"
            cellpadding="10px"
            cellspacing="5px">
            <tr><th>Target</th><th>Successor</th></tr>
            {
                (: Using Collection method to fetch all the .xml files in the same directory:)
                for $xml in collection("./?select=*.xml")
                (:Iterating through the each xml file from the collection and targeting only the 'w' node :)
                for $w at $wpos in $xml//w
                for $w1 at $w1pos in $xml//w
                    where
                    (: condition for w value to start with 'has' and 
                    calculating the next position while iterating $xml again to find the next word. :)
                    fn:starts-with(fn:lower-case($w), "has") and ($wpos + 1 = $w1pos)
                return
                    <tr><td>{fn:normalize-space($w)}</td><td>{fn:normalize-space($w1)}</td></tr>
            }
        </table>
    </body>
</html>