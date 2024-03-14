<?php function object_to_array($questions) {
        if(is_array($questions) || is_object($questions))
        {
            $result = array();
     
            foreach($questions as $key => $value) {
                $result[$key] = object_to_array($value);
            }
     
            return $result;
        }
     
        return $questions;
    }
    $questions_array = object_to_array($questions);
    $questions_json =  json_encode($questions_array, JSON_UNESCAPED_UNICODE, JSON_PRETTY_PRINT);
    print_r($questions_json);
    ?>