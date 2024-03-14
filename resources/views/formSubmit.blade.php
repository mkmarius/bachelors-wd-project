<?php function object_to_array($answers) {
    if(is_array($answers) || is_object($answers))
    {
        $result = array();
 
        foreach($answers as $key => $value) {
            $result[$key] = object_to_array($value);
        }
 
        return $result;
    }
 
    return $answers;
}
$answers_array = object_to_array($answers);
$answers_json =  json_encode($answers_array, JSON_UNESCAPED_UNICODE, JSON_PRETTY_PRINT);
print_r($answers_json);
?>