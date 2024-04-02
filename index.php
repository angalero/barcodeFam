<?php

/*
// This displays the error codes
    ini_set("display_errors", 1);
    error_reporting(E_ALL);


   // $green = "<link rel="stylesheet" href="green.css">";
    $yellow = <link rel="stylesheet" href="yellow.css">;
    $red = <link rel="stylesheet" href="red.css">;

    $title = "This";

    $output = array();
	
	
	
	$output[] = "<html>\n";
	$output[] = "<head>\n<title>$title</title>\n</head>\n"; // the head tag
	
	$output[] = "<body>\n"; // starting the body
	$output[] = "</body>\n";
	$output[] = "</html>\n";
	
	/* expand the code in the array to see what you are working with
	and for it to appear on the screen. Send out the output*/
	//print(implode($output));

    // This displays the error codes
	ini_set("display_errors", 1);
	error_reporting(E_ALL);
	
	$title = "Course Data";
	$heading = "Scheduled Courses Fall 2020";
	$classData = "courses.txt";
	$departments = array();
	
	
	
	$infile = fopen($classData, "r");
	$line = fgets($infile);
	while ($line) {				// the loop
		$data = explode("|", $line);
		$course = explode(" ", $data[1]);
		if (!in_array($course[0], $departments)) {
			$departments[] = $course[0];
			
	
		}
		//$record = array("dept"=>$data[1]);
		
		$line = fgets($infile);
	}

				
	fclose($infile);	
				
	sort($departments);
	$output = array();
	
	
	
	$output[] = "<html>\n";
	$output[] = "<head>\n<title>$title</title>\n<link rel='stylesheet' href='styles.css'/>\n</head>\n"; // the head tag
	
	$output[] = "<body>\n"; // starting the body
	$output[] = "<h1>$heading</h1>\n";
	
	$output[] = "<table>\n";
	$output[] = "<form method=post action=filter.php>\n";
	$output[] = "<tr>\n<td>\n<p>\nSession:</td>\n<td>\n<select name=Session>\n
				<option value=all>2020 Fall</option>\n<option value=1>2020 Fall - Session 1</option>\n
				<option value=2>2020 Fall - Session 2</option>\n<option value=14>2020 Fall - 14-Weeks</option>\n</select>\n</td>\n</tr>\n</p>\n";
	$output[] = "<tr>\n<td>\n<p>\nDepartment:</td>\n<td>\n<select name=Dept>\n<option>All</option>\n"; // department
				
				// 
				foreach($departments as $dept) {
					$output[] = "<option>$dept</option>\n";
				}
	
	$output[] = "</select>\n</td>\n</tr>\n</p>\n";
	$output[] = "<tr>\n<td>\n<p>Sort By:</td>\n<td>\n<input type=radio name=sort value='Course Number'> Course Number\n";
	$output[] = "<input type=radio name=sort value='Request Number'> Request Number \n</td>\n</tr>\n</p>\n";
	$output[] = "<tr>\n<td colspan=2>\n<input type='submit' value=Search></td>\n</tr>\n";
	$output[] = "</table>\n";
	
	
	
	// Finish the html syntax 	
	//$output[] = "<footer> For Presentation purposes Inc. </footer>\n"; // This is the footer
	$output[] = "</body>\n";
	$output[] = "</html>\n";
	
	/* expand the code in the array to see what you are working with
	and for it to appear on the screen. Send out the output*/
	print(implode($output));