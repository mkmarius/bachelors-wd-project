<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use App\Models\Answers;

class AnswersController extends Controller
{

    public function index(){
        $answers = DB::select('select * from answers');
        return view('/formSubmit', ['answers' => $answers]);
    }  
    /**  
     * success response method.  
     *  
     * @return \Illuminate\Http\Response  
     */ 
    public function formSubmit(Request $request)  
    { 
        $answers = $request->sendingData['answer'];
        $playerName = $request->sendingData['name'];
        error_log($playerName);

        foreach ($answers as $answer) {
            $answerModel = new Answers();
            $answerModel->type = $answer['type'];
            $answerModel->count = $answer['count'];
            $answerModel->player_name = $playerName;
            $answerModel->save();
        }
        
            
        
        
        return $answers;  
    }  
    public function deleteData(){
        Answers::truncate();
    }
}
