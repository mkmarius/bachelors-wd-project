<?php function object_to_array($jobs) {
    if(is_array($jobs) || is_object($jobs))
    {
        $result = array();
 
        foreach($jobs as $key => $value) {
            $result[$key] = object_to_array($value);
        }
 
        return $result;
    }
 
    return $jobs;
}
$jobs_array = object_to_array($jobs);
$jobs_json =  json_encode($jobs_array, JSON_UNESCAPED_UNICODE, JSON_PRETTY_PRINT);
print_r($jobs_json);
?>