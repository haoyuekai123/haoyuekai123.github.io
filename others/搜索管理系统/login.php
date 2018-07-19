<?php 
	$username=$_POST['username']; 
	$password=$_POST['password'];
	$usermsg =array( 
		'test' => '123456', 
		'admin' => '123456', 
		'test2' => '123456', 
		'admin2' => '123456', 
	); 
	$name=array( 
		'test' => '测试', 
		'admin' => '管理员', 
		'test2' => '测试2', 
		'admin2' => '管理员2', 
	);
	$type=0;
	foreach($usermsg as $key => $value){
		if($username==$key and $password==$value){
			$type=1;
			$name2=$name[$key];
			break;
		} else if($username==$key and $password!=$value){
			$type=2;
			break;
		} else if($username!=$key and $password!=$value){
			$type=0;
		}
	} 
	$response=array( 
		'type' => $type,
		'name' => $name2,
	);
	 
	
	echo json_encode($response); 
?>
